import { useState, useEffect } from 'react'
import { ref, onValue, off } from 'firebase/database'
import { db } from '../firebase'

export function useRequests(username) {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    if (!username) return
    const reqRef = ref(db, `requests/${username}`)
    const unsub = onValue(reqRef, snap => {
      if (!snap.exists()) { setRequests([]); return }
      const list = []
      snap.forEach(child => {
        if (child.val().status === 'pending') {
          list.push({ from: child.key, ...child.val() })
        }
      })
      setRequests(list)
    })
    return () => off(reqRef, 'value', unsub)
  }, [username])

  return requests
}
