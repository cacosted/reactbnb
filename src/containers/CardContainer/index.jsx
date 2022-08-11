import React from 'react'
import { Card } from '../../components/Card'
import data from '../../stays.json'
import { getFilteredData } from '../../services/getFilteredData'
import { CardContainerBody, CardContainerHeader } from './styles'

export const CardContainer = ({ cardFilters }) => {
  const { country } = data[0]

  const filteredData = getFilteredData(cardFilters, data)

  const cardList = filteredData.map((listing, index) => <Card key={index} {...listing} />)

  const stays = cardList.length
  return (
    <section>
      <CardContainerHeader>
        <h1>Stays in {country}</h1>
        <span>{stays >= 12 ? '12+' : stays} stays</span>
      </CardContainerHeader>
      <CardContainerBody>
        {cardList}
      </CardContainerBody>
    </section>
  )
}
