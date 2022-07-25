import React from 'react'
import { Button } from '../../components/Button'
import { FaSearch } from 'react-icons/fa'

const HeaderBar = () => (
  <div className='Header-search'>
    <Button filter='location'>
      Helsinki, Finland
    </Button>
    <Button filter='guest' bordered>
      <span>Add Guest</span>
    </Button>
    <Button filter='guest'>
      <FaSearch color='#eb5757' />
    </Button>
  </div>
)

const ModalBar = () => (
  <div className='Header-search'>
    <Button filter='location'>
      Helsinki, Finland
    </Button>
    <Button filter='guest' bordered>
      <span>Add Guest</span>
    </Button>
    <Button filter='guest'>
      <FaSearch color='#000' />
    </Button>
  </div>
)

const BAR_TYPES = {
  header: <HeaderBar />,
  modal: <ModalBar />
}

export const SearchBar = ({ type }) => BAR_TYPES[type]
