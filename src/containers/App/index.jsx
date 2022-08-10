import React, { useState } from 'react'
import './App.css'
import { Header } from '../Header'
import { CardContainer } from '../CardContainer'
import { Modal } from '../Modal'
import { Logo } from '../../components/Logo'
import { HeaderBar } from '../../components/HeaderBar'

const initialState = {
  location: {},
  guests: null
}

export const App = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [cardFilters, setCardFilters] = useState(initialState)

  return (
    <main className='App'>
      <Header>
        <Logo />
        <HeaderBar activeModal={activeModal} setActiveModal={setActiveModal} />
      </Header>
      <CardContainer cardFilters={cardFilters} />
      <Modal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        cardFilters={cardFilters}
        setCardFilters={setCardFilters}
      />
    </main>
  )
}
