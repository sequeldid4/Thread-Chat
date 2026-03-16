import React, { useState } from 'react'

export default function Invite({ token, onBack }) {
  const [copied, setCopied] = useState(false)
  const url = `${location.origin}${location.pathname}?i=${token}`

  function copy() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <div onClick={onBack} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />
      <div style={{ width: 400, maxWidth: '92vw', background: 'var(--s1)', border: '1px solid var(--b1)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.7)', position: 'relative', animation: 'cardIn 0.3s ease' }}>
        <div style={{ padding: '28px 28px 22px', borderBottom: '1px solid var(--b1)' }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 10 }}>one-time link</div>
          <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -1, marginBottom: 8 }}>Invite via link</div>
          <div style={{ fontSize: 12, color: 'var(--dim)', lineHeight: 1.75 }}>Share privately. First person to open it joins — then the link burns.</div>
        </div>
        <div style={{ padding: '20px 28px' }}>
          <div style={{ background: 'var(--s3)', border: '1px solid var(--b1)', borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ flex: 1, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dim)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{url}</div>
            <button onClick={copy} style={{ border: `1px solid ${copied ? 'var(--b1)' : 'var(--b2)'}`, background: 'none', color: copied ? 'var(--dimmer)' : 'var(--text)', fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase', padding: '6px 12px', borderRadius: 7, cursor: 'pointer', flexShrink: 0 }}>
              {copied ? 'copied ✓' : 'copy'}
            </button>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dimmer)', letterSpacing: 1, lineHeight: 1.9, textTransform: 'uppercase' }}>🔒 single use · expires on join</div>
        </div>
        <div style={{ padding: '16px 28px', borderTop: '1px solid var(--b1)' }}>
          <button onClick={onBack} style={{ width: '100%', padding: 13, background: 'none', border: '1px solid var(--b1)', borderRadius: 10, color: 'var(--dim)', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>← back</button>
        </div>
      </div>
    </div>
  )
}
