import React from 'react'
import { SearchBar } from '../SearchBar'

export const Modal = () => {
  return (
    <aside className='Modal'>
      <div className='Modal-content'>
        <h1 className='Modal-title'>Modal title</h1>
        <SearchBar type='modal' />
      </div>
    </aside>
  )
}
