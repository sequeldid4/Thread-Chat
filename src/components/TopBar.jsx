import React from 'react'
import { Avatar } from './Avatar'

function LinkIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  )
}
function DotsIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
    </svg>
  )
}
function MenuIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

const btn = {
  width: 34, height: 34, border: 'none', background: 'transparent',
  color: 'var(--dim)', cursor: 'pointer', borderRadius: 10,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  transition: 'all 0.15s',
}

export default function TopBar({ peerName, peerUsername, peerOnline, onSidebarOpen, onInvite, onMenu, showSidebarBtn }) {
  return (
    <div style={{
      height: 60, paddingTop: 'env(safe-area-inset-top)',
      display: 'flex', alignItems: 'center',
      paddingLeft: 16, paddingRight: 16, gap: 12,
      borderBottom: '1px solid var(--b1)',
      background: 'rgba(8,8,8,0.92)',
      backdropFilter: 'blur(24px)',
      flexShrink: 0, position: 'relative',
    }}>
      <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,var(--b2) 40%,var(--b2) 60%,transparent)' }} />

      {showSidebarBtn && (
        <button style={btn} onClick={onSidebarOpen}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--s2)'; e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--dim)' }}>
          <MenuIcon />
        </button>
      )}

      {/* Peer avatar with pfp */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <Avatar username={peerUsername} name={peerName} size={38} showRing={true} />
        <div style={{
          position: 'absolute', bottom: -2, right: -2,
          width: 11, height: 11, borderRadius: '50%',
          border: '2.5px solid var(--bg)',
          background: peerOnline ? '#4a4' : 'var(--s4)',
          transition: 'background 0.5s',
          ...(peerOnline ? { animation: 'breathe 2s ease-in-out infinite' } : {}),
        }} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: -0.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {peerName || '—'}
        </div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: peerOnline ? '#4a4' : 'var(--dim)', letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 2, transition: 'color 0.3s' }}>
          {peerOnline ? 'online' : 'last seen recently'}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 4 }}>
        <button style={btn} onClick={onInvite} title="Invite via link"
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--s2)'; e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--dim)' }}>
          <LinkIcon />
        </button>
        <button style={btn} onClick={onMenu} title="More"
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--s2)'; e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--dim)' }}>
          <DotsIcon />
        </button>
      </div>
    </div>
  )
}
