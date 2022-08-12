import styled from 'styled-components'
import { color, font, spacing } from '../../styles/stylesConfig'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    margin-inline: auto;
    margin-block: ${spacing.medium};
    border-radius: 16px;
    box-shadow: 0px 1px 6px ${color.lightShadow};
    font-family: ${font.light};
    overflow: hidden;

    @media (min-width: 800px) {
      margin: 0;
    }
`

export const ButtonText = styled.span`
  opacity: ${props => props.light ? 0.3 : 1}
`
