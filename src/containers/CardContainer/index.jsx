import React from 'react'
import { Card } from '../../components/Card'
import data from '../../stays.json'

export const CardContainer = () => {
  return (
    <div className='CardContainer'>
      <h1>Stays in Finland</h1>
      <span>12+ days</span>
      {
        data.map((listing, index) => <Card key={index} {...listing} />)
      }
    </div>
  )
}
