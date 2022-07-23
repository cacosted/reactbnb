import React from 'react'

export const Card = () => {
  return (
    <article>
      <picture>
        <img src='' alt='Something' />
      </picture>
      <div className='Card-details'>
        <span>Super Host</span>
        <p>Entire apartment. 2 beds</p>
        <div className='Card-rating'>
          <img src='' alt='Star' />
          <span>4.40</span>
        </div>
        <p>Stylist apartment in center of the city</p>
      </div>
    </article>
  )
}
