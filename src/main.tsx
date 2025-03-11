import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material'
import { customTheme } from './theme/theme.ts'
import { GlobalStyles } from '@mui/system'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <GlobalStyles
      styles={{
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: customTheme.palette.common.black,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
      }}/>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
