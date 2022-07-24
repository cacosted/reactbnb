import React from 'react'
import { FaStar } from 'react-icons/fa'

const Span = ({ children }) => <span className='Card-badge'>{children}</span>

export const Card = ({
  superHost,
  title,
  type,
  rating,
  beds,
  photo
}) => {
  // console.log(listing)
  return (
    <article className='Card'>
      <picture className='Card-picture'>
        <img className='Card-img' src={photo} alt={title} />
      </picture>
      <div className='Card-details'>

        <header className='Card-header'>
          <div className='Card-title'>
            {superHost && <Span>Super Host</Span>}
            <h2>{type}</h2>
          </div>

          <div className='Card-rating'>
            <FaStar color='#eb5757  ' />
            <span>{rating}</span>
          </div>
        </header>
        <p>{title}. {beds} Beds</p>

      </div>
    </article>
  )
}
