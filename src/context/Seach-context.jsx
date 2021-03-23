import React, { createContext, useState } from 'react'
import App from '../App'
export const SearchContext = createContext([
  '',
  () => {}
])


const SearchContextProvider = (props) => {

  const [serchedCity, setSearchedCity] = useState('Vancouver')

  // const serchHandler = () => {
  //   setSearchedCity()
  // }
  return (
    // <SearchContext.Provider value={{city: serchedCity}}>
     <SearchContext.Provider value={[serchedCity, setSearchedCity]}>
      <App />
    </SearchContext.Provider>
  )

}

export default  SearchContextProvider