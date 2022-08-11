import React from 'react'
import { Button } from '../Button'
import { FaSearch } from 'react-icons/fa'

export const HeaderBar = ({ setActiveModal, cardFilters }) => {
  const { location, guests } = cardFilters

  const locationText = `${location?.city}, ${location?.country}`
  const guestText = `Guests: ${guests}`

  return (
    <div className='HeaderBar-search' onClick={() => setActiveModal(true)}>
      <Button filter='location'>
        <span>{location ? locationText : 'Helsinki, Finland'}</span>
      </Button>
      <Button filter='guest' bordered>
        <span>{guests ? guestText : 'Add Guests'}</span>
      </Button>
      <Button filter='guest'>
        <FaSearch color='#eb5757' />
      </Button>
    </div>
  )
}
