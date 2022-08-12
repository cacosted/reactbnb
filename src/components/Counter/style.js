import styled from 'styled-components'
import { color, spacing, size } from '../../styles/stylesConfig'

export const StyledCounter = styled.div`
  margin-block: ${spacing.medium};
  display: flex;
  align-items: center;
  gap: ${spacing.medium};
  font-size: ${size.medium};
`

export const CounterButton = styled.button`
  border-radius: 5px;
  padding: .3em ${spacing.small};
  font-size: ${size.medium};
  background-color: ${color.light};
  border: 1px solid ${color.dark};

  &:active {
    filter: brightness(95%);
  }
`
