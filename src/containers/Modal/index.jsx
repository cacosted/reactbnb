import { useState, useEffect } from 'react'
import { SearchBar } from '../../components/SearchBar'
import data from '../../stays.json'
import { FilterList } from '../FilterList'
import { LocationItem } from '../../components/LocationItem'
import { GuestItem } from '../../components/GuestItem'
import { FaRegTimesCircle } from 'react-icons/fa'
import { Counter } from '../../components/Counter'
import { useCounter } from '../../hooks/useCounter'

export const Modal = ({ activeModal, setActiveModal, initialState, setCardFilters }) => {
  const rawLocations = data.map(({ city, country }) => (`${city}, ${country}`))
  const locations = [...new Set(rawLocations)]

  const isActive = activeModal ? '' : 'hidden'
  const [activeTab, setActiveTab] = useState('guest')

  const {
    counter: adultCounter,
    increment: adultIncrement,
    decrement: adultDecrement
  } = useCounter()

  const {
    counter: childCounter,
    increment: childIncrement,
    decrement: childDecrement
  } = useCounter()

  const [selectedLocation, setSelectedLocation] = useState(null)
  const [searchFilters, setSearchFilters] = useState(initialState)
  const inputValue = searchFilters.location ? `${searchFilters.location.city}, ${searchFilters.location.country}` : ''

  useEffect(() => {
    setSearchFilters({
      location: selectedLocation,
      guests: adultCounter + childCounter
    })
  }, [adultCounter, childCounter, selectedLocation])

  return (
    <aside className={`Modal ${isActive}`}>
      <div className='Modal-content'>
        <div className='Modal-header'>
          <h1 className='Modal-title'>Edit your search</h1>
          <FaRegTimesCircle className='Modal-close' onClick={() => setActiveModal(false)} />
        </div>
        <SearchBar setActiveModal={setActiveModal} searchFilters={searchFilters} setCardFilters={setCardFilters}>
          <label className='SearchBar-item' onClick={() => setActiveTab('location')}>
            <span className='SearchBar-title'>Location</span>
            <input
              id='location'
              className='SearchBar-content'
              type='text'
              placeholder='Add location'
              value={inputValue}
              readOnly
            />
            <FilterList filter='location' activeTab={activeTab}>
              {
                locations.map(location => {
                  const [city, country] = location.split(', ')
                  return (
                    <LocationItem
                      key={city}
                      location={{ city, country }}
                      setSelectedLocation={setSelectedLocation}
                    />
                  )
                }
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
              value={searchFilters.guests ? searchFilters.guests : ''}
              readOnly
            />
            <FilterList filter='guest' activeTab={activeTab}>
              <GuestItem title='Adults' description='Ages 13 or above'>
                <Counter>
                  <button
                    className='Counter-btn'
                    disabled={adultCounter <= 0}
                    type='button'
                    onClick={adultDecrement}
                  >-
                  </button>
                  <span>{adultCounter}</span>
                  <button
                    className='Counter-btn'
                    type='button'
                    onClick={adultIncrement}
                  >+
                  </button>
                </Counter>
              </GuestItem>
              <GuestItem title='Children' description='Ages 2 - 12'>
                <Counter>
                  <button
                    className='Counter-btn'
                    onClick={childDecrement}
                    type='button'
                    disabled={childCounter <= 0}
                  >-
                  </button>
                  <span>{childCounter}</span>
                  <button
                    className='Counter-btn'
                    type='button'
                    onClick={childIncrement}
                  >+
                  </button>
                </Counter>
              </GuestItem>
            </FilterList>
          </label>
        </SearchBar>

      </div>
    </aside>
  )
}
