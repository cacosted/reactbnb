import React from 'react'
import { HeaderButton } from '../HeaderButton'
import { FaSearch } from 'react-icons/fa'
import { Container, ButtonText } from './styles'
import { color } from '../../styles/stylesConfig'

export const HeaderBar = ({ setActiveModal, cardFilters }) => {
  const { location, guests } = cardFilters

  const locationText = `${location?.city}, ${location?.country}`
  const guestText = `Guests: ${guests}`

  return (
    <Container onClick={() => setActiveModal(true)}>
      <HeaderButton filter='location'>
        <ButtonText>{location ? locationText : 'Helsinki, Finland'}</ButtonText>
      </HeaderButton>
      <HeaderButton filter='guest' bordered>
        <ButtonText light>{guests ? guestText : 'Add Guests'}</ButtonText>
      </HeaderButton>
      <HeaderButton filter='guest'>
        <FaSearch color={color.main} />
      </HeaderButton>
    </Container>
  )
}
