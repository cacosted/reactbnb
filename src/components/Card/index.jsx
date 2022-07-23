import React from 'react'

export const Card = ({
  superHost,
  title,
  rating,
  beds,
  photo
}) => {
  // console.log(listing)
  return (
    <article>
      <picture>
        <img src={photo} alt={title} />
      </picture>
      <div className='Card-details'>
        {superHost && <span>Super Host</span>}
        <p>{title}</p>
        <div className='Card-rating'>
          <img src='' alt='Star' />
          <span>{rating}</span>
        </div>
        <p>{title}.{beds}</p>
      </div>
    </article>
  )
}
