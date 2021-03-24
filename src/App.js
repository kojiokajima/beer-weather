import './App.css';
import React,{useState} from 'react'
import Hourly from './component/Hourly';
import Navi from './component/Navi'



function App() {

  // const [city, setCity] = useState('')
  // const [cityNameForSearch, setCityNameForSearch] = useState('')
  
  return (
    <div className="App">
      <Navi />
      <Hourly />
    </div>
  );
}

export default App;
