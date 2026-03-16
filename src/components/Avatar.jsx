import React, { useRef, useState } from 'react'
import { ref as dbRef, update } from 'firebase/database'
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase'
import { usePfp } from '../hooks/usePfp'

// Base avatar used everywhere — shows pfp if available, falls back to initial
export function Avatar({ username, name, size = 42, showRing = false, onClick }) {
  const pfp = usePfp(username)
  const radius = size * 0.28

  return (
    <div onClick={onClick} style={{
      position: 'relative', flexShrink: 0,
      width: size, height: size,
      cursor: onClick ? 'pointer' : 'default',
    }}>
      {/* Animated ring for GIF pfps */}
      {pfp && showRing && (
        <div style={{
          position: 'absolute', inset: -2,
          borderRadius: radius + 2,
          background: 'linear-gradient(135deg, var(--accent), transparent, var(--accent))',
          backgroundSize: '200% 200%',
          animation: 'ringRotate 2s linear infinite',
          zIndex: 0,
        }} />
      )}
      <div style={{
        position: 'relative', zIndex: 1,
        width: size, height: size,
        borderRadius: radius,
        overflow: 'hidden',
        background: 'var(--s3)',
        border: pfp ? 'none' : '1px solid var(--b1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.38, fontWeight: 700, textTransform: 'uppercase',
        color: 'var(--accent)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => { if (onClick) { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 12px var(--accent-dim)' }}}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
      >
        {pfp
          ? <img src={pfp} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : (name?.[0]?.toUpperCase() || '?')
        }
      </div>
    </div>
  )
}

// Clickable avatar that opens file picker for uploading pfp
export function UploadableAvatar({ username, name, size = 42 }) {
  const pfp = usePfp(username)
  const inputRef = useRef(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  async function handleFile(e) {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) { alert('Max 5MB'); return }
    setUploading(true)
    try {
      const sRef = storageRef(storage, `pfps/${username}`)
      const task = uploadBytesResumable(sRef, file)
      task.on('state_changed',
        s => setProgress(Math.round(s.bytesTransferred / s.totalBytes * 100)),
        err => { alert('Upload failed'); setUploading(false) },
        async () => {
          const url = await getDownloadURL(task.snapshot.ref)
          await update(dbRef(db, `users/${username}`), { pfp: url })
          setUploading(false)
          setProgress(0)
        }
      )
    } catch (e) { setUploading(false) }
    inputRef.current.value = ''
  }

  const radius = size * 0.28

  return (
    <div style={{ position: 'relative', flexShrink: 0, cursor: 'pointer' }} onClick={() => !uploading && inputRef.current.click()}>
      <input ref={inputRef} type="file" accept="image/*,.gif" style={{ display: 'none' }} onChange={handleFile} />

      <div style={{
        width: size, height: size, borderRadius: radius,
        overflow: 'hidden', background: 'var(--s3)',
        border: '1px solid var(--b1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.38, fontWeight: 700, textTransform: 'uppercase',
        color: 'var(--accent)', position: 'relative',
        transition: 'transform 0.2s',
      }}>
        {pfp
          ? <img src={pfp} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : (name?.[0]?.toUpperCase() || '?')
        }

        {/* Upload overlay on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.55)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: uploading ? 1 : 0,
          transition: 'opacity 0.2s',
          borderRadius: radius,
          flexDirection: 'column', gap: 2,
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => { if (!uploading) e.currentTarget.style.opacity = '0' }}>
          {uploading
            ? <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#fff' }}>{progress}%</div>
            : <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 8, color: '#fff', letterSpacing: 0.5 }}>upload</div>
              </>
          }
        </div>
      </div>

      {/* Progress ring */}
      {uploading && (
        <svg style={{ position: 'absolute', inset: -3, width: size + 6, height: size + 6 }} viewBox={`0 0 ${size + 6} ${size + 6}`}>
          <circle cx={(size + 6) / 2} cy={(size + 6) / 2} r={size / 2} fill="none" stroke="var(--accent)" strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * (size / 2)}`}
            strokeDashoffset={`${2 * Math.PI * (size / 2) * (1 - progress / 100)}`}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.3s', transformOrigin: 'center', transform: 'rotate(-90deg)' }}
          />
        </svg>
      )}
    </div>
  )
}
