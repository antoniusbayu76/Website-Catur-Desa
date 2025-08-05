import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import homelogo from "../assets/Homelogo2.png";
import tourism from "../assets/Tourisminfo2.png";

export default function NavbarDesa() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigateToHomeSection = (section) => {
    navigate(`/?target=${section}`);
    setSidebarOpen(false); // Optional: auto-close sidebar after click
  };

  const handleTourismLink = () => {
    navigate("/pariwisata");
  };

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-[#834D3D] text-white justify-center px-6 space-x-20 shadow-md border-b border-[#9C675A]">
        <button onClick={() => handleNavigateToHomeSection("first")} className="hover:scale-110 transition duration-300">
          <img src={homelogo} alt="Home Logo" className="w-40 h-20 object-contain hover:opacity-80" />
        </button>
        <button onClick={() => handleNavigateToHomeSection("second")} className="hover:text-[#FFC25A] transition">
          Wilayah
        </button>
        <button onClick={() => handleNavigateToHomeSection("third")} className="hover:text-[#FFC25A] transition">
          Fragmen
        </button>
        <button onClick={() => handleNavigateToHomeSection("fourth")} className="hover:text-[#FFC25A] transition">
          Desa Tamblingan
        </button>
        <button onClick={handleTourismLink} className="hover:scale-110 transition duration-300">
          <img src={tourism} alt="Tourism Information" className="w-40 h-20 object-contain hover:opacity-80" />
        </button>
      </nav>

      {/* MOBILE NAV TOGGLER */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 right-4 z-50 text-white text-2xl md:hidden"
      >
        <FaBars />
      </button>

      {/* MOBILE SIDEBAR NAV */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#9C675A] text-white transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40 md:hidden shadow-2xl border-l border-[#c5977a]`}
      >
        <div className="flex justify-between items-center px-4 pt-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-white text-lg">
            <FaTimes />
          </button>
        </div>

        <ul className="px-6 py-6 space-y-4 text-sm">
          <li onClick={() => handleNavigateToHomeSection("first")} className="cursor-pointer hover:text-[#FFC25A]">
            Tamblingan
          </li>
          <li onClick={() => handleNavigateToHomeSection("second")} className="cursor-pointer hover:text-[#FFC25A]">
            Wilayah
          </li>
          <li onClick={() => handleNavigateToHomeSection("third")} className="cursor-pointer hover:text-[#FFC25A]">
            Fragmen
          </li>
          <li onClick={() => handleNavigateToHomeSection("fourth")} className="cursor-pointer hover:text-[#FFC25A]">
            Desa Tamblingan
          </li>
          <li onClick={handleTourismLink} className="cursor-pointer hover:text-[#FFC25A]">
            Tourism Information
          </li>
        </ul>
      </div>
    </>
  );
}