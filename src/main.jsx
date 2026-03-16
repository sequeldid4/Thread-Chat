import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function setVH() {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px')
}
setVH()
window.addEventListener('resize', setVH)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/ThreadChat/sw.js')
      .catch(() => {})
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
