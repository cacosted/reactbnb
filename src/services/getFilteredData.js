export const getFilteredData = (filters, array) => {
  const { location, guests } = filters

  let filteredData = array

  if (location && guests) {
    filteredData = array.filter(card => (
      card.city === location.city &&
      card.country === location.country &&
      card.maxGuests >= guests
    ))
  } else if (location) {
    filteredData = array.filter(card => (
      card.city === location.city &&
      card.country === location.country
    ))
  } else if (guests) {
    filteredData = array.filter(card => card.maxGuests >= guests)
  }

  return filteredData
}
