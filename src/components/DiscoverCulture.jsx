import { useNavigate } from "react-router-dom";
import toy from "../assets/toy.png";
import history from "../assets/historybg.png";
import menjala from "../assets/sawah.png";
import ritual from "../assets/ritual.png";
import permainan from "../assets/permainan.png";
import melasti from "../assets/melasti.jpg";
import React from "react";

const discoverItems = [
  {
    title: "Sejarah MADT",
    desc: "Legenda Dalem Tamblingan dan Pembentukan Catur Desa",
    bg: history,
    path: "/history",
  },
  {
    title: "Nyegara Gunung",
    desc: "Konsepsi konservasi spiritual dan ekologis masyarakat Tamblingan",
    bg: toy,
    path: "/nyegara-gunung",
  },
  {
    title: "Menjala Ingatan...",
    desc: "Refleksi spiritual-ekologis masyarakat adat dalam menjaga hutan keramat",
    bg: menjala,
    path: "/menjala",
  },
  {
    title: "Adat dan Ritual",
    desc: "Masyarakat Adat Dalem Tamblingan adalah penganut Piagem Gama Tirta yang memuliakan air",
    bg: ritual,
    path: "/adatritual",
  },
  {
    title: "Karya Alilitan",
    desc: "Rangkaian ritual oleh masyarakat Adat Dalem Tamblingan",
    bg: melasti,
    path: "/alilitan",
  },
  {
    title: "Permainan Tradisional",
    desc: "Beberapa permainan tradisional yang membutuhkan keterampilan dan melatih motorik anak",
    bg: permainan,
    path: "/permainan",
  },
  {
    title: "Kesenian dan Hiburan",
    desc: "Krama Adat Dalem Tamblingan juga memiliki kesenian sakral ",
    bg: toy,
    path: "/kesenian",
  },
];

export default function DiscoverCulture() {
  const navigate = useNavigate();

  return (
    <div className="relative px-4 md:px-20 pt-12 pb-8 space-y-2 text-black bg-black/5">
      {/* Shadow Atas */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-10" />
      {/* Shadow Bawah */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />

      <h2 className="text-2xl font-bold relative z-20">Discover More Culture</h2>
      <p className="text-sm italic text-black/70 relative z-20">
        Temukan kisah dan filosofi dari berbagai aspek budaya Tamblingan
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
                <div className="text-xs opacity-80">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
