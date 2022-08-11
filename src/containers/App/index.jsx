import React, { useState } from 'react'
import './App.css'
import { Header } from '../Header'
import { CardContainer } from '../CardContainer'
import { Modal } from '../Modal'
import { Logo } from '../../components/Logo'
import { HeaderBar } from '../../components/HeaderBar'
import { useFilter } from '../../hooks/useFilter'
import { StyledApp } from './styles'

export const App = () => {
  const [activeModal, setActiveModal] = useState(false)
  const { filters: cardFilters, addLocation: addCardLocation, addGuests: addCardGuests } = useFilter()

  return (
    <StyledApp>
      <Header>
        <Logo />
        <HeaderBar activeModal={activeModal} setActiveModal={setActiveModal} cardFilters={cardFilters} />
      </Header>
      <CardContainer cardFilters={cardFilters} />
      <Modal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        addCardGuests={addCardGuests}
        addCardLocation={addCardLocation}
      />
    </StyledApp>
  )
}
