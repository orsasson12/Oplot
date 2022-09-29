import React from 'react';
import './App.css';
import Home from './pages/Home'
import Service from './pages/Service';
import SealingService from './pages/SealingService';
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/sealingservice' element={<SealingService />} />
      </Routes>
    </div>
  );
}

export default App;
