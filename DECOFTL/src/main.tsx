import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Contact from './pages/Contact';





createRoot(document.getElementById('root')!).render(
   <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
