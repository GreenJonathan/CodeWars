import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {

      fetch('http://localhost:4000/ping')
      .then(res => res.text())
      .then(data => console.log('Backend says:', data))
      .catch(err => console.error('Error contacting backend:', err));
  }, []);

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
    </div>
  );
}

export default App;
