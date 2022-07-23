import React from 'react'
import { Card } from '../../components/Card'

export const CardContainer = () => {
  return (
    <div className='CardContainer'>
      <h1>Stays in Finland</h1>
      <span>12+ days</span>
      {
        [1, 2, 3].map(card => <Card />)
      }
    </div>
  )
}
