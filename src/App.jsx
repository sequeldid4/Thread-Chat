import React, { useState, useEffect } from 'react'
import { useAuth } from './hooks/useAuth'
import { usePrefs } from './hooks/usePrefs'
import { useChats } from './hooks/useChats'
import { useRequests } from './hooks/useRequests'
import Landing from './screens/Landing'
import Chat from './screens/Chat'
import Sidebar from './components/Sidebar'

// Empty state when no chat is selected
function NoChatSelected({ onOpenSidebar, isMobile }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, background: 'var(--bg)' }}>
      {isMobile && (
        <button onClick={onOpenSidebar} style={{ background: 'var(--accent)', color: 'var(--bg)', border: 'none', borderRadius: 12, padding: '12px 24px', fontSize: 13, fontWeight: 700, cursor: 'pointer', marginBottom: 8 }}>
          Open chats
        </button>
      )}
      <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -3, color: 'var(--dimmer)' }}>thread</div>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dimmer)', letterSpacing: 3, textTransform: 'uppercase', textAlign: 'center', lineHeight: 2 }}>
        select a chat<br/>or search a username
      </div>
    </div>
  )
}

export default function App() {
  const { uid, ready } = useAuth()
  const { prefs, setPref } = usePrefs()

  const [session, setSession] = useState(() => {
    try { return JSON.parse(localStorage.getItem('_thread_session') || 'null') }
    catch { return null }
  })
  const [activeChat, setActiveChat] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const chats    = useChats(session?.username)
  const requests = useRequests(session?.username)

  // Responsive: detect screen size
  useEffect(() => {
    function check() { setIsMobile(window.innerWidth < 768) }
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Auto-select first chat if none selected on desktop
  useEffect(() => {
    if (!isMobile && !activeChat && chats.length > 0) {
      setActiveChat(chats[0])
    }
  }, [chats, isMobile, activeChat])

  function handleSignIn(s) {
    setSession(s)
    localStorage.setItem('_thread_session', JSON.stringify(s))
  }

  function handleSignOut() {
    localStorage.removeItem('_thread_session')
    setSession(null)
    setActiveChat(null)
  }

  function handleSelectChat(chat) {
    setActiveChat(chat)
    setSidebarOpen(false)
  }

  if (!ready) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -3, color: 'var(--text)' }}>thread</div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--dimmer)', letterSpacing: 3, textTransform: 'uppercase' }}>connecting...</div>
      </div>
    )
  }

  if (!session) {
    return <Landing uid={uid} onSignIn={handleSignIn} />
  }

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden' }}>

      {/* Sidebar — always visible on desktop, overlay on mobile */}
      {(!isMobile || sidebarOpen) && (
        <>
          {/* Mobile backdrop */}
          {isMobile && sidebarOpen && (
            <div onClick={() => setSidebarOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 40, backdropFilter: 'blur(2px)' }} />
          )}
          <Sidebar
            session={session}
            chats={chats}
            requests={requests}
            activeChatId={activeChat?.chatId}
            onSelectChat={handleSelectChat}
            onSignOut={handleSignOut}
            isMobile={isMobile}
            onClose={() => setSidebarOpen(false)}
          />
        </>
      )}

      {/* Main area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, height: '100%' }}>
        {activeChat
          ? <Chat
              key={activeChat.chatId}
              activeChat={activeChat}
              session={session}
              uid={uid}
              prefs={prefs}
              setPref={setPref}
              onSidebarOpen={() => setSidebarOpen(true)}
              showSidebarBtn={isMobile}
            />
          : <NoChatSelected onOpenSidebar={() => setSidebarOpen(true)} isMobile={isMobile} />
        }
      </div>
    </div>
  )
}
