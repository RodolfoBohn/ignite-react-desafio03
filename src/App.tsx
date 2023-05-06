import { ThemeProvider } from 'styled-components'
import {BrowserRouter} from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'
import { UserProvider } from './context/user'
export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <UserProvider>
          <GlobalStyle />
          <Router />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

