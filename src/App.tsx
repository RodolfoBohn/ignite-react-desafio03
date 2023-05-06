import { ThemeProvider } from 'styled-components'
import {BrowserRouter} from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'
import { UserProvider } from './context/user'
import { PostProvider } from './context/post'
export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <UserProvider>
          <PostProvider>
            <GlobalStyle />
            <Router />
          </PostProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

