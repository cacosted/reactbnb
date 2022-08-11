import styled from 'styled-components'
import { color, size, spacing } from '../../styles/stylesConfig'

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
export const FormSubmit = styled.button`
  position: absolute;
  bottom: ${spacing.medium};
  left: 50%;
  width: fit-content;
  transform: translateX(-50%);
  padding: ${spacing.medium} ${spacing.large};
  color: ${color.light};
  background-color: ${color.main};
  border: none;
  border-radius: 15px;
  display: flex;
  gap: ${spacing.small};
  font-size: ${size.medium};

  @media (min-width: 800px) {
    
    position: relative;
    top: 0;
  }
`
