import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './index.css'
import { ThemeProvider } from './Context/ThemeContext.tsx';
import { ThemedApp } from './ThemedApp.tsx';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  </StrictMode>,
)




