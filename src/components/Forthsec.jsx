import { useNavigate } from "react-router-dom";
import bg from "../assets/toy.png";

const desaList = [
  { name: "Munduk", desc: "Desa Munduk memiliki kawasan adat lokal yang sangat indah...", link: "/munduk" },
  { name: "Gobleg", desc: "Desa Gobleg memiliki kawasan adat lokal yang sangat indah...", link: "/gobleg" },
  { name: "Gesing", desc: "Desa Gesing memiliki kawasan adat lokal yang sangat indah...", link: "/gesing" },
  { name: "Umajero", desc: "Desa Umajero memiliki kawasan adat lokal yang sangat indah...", link: "/umajero" },
];

export default function Fourthsec() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen px-6 py-16 text-white bg-[#151515]">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#151515] via-[#FFC25A1A] to-[#151515]" />

      {/* Card List */}
      <div className="relative md:pt-20 z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {desaList.map((desa, index) => (
          <div
            key={index}
            onClick={() => navigate(desa.link)}
            className="cursor-pointer relative rounded-xl overflow-hidden h-40 md:h-44 p-4 bg-cover bg-center shadow-md transition hover:scale-[1.02] hover:ring-2 hover:ring-[#FFC25A]/50"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "300%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-[#151515]/60" />
            <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white text-left">
              <h3 className="text-2xl md:text-3xl font-bold">{desa.name}</h3>
              <p className="text-sm italic opacity-80">{desa.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 text-center text-xs text-white/50">
        Developed by <br />
        <span className="font-medium tracking-wide">KKN MEKAR BANJAR UGM 2025</span>
      </footer>
    </section>
  );
}
