import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    margin-inline: auto;
    margin-block-end: 1em;
    border-radius: 16px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    font-family: var(--light-font);
    overflow: hidden;

    @media (min-width: 800px) {
      margin: 0;
    }
`

export const ButtonText = styled.span`
  opacity: ${props => props.light ? 0.3 : 1}
`
