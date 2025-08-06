import { useNavigate } from "react-router-dom";
import React from "react";
import enviart1 from "../assets/enviart1.png";
import enviart2 from "../assets/enviart2.png";
import enviart3 from "../assets/enviart3.png";
import enviart4 from "../assets/enviart4.png";

const discoverItems = [
  {
    title: "Wilayah Adat Dalem Tamblingan",
    desc: "Penelusuran sejarah, batas spasial, dan fungsi wilayah Adat Dalem Tamblingan sejak kuna hingga sekarang.",
    bg: enviart1,
    path: "/wilayah-adat",
  },
  {
    title: "Alas Mertajati",
    desc: "Kawasan hutan yang membentang dari utara ke selatan di bagian timur wilayah Adat Dalem Tamblingan.",
    bg: enviart1,
    path: "/mertajati",
  },
  {
    title: "Sumber Daya Alam",
    desc: "Sumber daya alam di wilayah Adat Dalem Tamblingan.",
    bg: enviart1,
    path: "/sda",
  },
  {
    title: "Tempat Suci",
    desc: "Tempat suci Adat Dalem Tamblingan di Catur Desa tersebar dalam tiga kawasan utama",
    bg: enviart1,
    path: "/tempatsuci",
  },
  {
    title: "Mata Air dan Pemeliharaan",
    desc: "Selain Danau Tamblingan, kawasan Adat Dalem Tamblingan (ADT) memiliki banyak sumber air dan air terjun",
    bg: enviart1,
    path: "/mataair",
  },
  {
    title: "Telusur Tanaman Obat Alas Mertajati",
    desc: "Keberagaman tanaman Obat menjadi salah satu kekayaan alam yang patut diperhatikan",
    bg: enviart1,
    path: "/tanamanobat",
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

      <h2 className="text-2xl font-bold relative z-20">Discover More Environment</h2>
      <p className="text-sm italic text-black/70 relative z-20">
        Jelajahi artikel dan wawasan mengenai lingkungan di wilayah Adat Dalem Tamblingan
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
