import React, { useState, useEffect } from 'react'
import { ref, get, update } from 'firebase/database'
import { db } from '../firebase'

async function hashStr(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

const THEMES = [
  { key: 'default', color: '#f0f0f0' },
  { key: 'blue',    color: '#4a9eff' },
  { key: 'green',   color: '#4ade80' },
  { key: 'amber',   color: '#fbbf24' },
  { key: 'pink',    color: '#f472b6' },
]

function Toggle({ checked, onChange }) {
  return (
    <label style={{ position: 'relative', width: 40, height: 22, flexShrink: 0, cursor: 'pointer' }}>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} style={{ opacity: 0, width: 0, height: 0, position: 'absolute' }} />
      <div style={{ position: 'absolute', inset: 0, borderRadius: 100, background: checked ? 'var(--accent)' : 'var(--s4)', transition: 'background 0.2s' }}>
        <div style={{ position: 'absolute', width: 16, height: 16, background: '#fff', borderRadius: '50%', top: 3, left: 3, transition: 'transform 0.2s', transform: checked ? 'translateX(18px)' : 'translateX(0)' }} />
      </div>
    </label>
  )
}

function Row({ label, sub, right, last }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: last ? 'none' : '1px solid var(--b1)' }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 500 }}>{label}</div>
        {sub && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dim)', letterSpacing: 0.5, marginTop: 2 }}>{sub}</div>}
      </div>
      {right}
    </div>
  )
}

// Email management section
function EmailSection({ username }) {
  const [currentEmail, setCurrentEmail] = useState('')
  const [newEmail, setNewEmail]         = useState('')
  const [editing, setEditing]           = useState(false)
  const [msg, setMsg]                   = useState('')
  const [loading, setLoading]           = useState(false)

  useEffect(() => {
    if (!username) return
    get(ref(db, 'users/' + username + '/email')).then(snap => {
      if (snap.exists()) setCurrentEmail(snap.val())
    })
  }, [username])

  async function saveEmail() {
    if (newEmail && !/\S+@\S+\.\S+/.test(newEmail)) { setMsg('↳ invalid email'); return }
    setLoading(true)
    try {
      await update(ref(db, 'users/' + username), { email: newEmail.trim().toLowerCase() || null })
      setCurrentEmail(newEmail.trim().toLowerCase())
      setEditing(false)
      setMsg('↳ email updated ✓')
      setTimeout(() => setMsg(''), 2500)
    } catch (e) { setMsg('↳ ' + e.message) }
    finally { setLoading(false) }
  }

  return (
    <div style={{ paddingTop: 14, borderTop: '1px solid var(--b1)' }}>
      <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 6 }}>Recovery Email</div>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dim)', marginBottom: 10 }}>
        {currentEmail ? currentEmail : 'no email set — add one to enable password recovery'}
      </div>
      {!editing ? (
        <button onClick={() => { setEditing(true); setNewEmail(currentEmail) }}
          style={{ padding: '7px 14px', background: 'transparent', border: '1px solid var(--b1)', borderRadius: 8, color: 'var(--dim)', fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: 1, textTransform: 'uppercase', cursor: 'pointer' }}>
          {currentEmail ? 'change email' : 'add email'}
        </button>
      ) : (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input value={newEmail} onChange={e => setNewEmail(e.target.value)} type="email" placeholder="your@email.com"
            style={{ flex: 1, background: 'var(--s2)', border: '1px solid var(--b1)', borderRadius: 8, padding: '8px 12px', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 13, color: 'var(--text)', outline: 'none', userSelect: 'text', WebkitUserSelect: 'text' }} />
          <button onClick={saveEmail} disabled={loading}
            style={{ padding: '8px 14px', background: 'var(--accent)', color: 'var(--bg)', border: 'none', borderRadius: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>
            {loading ? '...' : 'save'}
          </button>
          <button onClick={() => setEditing(false)}
            style={{ padding: '8px 10px', background: 'transparent', border: '1px solid var(--b1)', borderRadius: 8, color: 'var(--dim)', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, cursor: 'pointer', flexShrink: 0 }}>
            ×
          </button>
        </div>
      )}
      {msg && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: msg.includes('✓') ? '#4a4' : '#886655', marginTop: 8, letterSpacing: 0.5 }}>{msg}</div>}
    </div>
  )
}

export default function Settings({ prefs, setPref, onClose, username }) {
  async function handleNotifs(on) {
    if (!on) { setPref('notifs', false); return }
    if (!('Notification' in window)) { alert('Notifications not supported.'); return }
    let perm = Notification.permission
    if (perm === 'default') perm = await Notification.requestPermission()
    if (perm === 'granted') {
      setPref('notifs', true)
      const reg = await navigator.serviceWorker.ready
      reg.showNotification('Thread', { body: 'Notifications enabled ✓', tag: 'thread-test', silent: true })
    } else {
      setPref('notifs', false)
      alert('Notifications blocked. Enable in site settings.')
    }
  }

  const notifSub = () => {
    if (!('Notification' in window)) return 'not supported'
    if (Notification.permission === 'granted' && prefs.notifs) return 'enabled ✓'
    if (Notification.permission === 'denied') return 'blocked — check site settings'
    return 'get notified when tab is hidden'
  }

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0 }} />
      <div style={{ width: 420, maxWidth: '92vw', maxHeight: '90vh', overflowY: 'auto', background: 'var(--s1)', border: '1px solid var(--b1)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.7)', position: 'relative', animation: 'cardIn 0.3s ease' }}>
        <div style={{ padding: '22px 24px 18px', borderBottom: '1px solid var(--b1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'var(--s1)', zIndex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 700 }}>Settings</div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--dim)', fontSize: 20, cursor: 'pointer' }}>×</button>
        </div>
        <div style={{ padding: '20px 24px' }}>
          <Row label="Accent colour" sub="bubbles & highlights" right={
            <div style={{ display: 'flex', gap: 8 }}>
              {THEMES.map(t => (
                <div key={t.key} onClick={() => setPref('theme', t.key)}
                  style={{ width: 24, height: 24, borderRadius: '50%', background: t.color, cursor: 'pointer', border: `2px solid ${prefs.theme === t.key ? 'var(--text)' : 'transparent'}`, transition: 'all 0.15s' }} />
              ))}
            </div>
          } />
          <Row label="Enter to send" sub="off = shift+enter sends"
            right={<Toggle checked={prefs.enterSend} onChange={v => setPref('enterSend', v)} />} />
          <Row label="Message sound" sub="soft pop on incoming message"
            right={<Toggle checked={prefs.msgSound} onChange={v => setPref('msgSound', v)} />} />
          <Row label="Push notifications" sub={notifSub()}
            right={<Toggle checked={prefs.notifs && Notification.permission === 'granted'} onChange={handleNotifs} />} />
          <Row label="Read receipts" sub="show when you've read messages" last
            right={<Toggle checked={prefs.readReceipts} onChange={v => setPref('readReceipts', v)} />} />
          <EmailSection username={username} />
        </div>
      </div>
    </div>
  )
}
