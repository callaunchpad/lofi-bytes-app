import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import Demo from '@/pages/Demo/Demo';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/demo/*" element={<Demo />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/register/*" element={<Register />} />
    </Routes>
  );
}

export default Routing;
