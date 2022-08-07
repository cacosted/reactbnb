import { useState } from 'react'
import { SearchBar } from '../../components/SearchBar'
import data from '../../stays.json'
import { FilterList } from '../FilterList'
import { LocationItem } from '../../components/LocationItem'
import { GuestItem } from '../../components/GuestItem'
import { FaRegTimesCircle } from 'react-icons/fa'

// const TabList = (active) => {
//   return (
//     {}
//     )
// }

export const Modal = ({ activeModal, setActiveModal }) => {
  const locations = data.slice(0, 10)
  const isActive = activeModal ? '' : 'hidden'

  const [activeTab, setActiveTab] = useState('guest')

  return (
    <aside className={`Modal ${isActive}`}>
      <div className='Modal-content'>
        <div className='Modal-header'>
          <h1 className='Modal-title'>Edit your search</h1>
          <FaRegTimesCircle className='Modal-close' onClick={() => setActiveModal(false)} />
        </div>
        <SearchBar setActiveModal={setActiveModal}>
          <label className='SearchBar-item' onClick={() => setActiveTab('location')}>
            <span className='SearchBar-title'>Location</span>
            <input id='location' className='SearchBar-content' type='text' placeholder='Helsinki, Finland' readOnly />
            <FilterList filter='location' activeTab={activeTab}>
              {
                locations.map(location => (<LocationItem key={location.title} location={location} />))
              }
            </FilterList>
          </label>

          <label className='SearchBar-item' onClick={() => setActiveTab('guest')}>
            <span className='SearchBar-title'>Guests</span>
            <input id='guest' className='SearchBar-content' type='text' placeholder='Add guests' readOnly />
            <FilterList filter='guest' activeTab={activeTab}>
              <GuestItem title='Adults' description='Ages 13 or above' />
              <GuestItem title='Children' description='Ages 2 - 12' />
            </FilterList>
          </label>
        </SearchBar>

      </div>
    </aside>
  )
}
