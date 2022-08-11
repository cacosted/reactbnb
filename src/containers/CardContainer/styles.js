import styled from 'styled-components'
import { cardSize } from '../../styles/stylesConfig'

export const CardContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CardContainerBody = styled.div`
  display: grid;  
  grid-template-columns: 
    repeat(auto-fill, 
      minmax(${cardSize.regular}, 1fr)
      );
`
