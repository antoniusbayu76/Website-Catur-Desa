import background from "../assets/background.png";
import logo from "../assets/logo1.png";

export default function Firstsec() {
  return (
    <div
      className="relative w-screen min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Konten di pojok kiri bawah */}
      <div className="absolute bottom-12 left-6 sm:left-12 z-10">
        <div className="flex items-start space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 object-contain"
          />
          <div className="leading-tight text-left">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
              Catur Desa
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl">
              Masyarakat Adat Dalem Tamblingan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
