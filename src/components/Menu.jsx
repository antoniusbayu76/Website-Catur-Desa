import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";

const menuItems = [
  { label: "Culture", key: "culture" },
  { label: "Environment", key: "environment" },
  { label: "Sosial Infrastructure", key: "social" },
  { label: "Glimpse of MADT", key: "glimpse" },
];

export default function Sidebar({ onSelectMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (key) => {
    onSelectMenu?.(key); // panggil Thirdsec dari prop
    setIsOpen(false); // tutup sidebar
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-4 left-4 z-40 text-white text-3xl hover:scale-110 transition"
      >
        ☰
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#151515] text-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
          <h2 className="text-lg font-bold tracking-wide uppercase">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-red-400 transition"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="px-6 py-6 space-y-4 text-sm font-medium">
          {menuItems.map((item) => (
            <li
              key={item.key}
              onClick={() => handleClick(item.key)}
              className="p-3 rounded-md hover:bg-[#2a2a2a] hover:text-[#FFC25A] transition cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
