import React from 'react'
import { SearchBar } from '../../components/SearchBar'
import { FilterList } from '../FilterList'

export const Modal = () => {
  return (
    <aside className='Modal'>
      <div className='Modal-content'>
        <h1 className='Modal-title'>Modal title</h1>
        <SearchBar />
        <FilterList />
      </div>
    </aside>
  )
}
