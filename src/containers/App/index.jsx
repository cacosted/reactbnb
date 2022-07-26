import React from 'react'
import './App.css'
import { Header } from '../Header'
import { CardContainer } from '../CardContainer'
import { Modal } from '../Modal'

export const App = () => {
  return (
    <main className='App'>
      <Header />
      <CardContainer />
      <Modal />
    </main>
  )
}
