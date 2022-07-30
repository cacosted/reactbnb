import React from 'react'
import { FaSearch } from 'react-icons/fa'
export const SearchBar = ({ type }) => {
  return (
    <form className='SearchBar'>
      <label className='SearchBar-item' htmlFor='location'>
        <span className='SearchBar-title'>Location</span>
        <input id='location' className='SearchBar-content' type='text' placeholder='Helsinki, Finland' readOnly />
      </label>

      <label className='SearchBar-item'>
        <span className='SearchBar-title'>Guests</span>
        <input id='guest' className='SearchBar-content' type='text' placeholder='Add guests' readOnly />
      </label>
      <button className='SearchBar-submit' type='submit'>
        <FaSearch />
        <span>Search</span>
      </button>
    </form>
  )
}
