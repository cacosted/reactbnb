import React from 'react'
import { Button } from '../Button'
import { FaSearch } from 'react-icons/fa'

export const HeaderBar = ({ setActiveModal }) => (
  <div className='HeaderBar-search' onClick={() => setActiveModal(true)}>
    <Button filter='location'>
      Helsinki, Finland
    </Button>
    <Button filter='guest' bordered>
      <span>Add Guest</span>
    </Button>
    <Button filter='guest'>
      <FaSearch color='#eb5757' />
    </Button>
  </div>
)
