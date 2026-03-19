import React, { useState, useEffect } from 'react'
import { ref, get } from 'firebase/database'
import { db } from '../firebase'
import { usePfp } from '../hooks/usePfp'

export default function ProfileModal({ username, onClose, onMessage, isMe }) {
  const pfp = usePfp(username)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (!username) return
    get(ref(db, 'users/' + username)).then(snap => {
      if (snap.exists()) setUserData(snap.val())
    })
  }, [username])

  if (!userData) return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 400, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }} onClick={onClose}>
      <div style={{ width: '100%', maxWidth: 480, background: 'var(--s1)', borderRadius: '20px 20px 0 0', padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dim)', letterSpacing: 2 }}>LOADING...</div>
      </div>
    </div>
  )

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 400, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', animation: 'fadeIn 0.2s ease' }}
      onClick={onClose}>
      {/* Backdrop */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }} />

      {/* Modal */}
      <div onClick={e => e.stopPropagation()} style={{
        position: 'relative', zIndex: 1,
        width: '100%', maxWidth: 480,
        background: 'var(--s1)',
        borderRadius: '20px 20px 0 0',
        overflow: 'hidden',
        animation: 'slideUp 0.3s cubic-bezier(0.22,1,0.36,1)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}>

        {/* Big pfp header */}
        <div style={{ position: 'relative', width: '100%', height: 280, background: 'var(--s3)', overflow: 'hidden' }}>
          {pfp
            ? <img src={pfp} alt={userData.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent)', opacity: 0.3 }}>
                {userData.name?.[0]}
              </div>
            )
          }
          {/* Gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)' }} />

          {/* Name + username over image */}
          <div style={{ position: 'absolute', bottom: 16, left: 20, right: 56 }}>
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5, color: '#fff', marginBottom: 4 }}>{userData.name}</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: 1 }}>@{username}</div>
          </div>

          {/* Close button */}
          <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 14, width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
            ×
          </button>
        </div>

        {/* Info rows */}
        <div style={{ padding: '16px 20px' }}>

          {/* Username row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--s2)', borderRadius: 12, marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 3 }}>@{username}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--dim)', letterSpacing: 1 }}>USERNAME</div>
            </div>
            {/* QR-style icon */}
            <div style={{ color: 'var(--dim)', fontSize: 20 }}>⊞</div>
          </div>

          {/* Action buttons */}
          {!isMe && onMessage && (
            <button onClick={() => { onMessage(username); onClose() }} style={{
              width: '100%', padding: '14px',
              background: 'var(--accent)', color: 'var(--bg)',
              border: 'none', borderRadius: 12,
              fontFamily: "'Bricolage Grotesque',sans-serif",
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
              transition: 'opacity 0.15s', marginTop: 4,
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
              Message
            </button>
          )}

          {isMe && (
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dimmer)', letterSpacing: 1.5, textTransform: 'uppercase', textAlign: 'center', marginTop: 8 }}>
              tap your avatar in sidebar to change pfp
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
