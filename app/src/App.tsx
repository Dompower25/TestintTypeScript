import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

//типизируем
  
  type ValuteType = {
    Cur_ID: Number,
    Date: Number,
    Cur_Abbreviation: String,
    Cur_Scale: Number,
    Cur_Name: String,
    Cur_OfficialRate: Number,
  }

  










  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
