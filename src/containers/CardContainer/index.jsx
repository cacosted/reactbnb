import React from 'react'
import { Card } from '../../components/Card'
import data from '../../stays.json'

export const CardContainer = ({ cardFilters }) => {
  const { country } = data[0]
  const { location, guests } = cardFilters
  let cardList = []

  let filteredData = data

  if (location && guests) {
    // console.log('location && guests')
    filteredData = data.filter(card => (
      card.city === location.city &&
      card.country === location.country &&
      card.maxGuests >= guests
    ))
  } else if (location) {
    // console.log('location')
    filteredData = data.filter(card => (
      card.city === location.city &&
      card.country === location.country
    ))
  } else if (guests) {
    // console.log('guests')
    filteredData = data.filter(card => card.maxGuests >= guests)
  }
  console.log(filteredData)

  cardList = filteredData.map((listing, index) => <Card key={index} {...listing} />)

  const stays = cardList.length
  return (
    <section className='CardContainer'>
      <header className='CardContainer-header'>
        <h1>Stays in {country}</h1>
        <span>{stays >= 12 ? `${stays}+` : stays} stays</span>
      </header>
      <div className='CardContainer-body'>
        {cardList}
      </div>
    </section>
  )
}
