import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import FileUpload from '@/pages/Home/FileUpload';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<FileUpload />} />
      <Route path="/home/*" element={<Home />} />
    </Routes>
  );
}

export default Routing;
