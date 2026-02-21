import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root'))

// Add smooth scrolling CSS
const style = document.createElement('style')
style.textContent = `
  html {
    scroll-behavior: smooth;
  }
`
document.head.appendChild(style)

root.render(<App />)
