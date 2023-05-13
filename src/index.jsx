import process from 'socket:process'
import os from 'socket:os'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import { HashRouter } from 'react-router-dom'
import enableSocketReload from './utils/reload'

if (process.env.DEBUG) {
  console.log('started in debug mode')
}

enableSocketReload({
  startDir: process.cwd(),
  liveReload: true,
  scanInterval: 200,
  debounce: 1000,
  debounceCallback: () => {
    console.log(`updates inbound...`)
  },
  updateCallback: () => {
    window.location.reload()
  }
})

const root = createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
