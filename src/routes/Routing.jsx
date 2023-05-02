import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
<<<<<<< HEAD
import FileUpload from '@/pages/Home/FileUpload';
=======
>>>>>>> ad4c7104e191db3cdf977c93f459effceeedb340

function Routing() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="*" element={<FileUpload />} />
      <Route path="/home/*" element={<Home />} />
=======
      <Route path="*" element={<Home />} />
>>>>>>> ad4c7104e191db3cdf977c93f459effceeedb340
    </Routes>
  );
}

export default Routing;
