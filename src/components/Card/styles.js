import styled from 'styled-components'
import { cardSize, color, spacing, weight } from '../../styles/stylesConfig'

export const StyledSpan = styled.span`
  border: 1px solid ${color.secondaryDark};
  border-radius: 12px;
  padding: .3em ${spacing.small};
  font-weight: ${weight.bolder};
`

export const StyledCard = styled.article`
  max-width: ${cardSize.regular};
  margin-inline: auto;
`

export const CardPicture = styled.picture`
  display: block;
  aspect-ratio: 3/2;
`

export const CardImage = styled.img`
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardHeading = styled.div`
  display: flex;
  gap: ${spacing.medium};
  align-items: center;
  margin-block: ${spacing.medium};
`

export const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: .4em;
`

export const CardTitle = styled.h2`
  font-weight: ${weight.regular};
  font-size: 1rem;
  opacity: .4;
`

export const CardText = styled.p`
  margin-block: .5em 3em;
  font-weight: ${weight.bold};
`
