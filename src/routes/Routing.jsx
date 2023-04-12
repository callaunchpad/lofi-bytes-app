import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Upload from '@/pages/Home/Upload';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<Upload />} />
      <Route path="/home/*" element={<Home />} />
    </Routes>
  );
}

export default Routing;
