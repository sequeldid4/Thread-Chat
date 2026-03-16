import { useState, useEffect, useRef } from 'react'
import { ref, onChildAdded, onChildChanged, off } from 'firebase/database'
import { db } from '../firebase'

export function useMessages(chatId) {
  const [messages, setMessages] = useState([])
  const historyDoneRef = useRef(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!chatId) return
    setMessages([])
    historyDoneRef.current = false

    const msgsRef = ref(db, `chats/${chatId}/msgs`)

    const addedUnsub = onChildAdded(msgsRef, snap => {
      const msg = { id: snap.key, ...snap.val(), isNew: historyDoneRef.current }
      setMessages(prev => {
        if (prev.find(m => m.id === snap.key)) return prev
        return [...prev, msg]
      })
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => { historyDoneRef.current = true }, 400)
    })

    const changedUnsub = onChildChanged(msgsRef, snap => {
      const updated = { id: snap.key, ...snap.val() }
      setMessages(prev => prev.map(m => m.id === snap.key ? { ...m, ...updated } : m))
    })

    return () => {
      off(msgsRef, 'child_added', addedUnsub)
      off(msgsRef, 'child_changed', changedUnsub)
      clearTimeout(timerRef.current)
    }
  }, [chatId])

  return messages
}
