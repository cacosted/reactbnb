import styled from 'styled-components'
import { color, spacing } from '../../styles/stylesConfig'

const fieldShadow = `1px solid ${color.lightShadow}`

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

export const SearchField = styled.label`
  padding: ${spacing.medium} ${spacing.large};
  border-block-start: ${props => props.bordered ? fieldShadow : 'none'};

  &:focus-within {
    outline: 2px solid ${color.dark};
    border-radius: 15px;
  }

  
  @media (min-width: 800px) {
    border-inline: ${props => props.bordered ? fieldShadow : 'none'}
  }
`
export const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding-block: ${spacing.medium};

  &:focus {
    outline: none;
  }
`
