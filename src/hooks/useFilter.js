import { useState } from 'react'

const initialState = {
  location: null,
  guests: null
}

export const useFilter = (state = initialState) => {
  const [filters, setFilters] = useState(state)

  const addLocation = (location) => setFilters(prev => ({
    ...prev,
    location
  }))

  const addGuests = (guests) => setFilters(prev => ({
    ...prev,
    guests
  }))

  return {
    filters,
    addLocation,
    addGuests
  }
}
