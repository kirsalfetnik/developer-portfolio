import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// import pages 
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// import components
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>

          <Route
          path="/"
          element={<Home />}
          />

          <Route
          path="/about"
          element={<About />}
          />

          <Route
          path="/blog"
          element={<Blog />}
          />

          <Route
          path="/contact"
          element={<Contact />}
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
