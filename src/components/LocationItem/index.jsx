import { FaMapMarkerAlt } from 'react-icons/fa'

export const LocationItem = ({ location, setSelectedLocation }) => {
  const { city, country } = location

  return (
    <li
      onClick={() => setSelectedLocation({ city, country })}
      className='LocationItem'
    >
      <FaMapMarkerAlt />
      <span>
        {`${city}, ${country}`}
      </span>
    </li>
  )
}
