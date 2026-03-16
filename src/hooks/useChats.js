import { useState, useEffect } from 'react'
import { ref, onValue, off } from 'firebase/database'
import { db } from '../firebase'

export function useChats(username) {
  const [chats, setChats] = useState([])

  useEffect(() => {
    if (!username) return
    const chatsRef = ref(db, `users/${username}/chats`)
    const unsub = onValue(chatsRef, snap => {
      if (!snap.exists()) { setChats([]); return }
      const list = []
      snap.forEach(child => {
        list.push({ chatId: child.key, ...child.val() })
      })
      // Sort by lastTs descending
      list.sort((a, b) => (b.lastTs || 0) - (a.lastTs || 0))
      setChats(list)
    })
    return () => off(chatsRef, 'value', unsub)
  }, [username])

  return chats
}
