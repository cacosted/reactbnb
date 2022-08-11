import { createGlobalStyle } from 'styled-components'
import { color, font } from './stylesConfig'

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
    font-family: ${font.regular};
    color: ${color.dark}
  }

  img {
    max-width: 100%;
  }
`
