import { FaMapMarkerAlt } from 'react-icons/fa'
import { StyledLocation } from './styles'
import { color } from '../../styles/stylesConfig'

export const LocationItem = ({ location, setSelectedLocation }) => {
  const { city, country } = location

  return (
    <StyledLocation
      onClick={() => setSelectedLocation({ city, country })}
    >
      <FaMapMarkerAlt color={color.secondaryDark} />
      <span>
        {`${city}, ${country}`}
      </span>
    </StyledLocation>
  )
}
