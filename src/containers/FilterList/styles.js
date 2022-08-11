import styled from 'styled-components'
import { spacing } from '../../styles/stylesConfig'

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  gap: ${spacing.medium};
  position: absolute;
  display: ${props => props.isActive ? 'grid' : 'none'};
  top: 38%;
  
  @media (min-width: 800px) {
    top: 28%;
  }
`
