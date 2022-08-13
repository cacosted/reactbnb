# Reactbnb - airbnb's UI clone

![Preview Design](https://user-images.githubusercontent.com/57645180/184495602-902a597f-e24a-44ca-a0be-edbd153e624c.png)

This is a solution of windbnb challenge from [Dev Challenges](http://devchallenges.io).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Installation](#installation)

## Overview

### The challenge

Users should be able to:

- See a list of properties
- See the property card with a name, rating, apartment type, and super host
- Open the filter drawer
- Filter properties by location and number of guests
- See the number of filtered items
- See pages following given designs

### Links

- Live Demo: [Demo](https://reactbnb.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript ES6+
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Vite](https://vitejs.dev/) - Bundle tool
- [Standard](https://standardjs.com/) - Linter
- [React Icons](https://react-icons.github.io/react-icons) - Icons library

### What I learned

This was an interesting challenge to practice with React.

Implemented `customs hooks` to improve readability of components
```js
// With this hook a can create specific filters and update them individually
export const useFilter = (state = initialState) => {
  const [filters, setFilters] = useState(state)

  const addLocation = (location) => setFilters(prev => ({
    ...prev,
    location
  }))

  const addGuests = (guests) => setFilters(prev => ({
    ...prev,
    guests
  }))

  return {
    filters,
    addLocation,
    addGuests
  }
}

// Usage
const {filters: filterName, addLocation: addNameLocation, addGuest: addNameGuests} = useFilter(initialState)
```

Followed component composition pattern to spread the data across the app without the use of `useContext` hook

```js
// FilterList/index.jsx
export const FilterList = ({ children, filter, activeTab }) => {
  const isActive = filter === activeTab
  return (
    <StyledList isActive={isActive}>
      {children}
    </StyledList>
  )
}
// Modal/index.jsx
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
    })
  }
</FilterList>
```
Added a service to handle the data output depending on the filters applied 
```js
export const getFilteredData = (filters, array) => {
  const { location, guests } = filters

  let filteredData = array

  if (location && guests) {
    //Filter by location and guests
  } else if (location) {
    //Filter only by location
  } else if (guests) {
    //Filter only by guests
  }

  return filteredData
}
```

Used this cool trick to remove the duplicated locations from the data file with only two lines
```js
const rawLocations = data.map(({ city, country }) => (`${city}, ${country}`))
const locations = [...new Set(rawLocations)]
```
### Useful resources

- [Styled Components docs](https://styled-components.com/docs) - The official documentation of styled components, this resource was very useful to understand this package.

- [Conditional styled components article](https://medium.com/@nehrwein/conditional-styling-with-styled-components-in-react-c26bd9f0db88) - This is a great article to understand the basis on condition handling with styled component. Helped me a lot with this project.

## Author

- Dev Challenges - [@cacosted](https://devchallenges.io/portfolio/cacosted)
- Twitter - [@cacosted](https://www.twitter.com/cacosted)

## Installation

To test this project by yourself first clone the repository, then you can use this commands:

Install project
```
npm install
```

Run local server
```
npm run dev
```

Build project
```
npm run build
```

Preview Build
```
npm run preview
```
