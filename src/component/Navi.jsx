import React,{useContext, useEffect} from 'react'
import { SearchContext } from '../Inae'
import Logo from '../sass/img/fake_logo.png';

function Navi() {

  const [searchedCity, setSearchedCity] = useContext(SearchContext)
  console.log("city: " + searchedCity)
  // const [city, setcity] = useState('Vancouver')
  // const [cityNameForSearch, setCityNameForSearch] = useState('')
  
  useEffect(() => {
    // setSearchedCity("London")
    
    console.log("cityInUse: " + searchedCity)
    // setSearchHandler();
  }, [])

  const setSearchHandler = (e) => {
    e.preventDefault()
    console.log("in funcccc", e)
    console.log("in func", e.target.value)
    setSearchedCity(e.target.value)
    console.log("new city: " + searchedCity)
  }

  console.log("kkkkk+", searchedCity)

  // const changeHandler = (e) => {
  //   console.log(e.target.value)
  // }

  return (
    // <div>
    //   <p>yooooooooooooooooooo</p>
    //   <img src="https://logodix.com/logo/390958.png" alt="top logo" />
    //   <form onSubmit={setSearchHandler}>
    //   {/* <input type="text" onChange={changeHandler}></input> */}
    //   <input type="text" id="search" placeholder="Search city"/>

    //   </form>
    // </div> 
    <header className="App-header">
          <nav className="nav-bar">
            <img src={Logo} className="nav-logo" />
            <div className="search">
                <form onSubmit={setSearchHandler}>

                  <input type="search" placeholder="Search your city, Find your beer!!" className="search-input"></input>
                  <button type="submit">SEARCH</button>    
                </form>
            </div>
            <div className="burger-menu">
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
          </nav>
      </header>
  )
}

// (e) => setSearchedCity(e.target.value)

export default Navi

