import React, { useRef } from 'react'

const EMOJIS = ['👍','❤️','😂','😮','😢','🔥','👀','🙏']

export default function ChatBubble({ msg, isYou, showAvatar, showName, onReply, onReact, onDelete, onImageClick }) {
  const pressTimer = useRef(null)

  const bubbleStyle = {
    padding: '11px 15px',
    borderRadius: 16,
    fontSize: 14,
    lineHeight: 1.6,
    wordBreak: 'break-word',
    cursor: msg.deleted ? 'default' : 'pointer',
    position: 'relative',
    userSelect: 'text',
    WebkitUserSelect: 'text',
    animation: 'bPop 0.2s cubic-bezier(0.34,1.56,0.64,1)',
    ...(isYou
      ? { background: 'var(--accent)', color: 'var(--bg)', borderBottomRightRadius: 4, fontWeight: 500 }
      : { background: 'var(--s2)', color: 'var(--text)', border: '1px solid var(--b1)', borderBottomLeftRadius: 4 }
    ),
    ...(msg.deleted ? { opacity: 0.35, fontStyle: 'italic', fontSize: 12 } : {}),
  }

  const reactionCounts = {}
  if (msg.reactions) {
    Object.entries(msg.reactions).forEach(([uid, e]) => {
      reactionCounts[e] = reactionCounts[e] || []
      reactionCounts[e].push(uid)
    })
  }

  function handleContextMenu(e) {
    e.preventDefault()
    if (!msg.deleted) onReact(msg.id, e.currentTarget)
  }
  function handleTouchStart() {
    pressTimer.current = setTimeout(() => onReact(msg.id, null), 500)
  }
  function handleTouchEnd() { clearTimeout(pressTimer.current) }
  function handleDoubleClick() {
    if (!msg.deleted) onReply(msg)
  }

  return (
    <div style={{ display: 'flex', justifyContent: isYou ? 'flex-end' : 'flex-start', zIndex: 1, position: 'relative' }}>
      {/* Avatar */}
      {!isYou && (
        <div style={{
          width: 30, height: 30, borderRadius: 9, background: 'var(--s3)',
          border: '1px solid var(--b1)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, marginRight: 8, alignSelf: 'flex-end', marginBottom: 1,
          visibility: showAvatar ? 'visible' : 'hidden',
        }}>
          {msg.senderName?.[0]?.toUpperCase() || '?'}
        </div>
      )}

      <div style={{ maxWidth: '68%', display: 'flex', flexDirection: 'column', alignItems: isYou ? 'flex-end' : 'flex-start' }}>
        {showName && !isYou && (
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 4 }}>
            {msg.senderName}
          </div>
        )}

        {/* Reply quote */}
        {msg.replyTo && !msg.deleted && (
          <div style={{
            background: isYou ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.06)',
            borderLeft: isYou ? '2px solid rgba(0,0,0,0.35)' : '2px solid var(--accent)',
            borderRadius: 6, padding: '5px 10px', marginBottom: 6,
            fontSize: 12, color: 'var(--dim)', cursor: 'pointer', maxWidth: '100%',
          }}>
            {msg.replyTo.senderName}: {msg.replyTo.text?.slice(0, 80)}
          </div>
        )}

        {/* Bubble */}
        <div
          style={bubbleStyle}
          onContextMenu={handleContextMenu}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onDoubleClick={handleDoubleClick}
        >
          {msg.deleted
            ? 'message deleted'
            : msg.imageUrl
              ? <img src={msg.imageUrl} loading="lazy" onClick={e => { e.stopPropagation(); onImageClick(msg.imageUrl) }}
                  style={{ maxWidth: 220, maxHeight: 220, borderRadius: 10, display: 'block', cursor: 'pointer' }} alt=""/>
              : msg.text
          }
        </div>

        {/* Reactions */}
        {Object.keys(reactionCounts).length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 5 }}>
            {Object.entries(reactionCounts).map(([emoji, uids]) => (
              <div key={emoji} onClick={() => onReact(msg.id, null, emoji)}
                style={{
                  background: 'var(--s3)', border: `1px solid ${uids.includes('me') ? 'var(--accent)' : 'var(--b1)'}`,
                  borderRadius: 100, padding: '3px 9px', fontSize: 13, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                {emoji}
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dim)' }}>{uids.length}</span>
              </div>
            ))}
          </div>
        )}

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3, padding: '0 2px' }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dimmer)', letterSpacing: 0.5 }}>{msg.time}</span>
          {isYou && <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dim)', letterSpacing: 0.5 }}>{msg.seen ? '· seen' : '· sent'}</span>}
          {isYou && !msg.deleted && (
            <span onClick={() => { if (confirm('Delete for both sides?')) onDelete(msg.id) }}
              style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dimmer)', cursor: 'pointer', letterSpacing: 0.5 }}>
              · del
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
