import React from 'react'
import { Card } from '../../components/Card'
import data from '../../stays.json'

export const CardContainer = () => {
  const { country } = data
  return (
    <section className='CardContainer'>
      <header className='CardContainer-header'>
        <h1>Stays in {country}</h1>
        <span>12+ days</span>
      </header>
      {
        data.map((listing, index) => <Card key={index} {...listing} />)
      }
    </section>
  )
}
