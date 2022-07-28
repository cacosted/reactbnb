import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

export const LocationItem = ({ location }) => {
  return (
    <li className='LocationItem'>
      <FaMapMarkerAlt />
      <span>
        {location.city}
      </span>
    </li>
  )
}
