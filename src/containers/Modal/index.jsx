import { useState, useEffect } from 'react'
import { SearchBar } from '../../components/SearchBar'
import data from '../../stays.json'
import { FilterList } from '../FilterList'
import { LocationItem } from '../../components/LocationItem'
import { GuestItem } from '../../components/GuestItem'
import { FaRegTimesCircle } from 'react-icons/fa'
import { Counter } from '../../components/Counter'

// const TabList = (active) => {
//   return (
//     {}
//     )
// }

export const Modal = ({ activeModal, setActiveModal }) => {
  const locations = data.slice(0, 10)

  const isActive = activeModal ? '' : 'hidden'
  const [activeTab, setActiveTab] = useState('guest')
  const [itemFilters, setItemFilters] = useState({
    country: null,
    city: null,
    guests: null

  })

  const [adultCounter, setAdultCounter] = useState(0)
  const [childCounter, setChildCounter] = useState(0)

  useEffect(() => {
    setItemFilters(prev => ({
      ...prev,
      guests: adultCounter + childCounter
    }))
  }, [adultCounter, childCounter])

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
            <input
              id='location'
              className='SearchBar-content'
              type='text'
              placeholder='Add location'
              value={itemFilters.city ?? ''}
              readOnly
            />
            <FilterList filter='location' activeTab={activeTab}>
              {
                locations.map(location => (
                  <LocationItem
                    key={location.title}
                    location={location}
                    setItemFilters={setItemFilters}
                  />)
                )
              }
            </FilterList>
          </label>

          <label className='SearchBar-item' onClick={() => setActiveTab('guest')}>
            <span className='SearchBar-title'>Guests</span>
            <input
              id='guest'
              className='SearchBar-content'
              type='text'
              placeholder='Add guests'
              value={itemFilters.guests ? itemFilters.guests : ''}
              readOnly
            />
            <FilterList filter='guest' activeTab={activeTab}>
              <GuestItem title='Adults' description='Ages 13 or above' setItemFilters={setItemFilters}>
                <Counter>
                  <button
                    className='Counter-btn'
                    disabled={adultCounter <= 0}
                    onClick={() => setAdultCounter(adultCounter - 1)}
                  >-
                  </button>
                  <span>{adultCounter}</span>
                  <button className='Counter-btn' onClick={() => setAdultCounter(adultCounter + 1)}>+</button>
                </Counter>
              </GuestItem>
              <GuestItem title='Children' description='Ages 2 - 12' setItemFilters={setItemFilters}>
                <Counter>
                  <button
                    className='Counter-btn'
                    onClick={() => setChildCounter(childCounter - 1)}
                    disabled={childCounter <= 0}
                  >-
                  </button>
                  <span>{childCounter}</span>
                  <button className='Counter-btn' onClick={() => setChildCounter(childCounter + 1)}>+</button>
                </Counter>
              </GuestItem>
            </FilterList>
          </label>
        </SearchBar>

      </div>
    </aside>
  )
}
