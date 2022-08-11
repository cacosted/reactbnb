import { createGlobalStyle } from 'styled-components'
import { font } from './stylesConfig'

export const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after
  {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${font.regular}
  }

  img {
    max-width: 100%;
  }
`
