import { useState, useEffect } from 'react'
import { SearchBar } from '../../components/SearchBar'
import data from '../../stays.json'
import { FilterList } from '../FilterList'
import { LocationItem } from '../../components/LocationItem'
import { GuestItem } from '../../components/GuestItem'
import { FaRegTimesCircle } from 'react-icons/fa'
import { Counter } from '../../components/Counter'
import { useCounter } from '../../hooks/useCounter'
import { useFilter } from '../../hooks/useFilter'
import { spacing } from '../../styles/stylesConfig'
import { CounterButton } from '../../components/Counter/style'
import {
  StyledModal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  SearchField,
  SearchInput,
  SearchTitle
} from './styles'

const rawLocations = data.map(({ city, country }) => (`${city}, ${country}`))
const locations = [...new Set(rawLocations)]

export const Modal = ({ activeModal, setActiveModal, addCardLocation, addCardGuests }) => {
  const [activeTab, setActiveTab] = useState('guest')

  // adultCounter
  const {
    counter: adultCounter,
    increment: adultIncrement,
    decrement: adultDecrement
  } = useCounter()

  // childCounter
  const {
    counter: childCounter,
    increment: childIncrement,
    decrement: childDecrement
  } = useCounter()

  const [selectedLocation, setSelectedLocation] = useState(null)
  const {
    filters: searchFilters,
    addLocation: addSearchLocation,
    addGuests: addSearchGuests
  } = useFilter()

  const locationValue = searchFilters.location ? `${searchFilters.location.city}, ${searchFilters.location.country}` : ''
  const totalGuests = adultCounter + childCounter

  useEffect(() => {
    addSearchLocation(selectedLocation)
    addSearchGuests(totalGuests)
  }, [totalGuests, selectedLocation])

  return (
    <StyledModal activeModal={activeModal}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle className='Modal-title'>Edit your search</ModalTitle>
          <FaRegTimesCircle size={spacing.large} onClick={() => setActiveModal(false)} />
        </ModalHeader>
        <SearchBar
          setActiveModal={setActiveModal}
          searchFilters={searchFilters}
          addCardLocation={addCardLocation}
          addCardGuests={addCardGuests}
        >
          <SearchField onClick={() => setActiveTab('location')}>
            <SearchTitle>Location</SearchTitle>
            <SearchInput
              id='location'
              type='text'
              placeholder='Add location'
              value={locationValue}
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
          </SearchField>

          <SearchField bordered onClick={() => setActiveTab('guest')}>
            <SearchTitle>Guests</SearchTitle>
            <SearchInput
              id='guest'
              type='text'
              placeholder='Add guests'
              value={totalGuests ? `${totalGuests} guests` : ''}
              readOnly
            />
            <FilterList filter='guest' activeTab={activeTab}>
              <GuestItem title='Adults' description='Ages 13 or above'>
                <Counter>
                  <CounterButton
                    disabled={adultCounter <= 0}
                    type='button'
                    onClick={adultDecrement}
                  >-
                  </CounterButton>
                  <span>{adultCounter}</span>
                  <CounterButton
                    type='button'
                    onClick={adultIncrement}
                  >+
                  </CounterButton>
                </Counter>
              </GuestItem>
              <GuestItem title='Children' description='Ages 2 - 12'>
                <Counter>
                  <CounterButton
                    onClick={childDecrement}
                    type='button'
                    disabled={childCounter <= 0}
                  >-
                  </CounterButton>
                  <span>{childCounter}</span>
                  <CounterButton
                    type='button'
                    onClick={childIncrement}
                  >+
                  </CounterButton>
                </Counter>
              </GuestItem>
            </FilterList>
          </SearchField>
        </SearchBar>

      </ModalContent>
    </StyledModal>
  )
}
