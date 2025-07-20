import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Munduk from './pages/Munduk';
import Gobleg from './pages/Gobleg';
import Gesing from './pages/Gesing';
import Umajero from './pages/Umajero';

// ✅ Import tambahan
import History from './pages/History';
import CultureContent from './components/Culture';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/munduk" element={<Munduk />} />
        <Route path="/gobleg" element={<Gobleg />} />
        <Route path="/gesing" element={<Gesing />} />
        <Route path="/umajero" element={<Umajero />} />
        {/* ✅ Route tambahan */}
        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<CultureContent />} />
      </Routes>
    </Router>
  );
}

export default App;
