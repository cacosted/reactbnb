import React from 'react'

export const FilterList = () => {
  return (
    <ul className='FilterList'>
      {
        [1, 2, 4].map(item => (
          <li key={item}>
            {item}
          </li>
        )
        )
      }
    </ul>
  )
}
