import styled from 'styled-components'
import { color } from '../../styles/stylesConfig'

export const StyledModal = styled.aside`
  background-color: ${color.shadow};
  position: fixed;
  inset: 0;

  display: ${props => props.activeModal ? 'block' : 'none'};
`
export const ModalContent = styled.article`
  padding: 2em;
  background-color: ${color.light};
  min-height: 95%;
  position: relative;
`
export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ModalTitle = styled.h1`
  margin: 0;
`
