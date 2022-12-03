import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// import pages 

// import components
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
