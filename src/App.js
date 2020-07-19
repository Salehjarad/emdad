import React from 'react';
import logo from './logo2.svg';
import logo2 from './logo_BW.svg';
import logo3 from './uc.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='links-container'>
        <div className='logo-container'>
          <img src={logo2} className='App-logo-2' alt='Emdad' />
          <div className='emdad-logo-txt'>
            <p className='emdad-txt'>إمداد</p>
            <p className='emdad-sub-txt'>للطاقة المتجددة</p>
          </div>
        </div>
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={120}/>
        <img src={logo3} alt="logo" width={300}/>
        <p className='info-nc'>
          الموقع تحت الصيانة
        </p>
      </div>
      <footer style={{ display: 'flex', height: '6vh', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ fontWeight: 600 }}>Copyright © 2020 Emdad Co. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
