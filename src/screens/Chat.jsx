import React, { useRef, useEffect, useState } from 'react'
import { ref, push, update, remove, set, get } from 'firebase/database'
import { db, storage } from '../firebase'
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useMessages } from '../hooks/useMessages'
import { usePresence } from '../hooks/usePresence'
import { useTyping } from '../hooks/useTyping'
import { useSound } from '../hooks/useSound'
import TopBar from '../components/TopBar'
import ChatBubble from '../components/ChatBubble'
import MessageInput from '../components/MessageInput'
import EmojiPicker from '../components/EmojiPicker'
import Settings from '../components/Settings'
import Menu from '../components/Menu'
import Invite from './Invite'

export default function Chat({ activeChat, session, uid, prefs, setPref, onSidebarOpen, showSidebarBtn }) {
  const { chatId, peerName, peerUsername } = activeChat
  const [replyTo, setReplyTo]   = useState(null)
  const [picker, setPicker]     = useState(null)
  const [lightbox, setLightbox] = useState(null)
  const [showSettings, setShowSettings] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showInvite, setShowInvite] = useState(false)
  const [uploadPct, setUploadPct] = useState(0)
  const [inviteToken, setInviteToken] = useState('')

  const messages   = useMessages(chatId)
  const peerOnline = usePresence(chatId, uid, session.myName)
  const { peerTyping, notifyTyping, stopTyping } = useTyping(chatId, uid)
  const ping       = useSound(prefs.msgSound)
  const wrapRef    = useRef(null)
  const prevCount  = useRef(0)
  const notifGranted = useRef(Notification.permission === 'granted')

  // Load invite token for this chat
  useEffect(() => {
    get(ref(db, `chats/${chatId}/meta/token`)).then(snap => {
      if (snap.exists()) { setInviteToken(snap.val()); return }
      // Generate a token if none exists
      const tok = Math.random().toString(36).slice(2, 24)
      set(ref(db, `chats/${chatId}/meta/token`), tok)
      setInviteToken(tok)
    })
  }, [chatId])

  // Sound + notifications for new incoming
  useEffect(() => {
    if (messages.length <= prevCount.current) { prevCount.current = messages.length; return }
    const newMsgs = messages.slice(prevCount.current)
    prevCount.current = messages.length
    newMsgs.forEach(m => {
      if (!m.isNew || m.senderUid === uid) return
      ping()
      if (prefs.notifs && notifGranted.current) {
        try {
          const body = m.imageUrl ? '📷 Image' : (m.text || '')
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(reg => reg.showNotification(peerName || 'Thread', { body, tag: 'thread-msg', renotify: true, vibrate: [200, 100, 200] }))
          } else {
            new Notification(peerName || 'Thread', { body, tag: 'thread-msg' })
          }
        } catch (e) {}
      }
    })
  }, [messages, uid, peerName, prefs.notifs, ping])

  // Auto scroll
  useEffect(() => {
    const w = wrapRef.current
    if (!w) return
    if (w.scrollHeight - w.scrollTop - w.clientHeight < 120)
      setTimeout(() => { w.scrollTop = w.scrollHeight }, 30)
  }, [messages, peerTyping])

  // Mark seen
  useEffect(() => {
    if (!prefs.readReceipts) return
    messages.filter(m => m.senderUid !== uid && !m.seen)
      .forEach(m => update(ref(db, `chats/${chatId}/msgs/${m.id}`), { seen: true }))
  }, [messages, uid, prefs.readReceipts, chatId])

  useEffect(() => { notifGranted.current = Notification.permission === 'granted' }, [prefs.notifs])

  async function sendMsg(text) {
    stopTyping()
    const now = new Date()
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const payload = { senderUid: uid, senderName: session.myName, senderUsername: session.username, text, time, ts: Date.now(), seen: false }
    if (replyTo) payload.replyTo = { fbKey: replyTo.id, text: replyTo.text || '', senderName: replyTo.senderName }
    setReplyTo(null)
    await push(ref(db, `chats/${chatId}/msgs`), payload)
    // Update last message in both users' chat lists
    await update(ref(db, `users/${session.username}/chats/${chatId}`), { lastMsg: text, lastTime: time, lastTs: Date.now() })
    if (peerUsername) await update(ref(db, `users/${peerUsername}/chats/${chatId}`), { lastMsg: text, lastTime: time, lastTs: Date.now() })
  }

  async function uploadImage(file) {
    if (!file || file.size > 10 * 1024 * 1024) return
    const sRef = storageRef(storage, `chats/${chatId}/${Date.now()}_${file.name}`)
    const task = uploadBytesResumable(sRef, file)
    task.on('state_changed',
      s => setUploadPct(Math.round(s.bytesTransferred / s.totalBytes * 100)),
      () => setUploadPct(0),
      async () => {
        setUploadPct(0)
        const url = await getDownloadURL(task.snapshot.ref)
        const now = new Date()
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        await push(ref(db, `chats/${chatId}/msgs`), { senderUid: uid, senderName: session.myName, imageUrl: url, text: '', time, ts: Date.now(), seen: false })
        await update(ref(db, `users/${session.username}/chats/${chatId}`), { lastMsg: '📷 Image', lastTime: time, lastTs: Date.now() })
        if (peerUsername) await update(ref(db, `users/${peerUsername}/chats/${chatId}`), { lastMsg: '📷 Image', lastTime: time, lastTs: Date.now() })
      }
    )
  }

  async function addReaction(msgId, emoji) {
    const path = `chats/${chatId}/msgs/${msgId}/reactions/${uid}`
    const snap = await get(ref(db, path))
    await set(ref(db, path), snap.val() === emoji ? null : emoji)
    setPicker(null)
  }

  async function deleteMsg(msgId) {
    await update(ref(db, `chats/${chatId}/msgs/${msgId}`), { deleted: true, text: 'message deleted' })
  }

  async function clearAll() { await remove(ref(db, `chats/${chatId}/msgs`)) }

  let lastSender = null
  const grouped = messages.map(m => {
    const same = m.senderUid === lastSender
    lastSender = m.senderUid
    return { ...m, same }
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', background: 'var(--bg)' }}>
      <TopBar
        peerName={peerName}
        peerUsername={peerUsername}
        peerOnline={peerOnline}
        onSidebarOpen={onSidebarOpen}
        onInvite={() => setShowInvite(true)}
        onMenu={() => setShowMenu(true)}
        showSidebarBtn={showSidebarBtn}
      />

      <div ref={wrapRef} style={{ flex: 1, overflowY: 'auto', padding: '24px 20px 16px', display: 'flex', flexDirection: 'column', gap: 3, position: 'relative' }}>
        <div style={{ position: 'fixed', inset: '60px 0 72px', background: 'repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(255,255,255,0.008) 28px,rgba(255,255,255,0.008) 29px)', pointerEvents: 'none', zIndex: 0 }} />

        {messages.length === 0 && (
          <div style={{ alignSelf: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)', letterSpacing: 1.5, textTransform: 'uppercase', padding: '5px 16px', border: '1px solid var(--b1)', borderRadius: 100, margin: '10px 0', background: 'rgba(14,14,14,0.8)' }}>
            🔒 encrypted · say hello
          </div>
        )}

        {grouped.map(m => (
          <div key={m.id} id={'row_' + m.id} style={{ marginTop: m.same ? 1 : 14 }}>
            <ChatBubble
              msg={m} isYou={m.senderUid === uid}
              showAvatar={!m.same} showName={!m.same}
              onReply={setReplyTo}
              onReact={(msgId, el) => {
                const rect = el?.getBoundingClientRect()
                setPicker({ msgId, position: rect ? { bottom: window.innerHeight - rect.top + 8, left: rect.left - 40 } : { bottom: 120, left: 40 } })
              }}
              onDelete={deleteMsg}
              onImageClick={setLightbox}
            />
          </div>
        ))}

        {peerTyping && (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginTop: 4, zIndex: 1 }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--s3)', border: '1px solid var(--b1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
              {peerName?.[0]?.toUpperCase() || '?'}
            </div>
            <div style={{ background: 'var(--s2)', border: '1px solid var(--b1)', borderRadius: 16, borderBottomLeftRadius: 4, padding: '13px 18px', display: 'flex', gap: 5, alignItems: 'center' }}>
              {[0, 200, 400].map(d => <div key={d} style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--b2)', animation: `tdot 1.3s ease ${d}ms infinite` }} />)}
            </div>
          </div>
        )}
      </div>

      {uploadPct > 0 && (
        <div style={{ height: 2, background: 'var(--b1)', flexShrink: 0 }}>
          <div style={{ height: '100%', background: 'var(--accent)', width: uploadPct + '%', transition: 'width 0.3s', borderRadius: 2 }} />
        </div>
      )}

      <MessageInput onSend={sendMsg} onTyping={notifyTyping} replyTo={replyTo} onCancelReply={() => setReplyTo(null)} onImageUpload={uploadImage} enterSend={prefs.enterSend} />

      {picker && <EmojiPicker position={picker.position} onPick={emoji => addReaction(picker.msgId, emoji)} onClose={() => setPicker(null)} />}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}>
          <img src={lightbox} style={{ maxWidth: '92vw', maxHeight: '92vh', borderRadius: 12 }} alt="" onClick={e => e.stopPropagation()} />
        </div>
      )}
      {showSettings && <Settings prefs={prefs} setPref={setPref} onClose={() => setShowSettings(false)} />}
      {showMenu && <Menu onInvite={() => { setShowInvite(true); setShowMenu(false) }} onSettings={() => { setShowSettings(true); setShowMenu(false) }} onClear={() => { clearAll(); setShowMenu(false) }} onClose={() => setShowMenu(false)} />}
      {showInvite && <Invite token={inviteToken} onBack={() => setShowInvite(false)} />}
    </div>
  )
}
