// import React,{useContext, useEffect} from 'react'
// import { SearchContext } from '../Inae'
// import Logo from '../sass/img/fake_logo.png';
// import Search from '../Search'

// function Navi() {

//   const [searchedCity, setSearchedCity] = useContext(SearchContext)
//   console.log("city: " + searchedCity)
//   // const [city, setcity] = useState('Vancouver')
//   // const [cityNameForSearch, setCityNameForSearch] = useState('')
  
//   useEffect(() => {
//     // setSearchedCity("London")
    
//     console.log("cityInUse: " + searchedCity)
//     // setSearchHandler();
//   }, [searchedCity])

//   const setSearchHandler = (e) => {
//     e.preventDefault()
//     // console.log("in funcccc", e)
//     console.log("in func", e.target[0].value)
//     setSearchedCity(e.target[0].value)
//     console.log("new city: " + searchedCity)
//   }

//   console.log("kkkkk+", searchedCity)

//   // const changeHandler = (e) => {
//   //   console.log(e.target.value)
//   // }

//   return (
    
//     <header className="App-header">
//           <nav className="nav-bar">
//             <img src={Logo} className="nav-logo" />
//             
//             {/* <div className="search">
//                 <form onSubmit={setSearchHandler}>
//                   <input type="search" placeholder="Search your city, Find your beer!!" className="search-input"></input>
//                   <button type="submit">SEARCH</button>    
//                 </form>
//             </div> */}
//             <div className="burger-menu">
//                 <div className="burger-line"></div>
//                 <div className="burger-line"></div>
//                 <div className="burger-line"></div>
//             </div>
//           </nav>
//       </header>
//   )
// }



//  export default Navi

