import React from 'react'
import { FaStar } from 'react-icons/fa'
import { color } from '../../styles/stylesConfig'
import {
  StyledSpan,
  StyledCard,
  CardPicture,
  CardImage,
  CardHeader,
  CardHeading,
  CardRating,
  CardTitle,
  CardText
} from './styles'
export const Card = ({
  superHost,
  title,
  type,
  rating,
  beds,
  photo
}) => {
  return (
    <StyledCard>
      <CardPicture>
        <CardImage src={photo} alt={title} />
      </CardPicture>
      <div>
        <CardHeader>
          <CardHeading>
            {superHost && <StyledSpan>Super Host</StyledSpan>}
            <CardTitle>{`${type} . ${beds}`} Beds</CardTitle>
          </CardHeading>

          <CardRating>
            <FaStar color={color.main} />
            <span>{rating}</span>
          </CardRating>
        </CardHeader>
        <CardText>{title}</CardText>

      </div>
    </StyledCard>
  )
}
