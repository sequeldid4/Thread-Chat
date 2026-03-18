import { useState, useEffect } from 'react'
import { ref, onValue, off } from 'firebase/database'
import { db } from '../firebase'

const cache = {}

export function usePfp(username) {
  const [url, setUrl] = useState(cache[username] || null)
  useEffect(() => {
    if (!username) return
    const r = ref(db, `users/${username}/pfp`)
    const unsub = onValue(r, snap => {
      const val = snap.val() || null
      cache[username] = val
      setUrl(val)
    })
    return () => off(r, 'value', unsub)
  }, [username])
  return url
}
