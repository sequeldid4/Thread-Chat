import { useRef, useEffect } from 'react'

export function useSound(enabled) {
  const ctxRef     = useRef(null)
  const unlockedRef = useRef(false)

  // Unlock AudioContext on first user gesture
  // Chrome + Android blocks audio until a tap/click happens first
  useEffect(() => {
    function unlock() {
      if (unlockedRef.current) return
      try {
        if (!ctxRef.current)
          ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
        if (ctxRef.current.state === 'suspended')
          ctxRef.current.resume()
        unlockedRef.current = true
      } catch (e) {}
    }
    document.addEventListener('touchstart', unlock, { once: true, passive: true })
    document.addEventListener('click',      unlock, { once: true })
    document.addEventListener('keydown',    unlock, { once: true })
    return () => {
      document.removeEventListener('touchstart', unlock)
      document.removeEventListener('click',      unlock)
      document.removeEventListener('keydown',    unlock)
    }
  }, [])

  function ping() {
    if (!enabled) return
    try {
      if (!ctxRef.current)
        ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
      const ctx = ctxRef.current
      if (ctx.state === 'suspended') {
        ctx.resume().then(() => _pop(ctx))
      } else {
        _pop(ctx)
      }
    } catch (e) {}
  }

  function _pop(ctx) {
    const t = ctx.currentTime
    // Low warm thud
    const o1 = ctx.createOscillator(), g1 = ctx.createGain()
    o1.connect(g1); g1.connect(ctx.destination)
    o1.type = 'sine'
    o1.frequency.setValueAtTime(300, t)
    o1.frequency.exponentialRampToValueAtTime(160, t + 0.09)
    g1.gain.setValueAtTime(0.2, t)
    g1.gain.exponentialRampToValueAtTime(0.001, t + 0.18)
    o1.start(t); o1.stop(t + 0.18)
    // Soft high tick
    const o2 = ctx.createOscillator(), g2 = ctx.createGain()
    o2.connect(g2); g2.connect(ctx.destination)
    o2.type = 'sine'
    o2.frequency.setValueAtTime(880, t)
    o2.frequency.exponentialRampToValueAtTime(580, t + 0.06)
    g2.gain.setValueAtTime(0.07, t)
    g2.gain.exponentialRampToValueAtTime(0.001, t + 0.1)
    o2.start(t); o2.stop(t + 0.1)
  }

  return ping
}
