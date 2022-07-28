import React from 'react'
import { Counter } from '../Counter'

export const GuestItem = ({ title, description }) => {
  return (
    <li>
      <header className='GuestItem-header'>
        <h2 className='GuestItem-title'>{title}</h2>
        <p className='GuestItem-description'>{description}</p>
      </header>
      <Counter>
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </Counter>
    </li>
  )
}
