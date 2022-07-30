import React from 'react'
import { SearchBar } from '../../components/SearchBar'
import data from '../../stays.json'
import { FilterList } from '../FilterList'
import { LocationItem } from '../../components/LocationItem'
import { GuestItem } from '../../components/GuestItem'
import { FaRegTimesCircle } from 'react-icons/fa'

export const Modal = ({ activeModal, setActiveModal }) => {
  const locations = data.slice(0, 4)
  const isActive = activeModal ? '' : 'hidden'
  return (
    <aside className={`Modal ${isActive}`}>
      <div className='Modal-content'>
        <div className='Modal-header'>
          <h1 className='Modal-title'>Edit your search</h1>
          <FaRegTimesCircle className='Modal-close' onClick={() => setActiveModal(false)} />
        </div>
        <SearchBar setActiveModal={setActiveModal} />
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
