import { useState, useEffect } from 'react'
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

export function useAuth() {
  const [uid, setUid] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async user => {
      if (!user) {
        try { await signInAnonymously(auth) } catch (e) { console.error(e) }
        return
      }
      // Persist uid so bubble alignment never breaks across reloads
      let storedUid = localStorage.getItem('_thread_uid')
      if (!storedUid) {
        localStorage.setItem('_thread_uid', user.uid)
        storedUid = user.uid
      }
      setUid(storedUid)
      setReady(true)
    })
    return unsub
  }, [])

  return { uid, ready }
}
