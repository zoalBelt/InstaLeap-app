import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'

/**
 * Punto de entrada principal de la aplicación.
 * 
 * - Renderiza el componente raíz (`App`).
 * - Utiliza `StrictMode` para detectar problemas potenciales en la aplicación.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
