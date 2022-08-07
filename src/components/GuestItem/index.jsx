import React from 'react'

export const GuestItem = ({ title, description, children }) => {
  return (
    <li>
      <header className='GuestItem-header'>
        <h2 className='GuestItem-title'>{title}</h2>
        <p className='GuestItem-description'>{description}</p>
      </header>
      {children}
    </li>
  )
}
