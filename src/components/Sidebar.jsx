import React, { useState } from 'react'
import { Avatar, UploadableAvatar } from './Avatar'
import ProfileModal from './ProfileModal'
import { ref, get, set, update } from 'firebase/database'
import { db } from '../firebase'
import Avatar from './Avatar'
import PfpUploader from './PfpUploader'

function rnd(n = 10) { return Math.random().toString(36).slice(2, 2 + n) }

function ChatRow({ chat, active, onClick, index }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '10px 16px', cursor: 'pointer',
      background: active ? 'var(--s2)' : 'transparent',
      borderLeft: active ? '2px solid var(--accent)' : '2px solid transparent',
      transition: 'background 0.15s, border-color 0.2s',
      animation: `rowIn 0.3s ease ${index * 40}ms both`,
    }}
    onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--s1)' }}
    onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      <Avatar username={chat.peerUsername} name={chat.peerName} size={44} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
          <div style={{ fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{chat.peerName}</div>
          {chat.lastTime && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)', flexShrink: 0, marginLeft: 8 }}>{chat.lastTime}</div>}
        </div>
        <div style={{ fontSize: 12, color: 'var(--dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {chat.lastMsg || 'no messages yet'}
        </div>
      </div>
      {chat.unread > 0 && (
        <div className="badge-pulse" style={{ minWidth: 18, height: 18, borderRadius: 100, background: 'var(--accent)', color: 'var(--bg)', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px', flexShrink: 0 }}>
          {chat.unread}
        </div>
      )}
    {viewProfile && (
      <ProfileModal
        username={viewProfile}
        isMe={viewProfile === session.username}
        onClose={() => setViewProfile(null)}
        onMessage={username => {
          const chat = chats.find(c => c.peerUsername === username)
          if (chat) { onSelectChat(chat); if (isMobile) onClose() }
        }}
      />
    )}
    </div>
  )
}

function RequestRow({ req, myUsername, onAccept, onDecline }) {
  const [accepting, setAccepting] = useState(false)
  return (
    <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--b1)', background: 'var(--s1)', animation: 'fadeUp 0.3s ease both' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <Avatar username={req.from} name={req.name} size={34} />
        <div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>{req.name}</div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)' }}>@{req.from}</div>
        </div>
      </div>
      {req.message && <div style={{ fontSize: 12, color: 'var(--dim)', marginBottom: 10, paddingLeft: 2 }}>"{req.message}"</div>}
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={async () => { setAccepting(true); await onAccept(req) }}
          style={{ flex: 1, padding: '7px', background: 'var(--accent)', color: 'var(--bg)', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', transition: 'transform 0.15s', opacity: accepting ? 0.6 : 1 }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
          {accepting ? '...' : 'Accept'}
        </button>
        <button onClick={() => onDecline(req)}
          style={{ flex: 1, padding: '7px', background: 'transparent', color: 'var(--dim)', border: '1px solid var(--b1)', borderRadius: 8, fontSize: 11, cursor: 'pointer', transition: 'border-color 0.15s, color 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--b2)'; e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--b1)'; e.currentTarget.style.color = 'var(--dim)' }}>
          Decline
        </button>
      </div>
    </div>
  )
}

export default function Sidebar({ session, chats, requests, activeChatId, onSelectChat, onSignOut, isMobile, onClose }) {
  const [search, setSearch]             = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const [reqMsg, setReqMsg]             = useState('')
  const [sending, setSending]           = useState(false)
  const [tab, setTab]                   = useState('chats')
  const [showPfpUploader, setShowPfpUploader] = useState(false)
  const [myPfp, setMyPfp]               = useState(null)

  async function doSearch() {
    const q = search.trim().toLowerCase()
    if (!q) return
    if (q === session.username) { setSearchResult({ error: "that's you" }); return }
    setSearchResult('loading')
    const snap = await get(ref(db, 'users/' + q))
    if (!snap.exists()) { setSearchResult('notfound'); return }
    const alreadyChat = chats.find(c => c.peerUsername === q)
    setSearchResult({ username: q, name: snap.val().name, alreadyChat })
  }

  async function sendRequest() {
    if (!searchResult?.username) return
    setSending(true)
    try {
      await set(ref(db, `requests/${searchResult.username}/${session.username}`), {
        name: session.myName, message: reqMsg.trim(), status: 'pending', ts: Date.now(),
      })
      setSearchResult({ ...searchResult, sent: true })
      setReqMsg('')
    } catch (e) {}
    setSending(false)
  }

  async function acceptRequest(req) {
    const chatId = 'c_' + rnd(14)
    const now = new Date()
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    await set(ref(db, `chats/${chatId}/meta`), { members: { [session.username]: true, [req.from]: true }, createdAt: Date.now() })
    await update(ref(db, `users/${session.username}/chats/${chatId}`), { peerUsername: req.from, peerName: req.name, lastMsg: '', lastTime: time, lastTs: Date.now() })
    await update(ref(db, `users/${req.from}/chats/${chatId}`), { peerUsername: session.username, peerName: session.myName, lastMsg: '', lastTime: time, lastTs: Date.now() })
    await update(ref(db, `requests/${session.username}/${req.from}`), { status: 'accepted' })
    await set(ref(db, `requests/${req.from}/_accepted/${session.username}`), { chatId, peerName: session.myName, ts: Date.now() })
    onSelectChat({ chatId, peerUsername: req.from, peerName: req.name })
    setTab('chats')
  }

  async function declineRequest(req) {
    await update(ref(db, `requests/${session.username}/${req.from}`), { status: 'declined' })
  }

  return (
    <div style={{
      width: isMobile ? '100%' : 300, height: '100%',
      background: 'var(--s1)', borderRight: '1px solid var(--b1)',
      display: 'flex', flexDirection: 'column', flexShrink: 0,
      ...(isMobile ? { position: 'fixed', inset: 0, zIndex: 50, animation: 'slideIn 0.25s cubic-bezier(0.22,1,0.36,1)' } : { animation: 'fadeIn 0.3s ease' }),
    }}>

      {/* Header */}
      <div style={{ padding: '16px 16px 12px', borderBottom: '1px solid var(--b1)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -2, flex: 1, color: 'var(--text)', animation: 'logoIn 0.6s ease' }}>
          thread<span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', verticalAlign: 'super', marginLeft: 2, animation: 'pulse 2s ease infinite' }} />
        </div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)', letterSpacing: 1, animation: 'fadeIn 0.5s ease 0.2s both' }}>@{session.username}</div>
        {isMobile && (
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--dim)', fontSize: 20, cursor: 'pointer', padding: 4, transition: 'color 0.15s, transform 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'rotate(90deg)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--dim)'; e.currentTarget.style.transform = 'rotate(0)' }}>×</button>
        )}
      </div>

      {/* Search */}
      <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--b1)' }}>
        <div style={{ display: 'flex', gap: 8, background: 'var(--s2)', border: '1px solid var(--b1)', borderRadius: 10, padding: '8px 12px', alignItems: 'center', transition: 'border-color 0.2s, box-shadow 0.2s' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--dim)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input value={search} onChange={e => { setSearch(e.target.value); setSearchResult(null) }}
            onKeyDown={e => e.key === 'Enter' && doSearch()}
            placeholder="Search by username..."
            style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 13, color: 'var(--text)' }} />
          {search && (
            <button onClick={doSearch} style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: 11, cursor: 'pointer', fontFamily: "'JetBrains Mono',monospace", letterSpacing: 0.5, flexShrink: 0, transition: 'transform 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>go</button>
          )}
        </div>
        {searchResult === 'loading' && <div className="shimmer" style={{ height: 60, borderRadius: 10, marginTop: 10 }} />}
        {searchResult && searchResult !== 'loading' && searchResult !== 'notfound' && !searchResult.error && (
          <div style={{ marginTop: 10, padding: '12px', background: 'var(--s2)', borderRadius: 10, border: '1px solid var(--b1)', animation: 'fadeUp 0.25s ease both' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <Avatar username={searchResult.username} name={searchResult.name} size={32} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{searchResult.name}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)' }}>@{searchResult.username}</div>
              </div>
            </div>
            {searchResult.alreadyChat ? (
              <button onClick={() => { onSelectChat(searchResult.alreadyChat); setSearch(''); setSearchResult(null) }}
                style={{ width: '100%', padding: '7px', background: 'var(--accent)', color: 'var(--bg)', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', transition: 'transform 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>Open chat</button>
            ) : searchResult.sent ? (
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dim)', textAlign: 'center', letterSpacing: 1, animation: 'fadeIn 0.3s ease' }}>request sent ✓</div>
            ) : (
              <>
                <input value={reqMsg} onChange={e => setReqMsg(e.target.value)} placeholder="Add a message (optional)"
                  style={{ width: '100%', background: 'var(--s3)', border: '1px solid var(--b1)', borderRadius: 8, padding: '7px 10px', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 12, color: 'var(--text)', outline: 'none', marginBottom: 8, transition: 'border-color 0.2s' }}
                  onFocus={e => e.target.style.borderColor = 'var(--b2)'}
                  onBlur={e => e.target.style.borderColor = 'var(--b1)'} />
                <button onClick={sendRequest} disabled={sending}
                  style={{ width: '100%', padding: '7px', background: 'var(--accent)', color: 'var(--bg)', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', opacity: sending ? 0.5 : 1, transition: 'transform 0.15s' }}
                  onMouseEnter={e => { if (!sending) e.currentTarget.style.transform = 'scale(1.02)' }}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                  {sending ? 'Sending...' : 'Send chat request'}
                </button>
              </>
            )}
          </div>
        )}
        {searchResult === 'notfound' && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dim)', marginTop: 8, paddingLeft: 4, letterSpacing: 0.5, animation: 'fadeIn 0.2s ease' }}>↳ user not found</div>}
        {searchResult?.error && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#886655', marginTop: 8, paddingLeft: 4, animation: 'fadeIn 0.2s ease' }}>↳ {searchResult.error}</div>}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--b1)' }}>
        {['chats', 'requests'].map(t => (
          <div key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '10px', textAlign: 'center', cursor: 'pointer', fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', color: tab === t ? 'var(--text)' : 'var(--dim)', borderBottom: tab === t ? '2px solid var(--accent)' : '2px solid transparent', transition: 'color 0.2s, border-color 0.2s', position: 'relative' }}>
            {t}
            {t === 'requests' && requests.length > 0 && (
              <span className="badge-pulse" style={{ marginLeft: 6, background: '#e55', color: '#fff', borderRadius: 100, fontSize: 8, padding: '1px 5px', fontWeight: 700, display: 'inline-block' }}>{requests.length}</span>
            )}
          </div>
        ))}
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {tab === 'chats' && (
          chats.length === 0
            ? <div style={{ padding: '40px 20px', textAlign: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dimmer)', letterSpacing: 1, lineHeight: 2, animation: 'fadeIn 0.4s ease 0.2s both' }}>NO CHATS YET<br/>SEARCH A USERNAME<br/>TO START</div>
            : chats.map((c, i) => <ChatRow key={c.chatId} chat={c} active={c.chatId === activeChatId} index={i} onClick={() => { onSelectChat(c); if (isMobile) onClose() }} />)
        )}
        {tab === 'requests' && (
          requests.length === 0
            ? <div style={{ padding: '40px 20px', textAlign: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dimmer)', letterSpacing: 1, animation: 'fadeIn 0.4s ease both' }}>NO PENDING REQUESTS</div>
            : requests.map(r => <RequestRow key={r.from} req={r} myUsername={session.username} onAccept={acceptRequest} onDecline={declineRequest} />)
        )}
      </div>

      {/* Footer — click avatar to change pfp */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid var(--b1)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar
          username={session.username}
          name={session.myName}
          size={34}
          onClick={() => setShowPfpUploader(true)}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{session.myName}</div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)', letterSpacing: 0.5 }}>@{session.username}</div>
        </div>
        <button onClick={onSignOut} title="Sign out"
          style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 16, padding: 4, borderRadius: 8, transition: 'color 0.15s, transform 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'translateX(2px)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--dim)'; e.currentTarget.style.transform = 'translateX(0)' }}>↩</button>
      </div>

      {/* PFP Uploader modal */}
      {showPfpUploader && (
        <PfpUploader
          username={session.username}
          currentPfp={myPfp}
          onClose={() => setShowPfpUploader(false)}
          onUpdated={url => setMyPfp(url)}
        />
      )}
    </div>
  )
}
