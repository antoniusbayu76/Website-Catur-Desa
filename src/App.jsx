import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Munduk from './pages/Munduk'
import Gobleg from './pages/Gobleg'
import Gesing from './pages/Gesing'
import Umajero from './pages/Umajero'
import History from './pages/History'
import AturanAdat from "./pages/AturanAdat"
import NyegaraGunung from "./pages/NyegaraGunung"
import WilayahAdat from './pages/WilayahAdat'
import MenjalaIngatan from "./pages/Menjala";
import CultureContent from './components/Culture';
import Gangsing from './pages/Gangsing';
import Alilitan from './pages/Alilitan';
import Mertajati from './pages/Mertajati';
import SDA from './pages/SDA';
import Tempatsuci from './pages/TempatSuci';
import Mataair from './pages/Mataair';
import Tanamanobat from './pages/Tanamanobat';
import Pemerintahan from './pages/Pemerintahan';
import Fasilitas from './pages/Fasilitas';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/munduk" element={<Munduk />} />
        <Route path="/gobleg" element={<Gobleg />} />
        <Route path="/gesing" element={<Gesing />} />
        <Route path="/umajero" element={<Umajero />} />
        <Route path="/history" element={<History />} />
        <Route path="/aturan-adat" element={<AturanAdat />} />
        <Route path="/wilayah-adat" element={<WilayahAdat />} />
        <Route path="/nyegara-gunung" element={<NyegaraGunung />} />
        <Route path="/menjala" element={<MenjalaIngatan />} />
        <Route path="/gangsing" element={<Gangsing />} />
        <Route path="/alilitan" element={<Alilitan />} />
        <Route path="/mertajati" element={<Mertajati />} />
        <Route path="/sda" element={<SDA />} />
        <Route path="/tempatsuci" element={<Tempatsuci />} />
        <Route path="/mataair" element={<Mataair />} />
        <Route path="/tanamanobat" element={<Tanamanobat />} />
        <Route path="/pemerintahan" element={<Pemerintahan />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        {/* ✅ Route tambahan */}
        <Route path="/culture" element={<CultureContent />} />
      </Routes>
    </Router>
  )
}

export default App

