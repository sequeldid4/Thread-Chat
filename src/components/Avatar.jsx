import React, { useRef, useState } from 'react'
import { ref as dbRef, update } from 'firebase/database'
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase'
import { usePfp } from '../hooks/usePfp'

export function Avatar({ username, name, size = 42, showRing = false }) {
  const pfp = usePfp(username)
  const r = Math.round(size * 0.28)
  return (
    <div style={{ position: 'relative', flexShrink: 0, width: size, height: size }}>
      {pfp && showRing && (
        <div style={{ position: 'absolute', inset: -2, borderRadius: r + 2, background: 'conic-gradient(var(--accent), transparent, var(--accent))', animation: 'ringRotate 2s linear infinite', zIndex: 0 }} />
      )}
      <div style={{ position: 'relative', zIndex: 1, width: size, height: size, borderRadius: r, overflow: 'hidden', background: 'var(--s3)', border: pfp ? 'none' : '1px solid var(--b1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.38, fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)' }}>
        {pfp ? <img src={pfp} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : (name?.[0]?.toUpperCase() || '?')}
      </div>
    </div>
  )
}

export function UploadableAvatar({ username, name, size = 42 }) {
  const pfp = usePfp(username)
  const inputRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [uploading, setUploading] = useState(false)
  const r = Math.round(size * 0.28)

  async function handleFile(e) {
    const file = e.target.files[0]
    if (!file || file.size > 5 * 1024 * 1024) { alert('Max 5MB'); return }
    setUploading(true)
    const sRef = storageRef(storage, `pfps/${username}`)
    const task = uploadBytesResumable(sRef, file)
    task.on('state_changed',
      s => setProgress(Math.round(s.bytesTransferred / s.totalBytes * 100)),
      () => setUploading(false),
      async () => {
        const url = await getDownloadURL(task.snapshot.ref)
        await update(dbRef(db, `users/${username}`), { pfp: url })
        setUploading(false); setProgress(0)
      }
    )
    inputRef.current.value = ''
  }

  return (
    <div style={{ position: 'relative', flexShrink: 0, cursor: 'pointer' }} onClick={() => !uploading && inputRef.current.click()}>
      <input ref={inputRef} type="file" accept="image/*,.gif" style={{ display: 'none' }} onChange={handleFile} />
      <div style={{ width: size, height: size, borderRadius: r, overflow: 'hidden', background: 'var(--s3)', border: '1px solid var(--b1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.38, fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', position: 'relative' }}>
        {pfp ? <img src={pfp} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : (name?.[0]?.toUpperCase() || '?')}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s', flexDirection: 'column', gap: 2 }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => { if (!uploading) e.currentTarget.style.opacity = '0' }}>
          {uploading
            ? <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#fff' }}>{progress}%</span>
            : <span style={{ fontSize: 18 }}>📷</span>
          }
        </div>
      </div>
    </div>
  )
}
