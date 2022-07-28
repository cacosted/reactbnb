import React from 'react'
import { Button } from '../../components/Button'
import { FaSearch } from 'react-icons/fa'

export const SearchBar = ({ type }) => {
  return (
    <div className='SearchBar-search'>
      <Button filter='location'>
        Helsinki, Finland
      </Button>
      <Button filter='guest' bordered>
        <span>Add Guest</span>
      </Button>
      <Button filter='guest'>
        <FaSearch color='#000' />
      </Button>
    </div>
  )
}
