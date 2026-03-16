import React, { useEffect, useRef } from 'react'

export default function Menu({ onInvite, onSettings, onClear, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    function handler(e) { if (!ref.current?.contains(e.target)) onClose() }
    setTimeout(() => document.addEventListener('click', handler), 0)
    return () => document.removeEventListener('click', handler)
  }, [onClose])

  const items = [
    { icon: '🔗', label: 'Invite via link', action: onInvite },
    { icon: '⚙', label: 'Settings', action: onSettings },
    { icon: '⊘', label: 'Clear messages', action: onClear },
  ]

  return (
    <div ref={ref} style={{ position: 'fixed', top: 56, right: 12, background: 'var(--s2)', border: '1px solid var(--b1)', borderRadius: 14, minWidth: 195, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.7)', zIndex: 200, animation: 'popIn 0.18s cubic-bezier(0.34,1.56,0.64,1)' }}>
      {items.map((item, i) => (
        <div key={i} onClick={() => { item.action(); onClose() }}
          style={{ padding: '12px 16px', fontSize: 12, fontWeight: 500, color: 'var(--dim)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, borderBottom: i < items.length - 1 ? '1px solid var(--b1)' : 'none' }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--s3)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <span style={{ fontSize: 14, width: 18, textAlign: 'center' }}>{item.icon}</span>
          {item.label}
        </div>
      ))}
    </div>
  )
}
