import React, { useRef, useEffect } from 'react'

export default function MessageInput({ onSend, onTyping, replyTo, onCancelReply, onImageUpload, enterSend }) {
  const taRef = useRef(null)

  useEffect(() => {
    if (replyTo) taRef.current?.focus()
  }, [replyTo])

  function handleInput() {
    const ta = taRef.current
    ta.style.height = 'auto'
    ta.style.height = Math.min(ta.scrollHeight, 120) + 'px'
    onTyping()
  }

  function handleKey(e) {
    if (enterSend && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit() }
    if (!enterSend && e.key === 'Enter' && e.shiftKey) { e.preventDefault(); submit() }
  }

  function submit() {
    const txt = taRef.current.value.trim()
    if (!txt) return
    onSend(txt)
    taRef.current.value = ''
    taRef.current.style.height = 'auto'
  }

  const areaStyle = {
    padding: '10px 16px calc(18px + env(safe-area-inset-bottom))',
    borderTop: '1px solid var(--b1)',
    background: 'rgba(8,8,8,0.95)',
    backdropFilter: 'blur(24px)',
    flexShrink: 0,
    position: 'relative',
  }
  const innerStyle = {
    display: 'flex', alignItems: 'flex-end', gap: 8,
    background: 'var(--s2)', border: '1px solid var(--b1)',
    borderRadius: 16, padding: '8px 8px 8px 14px',
  }

  return (
    <div style={areaStyle}>
      {/* Reply bar */}
      {replyTo && (
        <div style={{ padding: '8px 0 8px', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{ width: 3, minHeight: 28, background: 'var(--accent)', borderRadius: 2, alignSelf: 'stretch' }} />
          <div style={{ flex: 1, fontSize: 12, color: 'var(--dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            ↩ {replyTo.senderName}: {replyTo.text?.slice(0, 60)}
          </div>
          <button onClick={onCancelReply} style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 20, padding: 0 }}>×</button>
        </div>
      )}
      <div style={innerStyle}>
        <button onClick={() => document.getElementById('imgInput').click()}
          style={{ background: 'none', border: 'none', color: 'var(--dim)', cursor: 'pointer', fontSize: 18, padding: 4, borderRadius: 8, flexShrink: 0 }}>
          ⊞
        </button>
        <input type="file" id="imgInput" accept="image/*" style={{ display: 'none' }} onChange={e => onImageUpload(e.target.files[0])} />
        <textarea
          ref={taRef} rows={1} placeholder="say something..."
          onInput={handleInput} onKeyDown={handleKey}
          style={{
            flex: 1, background: 'none', border: 'none', outline: 'none',
            fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, color: 'var(--text)',
            resize: 'none', minHeight: 26, maxHeight: 120, lineHeight: 1.55, padding: '3px 0',
            userSelect: 'text', WebkitUserSelect: 'text',
          }}
        />
        <button onClick={submit}
          style={{ width: 38, height: 38, borderRadius: 12, border: 'none', background: 'var(--accent)', color: 'var(--bg)', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          ↑
        </button>
      </div>
    </div>
  )
}
