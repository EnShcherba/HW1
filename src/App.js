import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SocialButton} from './conponents/socialButton';
import {FacebookButton} from './conponents/facebookButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FacebookButton/>
          <SocialButton type="twitter"/>
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
