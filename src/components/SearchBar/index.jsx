import React from 'react'
import { FaSearch } from 'react-icons/fa'
// import { FilterList } from '../../containers/FilterList'
// import { GuestItem } from '../GuestItem'

export const SearchBar = ({ children, setActiveModal, searchFilters, addCardLocation, addCardGuests }) => {
  const { location, guests } = searchFilters
  const onSubmit = (e) => {
    e.preventDefault()
    addCardLocation(location)
    addCardGuests(guests)
    setActiveModal(false)
  }
  return (
    <form className='SearchBar' onSubmit={onSubmit}>
      {children}
      <button className='SearchBar-submit' type='submit'>
        <FaSearch />
        <span>Search</span>
      </button>
    </form>
  )
}
