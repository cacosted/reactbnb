import styled from 'styled-components'
import { color, spacing } from '../../styles/stylesConfig'

export const Form = styled.form`
  display: grid;
  padding-block: ${spacing.small};
  border-radius: 15px;
  box-shadow: 0 0 5px ${color.lightShadow};
  padding: 0;
  margin-block: ${spacing.large};

  @media (min-width: 800px) {
    
    grid-template-columns: repeat(3,1fr);
    align-items: center;
    
  }
`
