import React from 'react'
import { SearchBar } from '../../components/SearchBar'
import data from '../../stays.json'
import { FilterList } from '../FilterList'
import { LocationItem } from '../../components/LocationItem'

export const Modal = () => {
  return (
    <aside className='Modal'>
      <div className='Modal-content'>
        <h1 className='Modal-title'>Modal title</h1>
        <SearchBar />
        <div className='Modal-filters'>

          <FilterList>
            {
              data.map(location => (
                <LocationItem key={location.title} location={location} />
              ))
            }
          </FilterList>

          <FilterList>
            <li>Adults</li>
            <li>Children</li>
          </FilterList>
        </div>
      </div>
    </aside>
  )
}
