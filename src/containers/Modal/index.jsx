import React from 'react'
import { SearchBar } from '../../components/SearchBar'
import data from '../../stays.json'
import { FilterList } from '../FilterList'
import { LocationItem } from '../../components/LocationItem'
import { GuestItem } from '../../components/GuestItem'
import { FaRegTimesCircle } from 'react-icons/fa'
export const Modal = () => {
  const locations = data.slice(0, 4)

  return (
    <aside className='Modal'>
      <div className='Modal-content'>
        <div className='Modal-header'>
          <h1 className='Modal-title'>Edit your search</h1>
          <FaRegTimesCircle className='Modal-close' />
        </div>
        <SearchBar />
        <div className='Modal-filters'>

          <FilterList>
            {
              locations.map(location => (
                <LocationItem key={location.title} location={location} />
              ))
            }
          </FilterList>

          <FilterList>
            <GuestItem title='Adults' description='Ages 13 or above' />
            <GuestItem title='Children' description='Ages 2 - 12' />
          </FilterList>
        </div>
      </div>
    </aside>
  )
}
