import background from "../assets/background.png";
import logo from "../assets/logo1.png";
import homelogo from "../assets/Homelogo.png";
import tourism from "../assets/Tourisminfo.png";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Firstsec({ onNavClick }) {
  const menuRef = useRef();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollTo = (key) => {
    const offset = window.innerWidth < 768 ? 100 : 0;
    if (onNavClick) {
      onNavClick(key, offset);
      setSidebarOpen(false); // Tutup sidebar setelah klik
    }
  };

  const handleTourismLink = () => {
    window.open("https://www.dummywebsite.com", "_blank");
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Shadow gradient for top and bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#000000]/70 to-transparent via-transparent"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#000000]/70 to-transparent via-transparent"></div>

      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* DESKTOP MENU (text and images) */}
      <nav className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 z-10 space-x-28 text-base font-medium justify-center tracking-wide w-[90%]">
        {/* Gambar di desktop */}
        <button onClick={() => scrollTo("first")} className="hover:scale-110 transition duration-300">
          <img src={homelogo} alt="Home Logo" className="w-40 h-40 object-contain hover:opacity-80" />
        </button>
        <button onClick={() => scrollTo("second")} className="hover:text-[#FFC25A] transition">
          Wilayah
        </button>
        <button onClick={() => scrollTo("third")} className="hover:text-[#FFC25A] transition">
          Fragmen
        </button>
        <button onClick={() => scrollTo("fourth")} className="hover:text-[#FFC25A] transition">
          Desa Tamblingan
        </button>
        <button onClick={handleTourismLink} className="hover:scale-110 transition duration-300">
          <img src={tourism} alt="Tourism Information" className="w-40 h-40 object-contain hover:opacity-80" />
        </button>
      </nav>

      {/* MOBILE SIDEBAR BUTTON */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="absolute top-4 right-4 z-20 text-white text-2xl md:hidden"
      >
        <FaBars />
      </button>

      {/* MOBILE SIDEBAR */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-[#151515] text-white transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-30 md:hidden shadow-2xl`}
      >
        {/* Header with Close */}
        <div className="flex justify-between items-center px-4 pt-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-white text-lg">
            <FaTimes />
          </button>
        </div>

        <ul className="px-6 py-6 space-y-4 text-sm">
          {/* Teks di mobile */}
          <li onClick={() => scrollTo("first")} className="cursor-pointer hover:text-[#FFC25A]">
            Tamblingan
          </li>
          <li onClick={() => scrollTo("second")} className="cursor-pointer hover:text-[#FFC25A]">
            Wilayah
          </li>
          <li onClick={() => scrollTo("third")} className="cursor-pointer hover:text-[#FFC25A]">
            Fragmen
          </li>
          <li onClick={() => scrollTo("fourth")} className="cursor-pointer hover:text-[#FFC25A]">
            Desa Tamblingan
          </li>
          <li onClick={handleTourismLink} className="cursor-pointer hover:text-[#FFC25A]">
            Tourism Information
          </li>
        </ul>
      </div>

      {/* TITLE + LOGO DI KIRI BAWAH */}
      <div className="absolute bottom-0 left-0 z-10 p-6 sm:p-8 md:p-16 text-white max-w-3xl w-full">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 object-contain"
          />
          <div className="leading-tight text-left">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">Catur Desa</h1>
            <p className="text-sm italic sm:text-base md:text-xl lg:text-2xl">
              Masyarakat Adat Dalem Tamblingan
            </p>
              <p className="text-xs sm:text-sm text-white/70 italic mt-1">
              Gobleg &ndash; Munduk &ndash; Gesing &ndash; Umejero
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}