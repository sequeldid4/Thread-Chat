import React, { useEffect, useRef } from 'react'

const EMOJIS = ['👍','❤️','😂','😮','😢','🔥','👀','🙏']

export default function EmojiPicker({ position, onPick, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    function handler(e) { if (!ref.current?.contains(e.target)) onClose() }
    setTimeout(() => document.addEventListener('click', handler), 0)
    return () => document.removeEventListener('click', handler)
  }, [onClose])

  return (
    <div ref={ref} style={{
      position: 'fixed',
      bottom: position?.bottom || 100,
      left: Math.max(8, position?.left || 40),
      background: 'var(--s2)', border: '1px solid var(--b1)',
      borderRadius: 14, padding: '10px 12px',
      display: 'flex', gap: 8, zIndex: 300,
      boxShadow: '0 8px 32px rgba(0,0,0,0.7)',
      animation: 'bPop 0.15s ease',
    }}>
      {EMOJIS.map(e => (
        <span key={e} onClick={() => onPick(e)}
          style={{ fontSize: 22, cursor: 'pointer', lineHeight: 1 }}>
          {e}
        </span>
      ))}
    </div>
  )
}
