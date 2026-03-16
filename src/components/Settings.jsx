import React from 'react'

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
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)}
        style={{ opacity: 0, width: 0, height: 0, position: 'absolute' }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 100,
        background: checked ? 'var(--accent)' : 'var(--s4)',
        transition: 'background 0.2s',
      }}>
        <div style={{
          position: 'absolute', width: 16, height: 16, background: '#fff',
          borderRadius: '50%', top: 3, left: 3, transition: 'transform 0.2s',
          transform: checked ? 'translateX(18px)' : 'translateX(0)',
        }} />
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

export default function Settings({ prefs, setPref, onClose }) {

  async function handleNotifs(on) {
    if (!on) { setPref('notifs', false); return }

    // Check if notifications are supported
    if (!('Notification' in window)) {
      alert('Notifications not supported in this browser.')
      return
    }

    // On Android Chrome, must call requestPermission directly from user gesture
    let perm = Notification.permission
    if (perm === 'default') {
      perm = await Notification.requestPermission()
    }

    if (perm === 'granted') {
      setPref('notifs', true)
      // Show a test notification so user knows it works
      new Notification('Thread', {
        body: 'Notifications enabled ✓',
        tag: 'thread-test',
        silent: true,
      })
    } else if (perm === 'denied') {
      setPref('notifs', false)
      alert('Notifications blocked. To enable:\nChrome → Site settings → Notifications → Allow')
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
      <div style={{ width: 420, maxWidth: '92vw', background: 'var(--s1)', border: '1px solid var(--b1)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.7)', position: 'relative', animation: 'cardIn 0.3s ease' }}>
        <div style={{ padding: '22px 24px 18px', borderBottom: '1px solid var(--b1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            right={<Toggle checked={prefs.enterSend} onChange={v => setPref('enterSend', v)} />}
          />
          <Row label="Message sound" sub="soft pop on incoming message"
            right={<Toggle checked={prefs.msgSound} onChange={v => setPref('msgSound', v)} />}
          />
          <Row label="Push notifications" sub={notifSub()}
            right={<Toggle checked={prefs.notifs && Notification.permission === 'granted'} onChange={handleNotifs} />}
          />
          <Row label="Read receipts" sub="show when you've read messages" last
            right={<Toggle checked={prefs.readReceipts} onChange={v => setPref('readReceipts', v)} />}
          />
        </div>
      </div>
    </div>
  )
}
