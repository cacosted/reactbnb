import styled from 'styled-components'
import { spacing } from '../../styles/stylesConfig'

export const StyledApp = styled.main`
  padding: ${spacing.large};

  @media (min-width: 800px) {
    padding-inline: 5em;
  }
`
