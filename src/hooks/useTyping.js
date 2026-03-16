import { useState, useEffect, useRef } from 'react'
import { ref, onValue, set, off } from 'firebase/database'
import { db } from '../firebase'

export function useTyping(chatId, myUid) {
  const [peerTyping, setPeerTyping] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!chatId || !myUid) return
    const typRef = ref(db, `chats/${chatId}/typing`)
    const unsub = onValue(typRef, snap => {
      if (!snap.exists()) { setPeerTyping(false); return }
      setPeerTyping(Object.entries(snap.val()).some(([uid, v]) => uid !== myUid && v === true))
    })
    return () => off(typRef, 'value', unsub)
  }, [chatId, myUid])

  function notifyTyping() {
    if (!chatId || !myUid) return
    set(ref(db, `chats/${chatId}/typing/${myUid}`), true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => set(ref(db, `chats/${chatId}/typing/${myUid}`), false), 2500)
  }

  function stopTyping() {
    clearTimeout(timerRef.current)
    if (chatId && myUid) set(ref(db, `chats/${chatId}/typing/${myUid}`), false)
  }

  return { peerTyping, notifyTyping, stopTyping }
}
