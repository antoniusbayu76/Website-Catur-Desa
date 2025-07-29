import { useNavigate } from "react-router-dom";
import background from "../assets/forthsecbg.png";
import munduk from "../assets/munduk.png";
import gobleg from "../assets/gobleg.png";
import gesing from "../assets/gesing.png";
import umajero from "../assets/umajero.png";

const desaList = [
  { name: "Gobleg", image: gobleg, link: "/gobleg" },
  { name: "Munduk", image: munduk, link: "/munduk" },
  { name: "Gesing", image: gesing, link: "/gesing" },
  { name: "Umajero", image: umajero, link: "/umajero" },
];

export default function Fourthsec() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full min-h-screen px-4 sm:px-6 py-12 sm:py-16 text-black bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto md:mx-20 text-left mb-10 px-2 sm:px-6">
        <p className="text-xs sm:text-sm uppercase tracking-wide text-black/80 mb-2">
          Jelajahi Lebih Dalam Tentang Catur Desa
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
          Empat Desa, Satu Ikatan Sakral Menjaga Keseimbangan <br className="hidden sm:block" />
          Alam & Spiritualitas Tamblingan.
        </h2>
      </div>

      {/* Card Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-0">
        {desaList.map((desa, index) => (
          <div
          key={index}
          onClick={() => navigate(desa.link)}
          className="cursor-pointer relative rounded-xl overflow-hidden h-40 sm:h-44 md:h-48 group"
        >
          {/* Zoomable background layer */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundSize: window.innerWidth < 640 ? "150%" : "110%", backgroundImage: `url(${desa.image})` }}
          />

          {/* Overlay for dark effect */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Text content */}
          <div className="relative z-20 h-full flex items-end p-3 sm:p-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              {desa.name}
            </h3>
          </div>
        </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-12 text-center text-xs text-black/80 px-2">
        Developed by <br />
        <span className="font-medium tracking-wide">KKN MEKAR BANJAR UGM 2025</span>
      </footer>
    </section>
  );
}
