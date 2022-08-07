import React from 'react'
import { FaSearch } from 'react-icons/fa'
// import { FilterList } from '../../containers/FilterList'
// import { GuestItem } from '../GuestItem'

export const SearchBar = ({ type, children }) => {
  return (
    <form className='SearchBar'>
      {children}
      <button className='SearchBar-submit' type='submit'>
        <FaSearch />
        <span>Search</span>
      </button>
    </form>
  )
}
