import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';


function Routing() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routing;
