import React, { useState } from 'react'
import './App.css'
import { Header } from '../Header'
import { CardContainer } from '../CardContainer'
import { Modal } from '../Modal'
import { Logo } from '../../components/Logo'
import { HeaderBar } from '../../components/HeaderBar'
import { useFilter } from '../../hooks/useFilter'

export const App = () => {
  const [activeModal, setActiveModal] = useState(false)
  // const [cardFilters, setCardFilters] = useState(initialState)
  const { filters: cardFilters, addLocation: addCardLocation, addGuests: addCardGuests } = useFilter()

  return (
    <main className='App'>
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
    </main>
  )
}
