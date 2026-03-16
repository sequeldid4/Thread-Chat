import React, { useState } from 'react'
import { ref, get, set, update } from 'firebase/database'
import { db } from '../firebase'

function rnd(n = 10) { return Math.random().toString(36).slice(2, 2 + n) }

function Avatar({ name, size = 42 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 12,
      background: 'var(--s3)', border: '1px solid var(--b1)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.38, fontWeight: 700, textTransform: 'uppercase',
      flexShrink: 0, color: 'var(--accent)',
    }}>
      {name?.[0] || '?'}
    </div>
  )
}

// Single chat row in sidebar
function ChatRow({ chat, active, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '10px 16px', cursor: 'pointer',
      background: active ? 'var(--s2)' : 'transparent',
      borderLeft: active ? '2px solid var(--accent)' : '2px solid transparent',
      transition: 'background 0.15s',
    }}
    onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--s1)' }}
    onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      <Avatar name={chat.peerName} />
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
        <div style={{ minWidth: 18, height: 18, borderRadius: 100, background: 'var(--accent)', color: 'var(--bg)', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px', flexShrink: 0 }}>
          {chat.unread}
        </div>
      )}
    </div>
  )
}

// Request badge
function RequestRow({ req, myUsername, onAccept, onDecline }) {
  return (
    <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--b1)', background: 'var(--s1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <Avatar name={req.name} size={34} />
        <div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>{req.name}</div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)' }}>@{req.from}</div>
        </div>
      </div>
      {req.message && <div style={{ fontSize: 12, color: 'var(--dim)', marginBottom: 10, paddingLeft: 2 }}>"{req.message}"</div>}
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => onAccept(req)} style={{ flex: 1, padding: '7px', background: 'var(--accent)', color: 'var(--bg)', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>Accept</button>
        <button onClick={() => onDecline(req)} style={{ flex: 1, padding: '7px', background: 'transparent', color: 'var(--dim)', border: '1px solid var(--b1)', borderRadius: 8, fontSize: 11, cursor: 'pointer' }}>Decline</button>
      </div>
    </div>
  )
}

export default function Sidebar({ session, chats, requests, activeChatId, onSelectChat, onSignOut, isMobile, onClose }) {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState(null)  // null | 'loading' | 'notfound' | {username, name}
  const [reqMsg, setReqMsg] = useState('')
  const [sending, setSending] = useState(false)
  const [tab, setTab] = useState('chats') // 'chats' | 'requests'

  async function doSearch() {
    const q = search.trim().toLowerCase()
    if (!q) return
    if (q === session.username) { setSearchResult({ error: "that's you" }); return }
    setSearchResult('loading')
    const snap = await get(ref(db, 'users/' + q))
    if (!snap.exists()) { setSearchResult('notfound'); return }
    const data = snap.val()
    // Check if already have a chat with them
    const alreadyChat = chats.find(c => c.peerUsername === q)
    setSearchResult({ username: q, name: data.name, alreadyChat })
  }

  async function sendRequest() {
    if (!searchResult?.username) return
    setSending(true)
    try {
      await set(ref(db, `requests/${searchResult.username}/${session.username}`), {
        name: session.myName,
        message: reqMsg.trim(),
        status: 'pending',
        ts: Date.now(),
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
    // Create chat
    await set(ref(db, `chats/${chatId}/meta`), {
      members: { [session.username]: true, [req.from]: true },
      createdAt: Date.now(),
    })
    // Add to both users' chat lists
    await update(ref(db, `users/${session.username}/chats/${chatId}`), {
      peerUsername: req.from, peerName: req.name,
      lastMsg: '', lastTime: time, lastTs: Date.now(),
    })
    // Get requester's name for their side
    const reqSnap = await get(ref(db, `users/${req.from}`))
    const theirName = reqSnap.exists() ? reqSnap.val().name : req.from
    await update(ref(db, `users/${req.from}/chats/${chatId}`), {
      peerUsername: session.username, peerName: session.myName,
      lastMsg: '', lastTime: time, lastTs: Date.now(),
    })
    // Mark request as accepted
    await update(ref(db, `requests/${session.username}/${req.from}`), { status: 'accepted' })
    // Also notify sender that request was accepted
    await set(ref(db, `requests/${req.from}/_accepted/${session.username}`), {
      chatId, peerName: session.myName, ts: Date.now(),
    })
    onSelectChat({ chatId, peerUsername: req.from, peerName: req.name })
    setTab('chats')
  }

  async function declineRequest(req) {
    await update(ref(db, `requests/${session.username}/${req.from}`), { status: 'declined' })
  }

  const sidebarStyle = {
    width: isMobile ? '100%' : 300,
    height: '100%',
    background: 'var(--s1)',
    borderRight: '1px solid var(--b1)',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    ...(isMobile ? { position: 'fixed', inset: 0, zIndex: 50, animation: 'slideIn 0.2s ease' } : {}),
  }

  return (
    <div style={sidebarStyle}>
      {/* Header */}
      <div style={{ padding: '16px 16px 12px', borderBottom: '1px solid var(--b1)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -2, flex: 1, color: 'var(--text)' }}>
          thread<span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', verticalAlign: 'super', marginLeft: 2 }} />
        </div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)', letterSpacing: 1 }}>@{session.username}</div>
        {isMobile && (
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--dim)', fontSize: 20, cursor: 'pointer', padding: 4 }}>×</button>
        )}
      </div>

      {/* Search bar */}
      <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--b1)' }}>
        <div style={{ display: 'flex', gap: 8, background: 'var(--s2)', border: '1px solid var(--b1)', borderRadius: 10, padding: '8px 12px', alignItems: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--dim)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            value={search} onChange={e => { setSearch(e.target.value); setSearchResult(null) }}
            onKeyDown={e => e.key === 'Enter' && doSearch()}
            placeholder="Search by username..."
            style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 13, color: 'var(--text)' }}
          />
          {search && (
            <button onClick={doSearch} style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: 11, cursor: 'pointer', fontFamily: "'JetBrains Mono',monospace", letterSpacing: 0.5, flexShrink: 0 }}>go</button>
          )}
        </div>

        {/* Search result */}
        {searchResult && searchResult !== 'loading' && searchResult !== 'notfound' && !searchResult.error && (
          <div style={{ marginTop: 10, padding: '12px', background: 'var(--s2)', borderRadius: 10, border: '1px solid var(--b1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <Avatar name={searchResult.name} size={32} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{searchResult.name}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)' }}>@{searchResult.username}</div>
              </div>
            </div>
            {searchResult.alreadyChat ? (
              <button onClick={() => { onSelectChat(searchResult.alreadyChat); setSearch(''); setSearchResult(null) }}
                style={{ width: '100%', padding: '7px', background: 'var(--accent)', color: 'var(--bg)', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
                Open chat
              </button>
            ) : searchResult.sent ? (
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dim)', textAlign: 'center', letterSpacing: 1 }}>request sent ✓</div>
            ) : (
              <>
                <input value={reqMsg} onChange={e => setReqMsg(e.target.value)}
                  placeholder="Add a message (optional)"
                  style={{ width: '100%', background: 'var(--s3)', border: '1px solid var(--b1)', borderRadius: 8, padding: '7px 10px', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 12, color: 'var(--text)', outline: 'none', marginBottom: 8 }}
                />
                <button onClick={sendRequest} disabled={sending}
                  style={{ width: '100%', padding: '7px', background: 'var(--accent)', color: 'var(--bg)', border: 'none', borderRadius: 8, fontSize: 11, fontWeight: 700, cursor: 'pointer', opacity: sending ? 0.5 : 1 }}>
                  {sending ? 'Sending...' : 'Send chat request'}
                </button>
              </>
            )}
          </div>
        )}
        {searchResult === 'notfound' && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dim)', marginTop: 8, paddingLeft: 4, letterSpacing: 0.5 }}>↳ user not found</div>}
        {searchResult?.error && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#886655', marginTop: 8, paddingLeft: 4 }}>↳ {searchResult.error}</div>}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--b1)' }}>
        {['chats', 'requests'].map(t => (
          <div key={t} onClick={() => setTab(t)} style={{
            flex: 1, padding: '10px', textAlign: 'center', cursor: 'pointer',
            fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fontWeight: 500,
            letterSpacing: 2, textTransform: 'uppercase',
            color: tab === t ? 'var(--text)' : 'var(--dim)',
            borderBottom: tab === t ? '2px solid var(--accent)' : '2px solid transparent',
            transition: 'all 0.15s',
            position: 'relative',
          }}>
            {t}
            {t === 'requests' && requests.length > 0 && (
              <span style={{ marginLeft: 6, background: '#e55', color: '#fff', borderRadius: 100, fontSize: 8, padding: '1px 5px', fontWeight: 700 }}>{requests.length}</span>
            )}
          </div>
        ))}
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {tab === 'chats' && (
          chats.length === 0
            ? <div style={{ padding: '40px 20px', textAlign: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dimmer)', letterSpacing: 1, lineHeight: 2 }}>
                NO CHATS YET<br/>SEARCH A USERNAME<br/>TO START
              </div>
            : chats.map(c => (
                <ChatRow key={c.chatId} chat={c} active={c.chatId === activeChatId}
                  onClick={() => { onSelectChat(c); if (isMobile) onClose() }} />
              ))
        )}
        {tab === 'requests' && (
          requests.length === 0
            ? <div style={{ padding: '40px 20px', textAlign: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dimmer)', letterSpacing: 1 }}>NO PENDING REQUESTS</div>
            : requests.map(r => (
                <RequestRow key={r.from} req={r} myUsername={session.username}
                  onAccept={acceptRequest} onDecline={declineRequest} />
              ))
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid var(--b1)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--s3)', border: '1px solid var(--b1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', flexShrink: 0 }}>
          {session.myName?.[0]}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{session.myName}</div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)', letterSpacing: 0.5 }}>@{session.username}</div>
        </div>
        <button onClick={onSignOut} title="Sign out"
          style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 16, padding: 4, borderRadius: 8, transition: 'color 0.15s' }}>
          ↩
        </button>
      </div>
    </div>
  )
}
