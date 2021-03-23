import React,{useContext, useEffect} from 'react'
import SearchContextProvider,{ SearchContext } from '../context/Seach-context'

function Navi() {

  const [serchedCity, setSearchedCity] = useContext(SearchContext)
  console.log("kkk: ", typeof(serchedCity))
  // const [city, setcity] = useState('Vancouver')
  // const [cityNameForSearch, setCityNameForSearch] = useState('')
  
  useEffect(() => {
    setSearchedCity("London")
    console.log("kkkInUse: ", serchedCity)
  }, [])

  return (
    <div>
      <p>yooooooooooooooooooo</p>
      <img src="https://logodix.com/logo/390958.png" alt="top logo" />
      <input type="text" id="search" placeholder="Search city"/>
    </div>
  )
}

export default Navi

