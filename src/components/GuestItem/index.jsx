import React from 'react'
import { GuestTitle, GuestDescription } from './styles'

export const GuestItem = ({ title, description, children }) => {
  return (
    <li>
      <header>
        <GuestTitle>{title}</GuestTitle>
        <GuestDescription>{description}</GuestDescription>
      </header>
      {children}
    </li>
  )
}
