import {createGlobalStyle} from'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme.blue};
}

body, input, textarea, button {
  font: 400 1rem Nunito, sans-serif;
  background: ${props => props.theme.background};
  color: ${({theme}) =>theme.text};
  line-height: 1.6;
}

`