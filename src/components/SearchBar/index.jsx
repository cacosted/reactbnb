import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Form, FormSubmit } from './styles'

export const SearchBar = ({ children, setActiveModal, searchFilters, addCardLocation, addCardGuests }) => {
  const { location, guests } = searchFilters
  const onSubmit = (e) => {
    e.preventDefault()
    addCardLocation(location)
    addCardGuests(guests)
    setActiveModal(false)
  }
  return (
    <Form onSubmit={onSubmit}>
      {children}
      <FormSubmit type='submit'>
        <FaSearch />
        <span>Search</span>
      </FormSubmit>
    </Form>
  )
}
