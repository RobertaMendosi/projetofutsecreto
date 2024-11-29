import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Player from './pages/Player';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/player/:id" element={<Player />} />
  </Routes>
);

export default AppRoutes;
