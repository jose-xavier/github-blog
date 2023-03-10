import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}
