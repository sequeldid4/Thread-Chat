import { useState, useEffect } from 'react'

const DEFAULTS = {
  enterSend: true,
  msgSound: true,
  notifs: false,
  readReceipts: true,
  theme: 'default',
}

export function usePrefs() {
  const [prefs, setPrefs] = useState(() => {
    try {
      return { ...DEFAULTS, ...JSON.parse(localStorage.getItem('_thread_prefs') || '{}') }
    } catch { return DEFAULTS }
  })

  useEffect(() => {
    localStorage.setItem('_thread_prefs', JSON.stringify(prefs))
    document.body.dataset.theme = prefs.theme === 'default' ? '' : prefs.theme
  }, [prefs])

  function setPref(key, value) {
    setPrefs(p => ({ ...p, [key]: value }))
  }

  return { prefs, setPref }
}
