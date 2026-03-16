import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

// ═══════════════════════════════════════
//  PASTE YOUR FIREBASE CONFIG HERE
// ═══════════════════════════════════════
const firebaseConfig = {
  apiKey:            "AIzaSyCQHyooMJKL7LRlkidDtDzefSz8rIjiQag",
  authDomain:        "thread-chat-37414.firebaseapp.com",
  databaseURL:       "https://thread-chat-37414-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "thread-chat-37414",
  storageBucket:     "thread-chat-37414.firebasestorage.app",
  messagingSenderId: "426777032314",
  appId:             "1:426777032314:web:904d69b316d3ccc5242dc3"
}

const app  = initializeApp(firebaseConfig)
export const auth    = getAuth(app)
export const db      = getDatabase(app)
export const storage = getStorage(app)
