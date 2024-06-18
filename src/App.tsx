import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game1 from './pages/TicTac';
// Import other game components similarly

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game1" element={<Game1 />} />
      {/* Add routes for other games similarly */}
    </Routes>
  );
}

export default App;
