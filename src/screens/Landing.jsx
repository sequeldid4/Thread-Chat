import React, { useState } from 'react'
import { ref, set, get, update } from 'firebase/database'
import { db } from '../firebase'

async function hashStr(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

const css = {
  wrap: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100dvh', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex' },
  gridBg: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--s1) 1px,transparent 1px),linear-gradient(90deg,var(--s1) 1px,transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)', pointerEvents: 'none', opacity: 0.5 },
  glow: { position: 'absolute', width: 700, height: 700, background: 'radial-gradient(circle,rgba(255,255,255,0.028) 0%,transparent 65%)', top: '50%', left: '50%', transform: 'translate(-50%,-58%)', pointerEvents: 'none' },
  inner: { position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 420, padding: '0 16px' },
  logo: { fontSize: 72, fontWeight: 800, letterSpacing: -6, lineHeight: 1, color: 'var(--text)', display: 'inline-block', animation: 'logoIn 0.7s cubic-bezier(0.22,1,0.36,1)' },
  dot: { display: 'inline-block', width: 9, height: 9, borderRadius: '50%', background: 'var(--accent)', verticalAlign: 'super', marginLeft: 4, transition: 'background 0.3s' },
  tag: { fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: 5, textTransform: 'uppercase', color: 'var(--dim)', marginTop: 10, marginBottom: 40, animation: 'fadeIn 1s ease 0.3s both' },
  card: { width: '100%', background: 'var(--s1)', border: '1px solid var(--b1)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 0 0 1px rgba(255,255,255,0.02),0 40px 80px rgba(0,0,0,0.7)', animation: 'cardIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both' },
  tabs: { display: 'flex', borderBottom: '1px solid var(--b1)' },
  tab: (on) => ({ flex: 1, padding: 14, fontFamily: "'JetBrains Mono',monospace", fontSize: 9, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', color: on ? 'var(--text)' : 'var(--dim)', cursor: 'pointer', textAlign: 'center', borderBottom: on ? '2px solid var(--accent)' : '2px solid transparent', transition: 'all 0.2s' }),
  body: { padding: 24 },
  label: { fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 7, display: 'block' },
  input: { width: '100%', background: 'var(--s2)', border: '1px solid var(--b1)', borderRadius: 10, padding: '12px 14px', fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 14, color: 'var(--text)', outline: 'none', marginBottom: 14, transition: 'border-color 0.2s', userSelect: 'text', WebkitUserSelect: 'text' },
  err: { fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#886655', letterSpacing: 0.5, minHeight: 18, marginBottom: 6 },
  btn: (disabled) => ({ width: '100%', padding: 13, background: disabled ? 'var(--b1)' : 'var(--accent)', color: disabled ? 'var(--dim)' : 'var(--bg)', border: 'none', borderRadius: 10, fontFamily: "'Bricolage Grotesque',sans-serif", fontSize: 13, fontWeight: 700, cursor: disabled ? 'not-allowed' : 'pointer', transition: 'all 0.2s', marginTop: 2, opacity: disabled ? 0.4 : 1 }),
  hint: { fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dimmer)', letterSpacing: 1, textAlign: 'center', marginTop: 12, lineHeight: 1.7 },
}

function Field({ label, type = 'text', placeholder, value, onChange }) {
  return (<><label style={css.label}>{label}</label><input style={css.input} type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} autoComplete="off" /></>)
}

function Register({ uid, onDone }) {
  const [name, setName] = useState('')
  const [uname, setUname] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit() {
    if (!name.trim()) return setErr('↳ name required')
    if (uname.trim().length < 3) return setErr('↳ username min 3 chars')
    if (!/^[a-z0-9_]+$/.test(uname.trim().toLowerCase())) return setErr('↳ letters, numbers, underscore only')
    if (pass.length < 6) return setErr('↳ password min 6 chars')
    setErr(''); setLoading(true)
    try {
      const u = uname.trim().toLowerCase()
      const snap = await get(ref(db, 'users/' + u))
      if (snap.exists()) return setErr('↳ username taken')
      const passHash = await hashStr(pass + u)
      await set(ref(db, 'users/' + u), { name: name.trim(), passHash, uid, createdAt: Date.now() })
      onDone({ myName: name.trim(), username: u })
    } catch (e) { setErr('↳ ' + e.message) }
    finally { setLoading(false) }
  }

  return (
    <>
      <Field label="Your name" placeholder="how should people call you" value={name} onChange={setName} />
      <Field label="Username" placeholder="unique · letters & numbers only" value={uname} onChange={setUname} />
      <Field label="Password" type="password" placeholder="min 6 characters" value={pass} onChange={setPass} />
      <div style={css.err}>{err}</div>
      <button style={css.btn(loading)} disabled={loading} onClick={submit}>{loading ? 'Creating...' : 'Create account →'}</button>
      <div style={css.hint}>your username is how others find and message you</div>
    </>
  )
}

function SignIn({ uid, onDone }) {
  const [uname, setUname] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit() {
    if (!uname.trim()) return setErr('↳ username required')
    if (!pass) return setErr('↳ password required')
    setErr(''); setLoading(true)
    try {
      const u = uname.trim().toLowerCase()
      const snap = await get(ref(db, 'users/' + u))
      if (!snap.exists()) return setErr('↳ username not found')
      const data = snap.val()
      const passHash = await hashStr(pass + u)
      if (passHash !== data.passHash) return setErr('↳ wrong password')
      await update(ref(db, 'users/' + u), { uid })
      onDone({ myName: data.name, username: u })
    } catch (e) { setErr('↳ ' + e.message) }
    finally { setLoading(false) }
  }

  return (
    <>
      <Field label="Username" placeholder="your username" value={uname} onChange={setUname} />
      <Field label="Password" type="password" placeholder="your password" value={pass} onChange={setPass} />
      <div style={css.err}>{err}</div>
      <button style={css.btn(loading)} disabled={loading} onClick={submit}>{loading ? 'Signing in...' : 'Sign in →'}</button>
    </>
  )
}

const TABS = ['register', 'signin']
const LABELS = { register: 'New account', signin: 'Sign in' }

export default function Landing({ uid, onSignIn }) {
  const [tab, setTab] = useState('register')

  function handleDone(session) {
    localStorage.setItem('_thread_session', JSON.stringify(session))
    onSignIn(session)
  }

  return (
    <div style={css.wrap}>
      <div style={css.glow} />
      <div style={css.gridBg} />
      <div style={css.inner}>
        <div style={css.logo}>thread<span style={css.dot} /></div>
        <div style={css.tag}>private · search · unlimited chats</div>
        <div style={css.card}>
          <div style={css.tabs}>
            {TABS.map(t => <div key={t} style={css.tab(tab === t)} onClick={() => setTab(t)}>{LABELS[t]}</div>)}
          </div>
          <div style={css.body}>
            {tab === 'register' && <Register uid={uid} onDone={handleDone} />}
            {tab === 'signin'   && <SignIn   uid={uid} onDone={handleDone} />}
          </div>
        </div>
      </div>
    </div>
  )
}
