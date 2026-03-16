import { useState, useEffect } from 'react'
import { ref as dbRef, onValue, off } from 'firebase/database'
import { db } from '../firebase'

// Cache pfp URLs in memory so we don't re-fetch on every render
const pfpCache = {}

export function usePfp(username) {
  const [url, setUrl] = useState(pfpCache[username] || null)

  useEffect(() => {
    if (!username) return
    const r = dbRef(db, `users/${username}/pfp`)
    const unsub = onValue(r, snap => {
      const val = snap.val() || null
      pfpCache[username] = val
      setUrl(val)
    })
    return () => off(r, 'value', unsub)
  }, [username])

  return url
}
