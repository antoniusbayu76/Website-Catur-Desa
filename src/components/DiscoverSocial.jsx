import { useNavigate } from "react-router-dom";
import React from "react";
import card1 from "../assets/socialart1.png";
import card2 from "../assets/socialart2.png";

const discoverItems = [
  {
    title: "Pegangan Hukum Adat Sejak Seribu Tahun Lalu",
    bg: card1,
    path: "/aturan-adat",
  },
  {
    title: "Sistem Pemerintahan Adat Dalem Tamblingan",
    bg: card2,
    path: "/pemerintahan",
  },
  {
    title: "Simbol Penyatuan Catur Desa",
    bg: card1,
    path: "/penyatuan",
  },
  {
    title: "Fasilitas Umum dan Fasilitas Sosial",
    bg: card2,
    path: "/fasilitas",
  },
  
];

export default function DiscoverEnvi() {
  const navigate = useNavigate();

  return (
    <div className="relative px-4 md:px-20 pt-12 pb-8 space-y-2 text-black bg-black/5">
      {/* Shadow Atas */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-10" />
      {/* Shadow Bawah */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />

      <h2 className="text-2xl font-bold relative z-20">Discover More Social and Infrastucture</h2>
      <p className="text-sm italic text-black/70 relative z-20">
        Jelajahi artikel dan wawasan mengenai lingkungan sosial dan infrastruktur di wilayah Adat Dalem Tamblingan
      </p>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/30 hover:scrollbar-thumb-white/60 relative z-20">
        <div className="flex gap-4 w-max pb-6">
          {discoverItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="relative w-48 md:w-56 h-32 md:h-56 rounded-xl overflow-hidden shrink-0 cursor-pointer group"
            >
              {/* Background with Zoom on Hover */}
              <div
                className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-500 scale-100 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.bg})`, backgroundSize: "150%" }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10" />
              {/* Text Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-3 text-white">
                <div className="text-base font-bold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
