import logo from './logo.svg';
import './App.css';
import Test from './Test'
import React from "react";
import CurrentWeather from "./CurrentWeather"
import "./App.css";



// 24e5f02416d4df14ee3c7e8125885faa
const AppOld = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CurrentWeather />
      <Test />
    </div>
    // <>
    // </>
  );
};

export default AppOld;
