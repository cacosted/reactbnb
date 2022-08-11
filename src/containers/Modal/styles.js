import styled from 'styled-components'
import { color } from '../../styles/stylesConfig'

export const StyledModal = styled.aside`
  background-color: ${color.shadow};
  position: fixed;
  inset: 0;

  display: ${props => props.activeModal ? 'block' : 'none'};
`
