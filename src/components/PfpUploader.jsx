import React, { useState, useRef } from 'react'
import { ref as dbRef, update, get } from 'firebase/database'
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase'

export default function PfpUploader({ username, currentPfp, onClose, onUpdated }) {
  const [preview, setPreview]   = useState(currentPfp || null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress]   = useState(0)
  const [err, setErr]             = useState('')
  const [canAnimate, setCanAnimate] = useState(false)
  const inputRef = useRef(null)

  // Check if user has animated pfp permission
  React.useEffect(() => {
    get(dbRef(db, `users/${username}/animatedPfp`)).then(snap => {
      setCanAnimate(snap.val() === true)
    })
  }, [username])

  function handleFile(e) {
    const file = e.target.files[0]
    if (!file) return

    // Check if animated GIF — only allowed if permission granted
    const isGif = file.type === 'image/gif'
    if (isGif && !canAnimate) {
      setErr('↳ animated GIF not permitted for your account')
      return
    }

    // Size limit — 5MB for static, 8MB for animated
    const limit = isGif ? 8 * 1024 * 1024 : 5 * 1024 * 1024
    if (file.size > limit) {
      setErr(`↳ max ${isGif ? '8MB' : '5MB'} for ${isGif ? 'GIFs' : 'images'}`)
      return
    }

    setErr('')
    const url = URL.createObjectURL(file)
    setPreview(url)

    upload(file)
  }

  async function upload(file) {
    setUploading(true)
    setProgress(0)
    try {
      const ext  = file.name.split('.').pop()
      const sRef = storageRef(storage, `pfp/${username}.${ext}`)
      const task = uploadBytesResumable(sRef, file)

      task.on('state_changed',
        s => setProgress(Math.round(s.bytesTransferred / s.totalBytes * 100)),
        e => { setErr('↳ upload failed: ' + e.message); setUploading(false) },
        async () => {
          const url = await getDownloadURL(task.snapshot.ref)
          await update(dbRef(db, `users/${username}`), { pfp: url })
          setUploading(false)
          setProgress(100)
          onUpdated(url)
          setTimeout(onClose, 800)
        }
      )
    } catch (e) {
      setErr('↳ ' + e.message)
      setUploading(false)
    }
  }

  async function removePfp() {
    await update(dbRef(db, `users/${username}`), { pfp: null })
    setPreview(null)
    onUpdated(null)
    onClose()
  }

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }} />
      <div style={{ width: 320, background: 'var(--s1)', border: '1px solid var(--b1)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.8)', position: 'relative', animation: 'cardIn 0.3s cubic-bezier(0.22,1,0.36,1)' }}>

        {/* Header */}
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--b1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Profile Picture</div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--dim)', fontSize: 20, cursor: 'pointer' }}>×</button>
        </div>

        {/* Preview */}
        <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 100, height: 100, borderRadius: 24,
            overflow: 'hidden', border: '1px solid var(--b1)',
            background: 'var(--s3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 40, fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)',
            position: 'relative',
          }}>
            {preview
              ? <img src={preview} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
              : username?.[0]?.toUpperCase()
            }
            {uploading && (
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 6 }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16, color: '#fff', fontWeight: 700 }}>{progress}%</div>
                <div style={{ width: 60, height: 2, background: 'var(--b1)', borderRadius: 2 }}>
                  <div style={{ height: '100%', width: progress + '%', background: 'var(--accent)', borderRadius: 2, transition: 'width 0.2s' }} />
                </div>
              </div>
            )}
          </div>

          {/* Permission badge */}
          {canAnimate && (
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--accent-dim)', padding: '4px 10px', borderRadius: 100, border: '1px solid var(--accent)', animation: 'pulse 2s infinite' }}>
              ✦ animated GIF enabled
            </div>
          )}

          {err && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#886655', letterSpacing: 0.5, animation: 'fadeIn 0.2s ease' }}>{err}</div>}
        </div>

        {/* Actions */}
        <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <input ref={inputRef} type="file" accept={canAnimate ? 'image/*' : 'image/png,image/jpeg,image/webp'} style={{ display: 'none' }} onChange={handleFile} />

          <button onClick={() => inputRef.current.click()} disabled={uploading}
            style={{ width: '100%', padding: 12, background: 'var(--accent)', color: 'var(--bg)', border: 'none', borderRadius: 10, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 13, fontWeight: 700, cursor: uploading ? 'not-allowed' : 'pointer', opacity: uploading ? 0.5 : 1, transition: 'transform 0.15s' }}
            onMouseEnter={e => { if (!uploading) e.currentTarget.style.transform = 'scale(1.02)' }}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            {uploading ? `Uploading ${progress}%...` : canAnimate ? 'Upload image or GIF' : 'Upload image'}
          </button>

          {preview && !uploading && (
            <button onClick={removePfp}
              style={{ width: '100%', padding: 12, background: 'transparent', color: 'var(--dim)', border: '1px solid var(--b1)', borderRadius: 10, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 12, cursor: 'pointer', transition: 'border-color 0.15s, color 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#e55'; e.currentTarget.style.color = '#e55' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--b1)'; e.currentTarget.style.color = 'var(--dim)' }}>
              Remove picture
            </button>
          )}

          {!canAnimate && (
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dimmer)', letterSpacing: 0.8, textAlign: 'center', lineHeight: 1.7 }}>
              animated GIFs require special permission
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
