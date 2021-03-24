import React,{useContext, useEffect} from 'react'
import SearchContextProvider,{ SearchContext } from '../context/Seach-context'

function Navi() {

  const [serchedCity, setSearchedCity] = useContext(SearchContext)
  console.log("city: " + serchedCity)
  // const [city, setcity] = useState('Vancouver')
  // const [cityNameForSearch, setCityNameForSearch] = useState('')
  
  useEffect(() => {
    // setSearchedCity("London")
    
    console.log("cityInUse: " + serchedCity)
    // setSearchHandler();
  }, [])

  const setSearchHandler = (e) => {
    // e.preventDefault()
    console.log(e.target.value)
    // setSearchedCity(e.target.value)
    // console.log("new city: " + serchedCity)
  }

  // const changeHandler = (e) => {
  //   console.log(e.target.value)
  // }

  return (
    <div>
      <p>yooooooooooooooooooo</p>
      <img src="https://logodix.com/logo/390958.png" alt="top logo" />
      <form onSubmit={setSearchHandler}>
      {/* <input type="text" onChange={changeHandler}></input> */}
      <input type="text" id="search" placeholder="Search city"/>

      </form>
    </div>
  )
}

// (e) => setSearchedCity(e.target.value)

export default Navi

