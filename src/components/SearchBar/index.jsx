import React from 'react'
import { Button } from '../../components/Button'
import { FaSearch } from 'react-icons/fa'

export const SearchBar = () => {
  return (
    <div className='Header-search'>
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
}