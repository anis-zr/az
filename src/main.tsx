import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// NOTE: React.StrictMode is intentionally disabled.
// GSAP animations (gsap.set + ctx.revert) are incompatible with StrictMode's
// double-invocation of effects in React 18 dev mode. This causes gsap.set(opacity:0)
// to persist, leaving the entire page invisible. This is a documented GSAP + React 18
// known issue. Production builds are NOT affected by StrictMode behavior.
// See: https://gsap.com/resources/React/
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
