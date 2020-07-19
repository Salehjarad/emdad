import React from 'react';
import logo from './logo2.svg';
import logo2 from './logo_imdad2.svg';
import logo3 from './uc.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo2} className='App-logo-2' alt='Emdad' />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={300}/>
        <img src={logo3} alt="logo" width={300}/>
        <p>
          الموقع تحت الصيانة
        </p>
      </header>
      <footer>
        <p>Copyright © 2020 Emdad Co. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
