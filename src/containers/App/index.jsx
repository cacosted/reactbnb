import React, { useState } from 'react'
import './App.css'
import { Header } from '../Header'
import { CardContainer } from '../CardContainer'
import { Modal } from '../Modal'
import { Logo } from '../../components/Logo'
import { HeaderBar } from '../../components/HeaderBar'

export const App = () => {
  const [activeModal, setActiveModal] = useState(false)

  return (
    <main className='App'>
      <Header>
        <Logo />
        <HeaderBar activeModal={activeModal} setActiveModal={setActiveModal} />
      </Header>
      <CardContainer />
      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
    </main>
  )
}
