import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { BlogContextProvider } from './contexts/BlogContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <BlogContextProvider>
          <Router />
        </BlogContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}
