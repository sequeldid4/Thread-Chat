import { useState, useEffect } from 'react'
import { ref, onValue, set, onDisconnect, off } from 'firebase/database'
import { db } from '../firebase'

export function usePresence(chatId, myUid, myName) {
  const [peerOnline, setPeerOnline] = useState(false)

  useEffect(() => {
    if (!chatId || !myUid || !myName) return
    const myRef = ref(db, `chats/${chatId}/presence/${myUid}`)
    set(myRef, { online: true, name: myName })
    onDisconnect(myRef).update({ online: false })
    const presRef = ref(db, `chats/${chatId}/presence`)
    const unsub = onValue(presRef, snap => {
      if (!snap.exists()) return
      setPeerOnline(Object.entries(snap.val()).some(([uid, d]) => uid !== myUid && d.online === true))
    })
    return () => {
      off(presRef, 'value', unsub)
      set(myRef, { online: false, name: myName })
    }
  }, [chatId, myUid, myName])

  return peerOnline
}
