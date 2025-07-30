import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import background from "../assets/secondsecbg.png";
import map from "../assets/petabali.png";
import map2 from "../assets/peta4desa.png";

export default function Secondsec() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="w-full bg-cover bg-center text-white px-6 py-16 md:px-20 relative overflow-hidden min-h-[24rem]"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Slide Container */}
      <div className="relative w-full h-full min-h-[24rem]">
        {/* Slide 1 */}
        {index === 0 && (
          <div className="absolute inset-0 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 px-0">
            <div className="md:flex-1 max-w-xl space-y-4 z-10">
              <h2 className="text-2xl md:text-4xl italic font-bold leading-tight">
                Adat Dalem Tamblingan
              </h2>
              <p className="text-sm md:text-lg leading-relaxed text-white/90">
                Masyarakat Adat Tamblingan adalah masyarakat yang tumbuh dari
                akar tradisi Bali Kuno yang terletak di Tamblingan. Mereka
                menjunjung tinggi nilai spiritual, solidaritas, dan hidup
                selaras dengan alam dan leluhur.
              </p>
            </div>
            <div className="md:flex-1 flex justify-center z-10">
              <img
                src={map}
                alt="Peta Tanah Tamblingan"
                className="max-w-xs md:max-w-sm w-full"
              />
            </div>
          </div>
        )}

        {/* Slide 2 */}
        {index === 1 && (
          <div className="absolute inset-0 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 px-0">
            <div className="md:flex-1 max-w-xl space-y-4 z-10">
              <h2 className="text-2xl md:text-4xl italic font-bold leading-tight">
                Empat Catur Desa
              </h2>
              <p className="text-sm md:text-lg leading-relaxed text-white/90">
                Secara wilayah, Tanah Adat Dalem Tamblingan mencakup 4 desa:{" "}
                <strong>Gobleg, Munduk, Umajero, dan Gesing</strong>. Keempatnya
                berbagi nilai, tradisi, dan sistem sosial yang tumbuh dari akar
                sejarah yang sama.
              </p>
            </div>
            <div className="md:flex-1 flex justify-center z-10">
              <img
                src={map2}
                alt="Peta 4 Desa"
                className="max-w-xs md:max-w-sm w-full "
              />
            </div>
          </div>
        )}

      </div>

      {/* Arrow Navigation — always visible in bottom-left */}
      <div className="absolute bottom-10 left-6 md:left-20 z-20 flex gap-3">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Progress Indicator Bar */}
      <div className="absolute bottom-18 left-6 md:left-21 z-20 w-60">
        <div className="w-full h-[2px] bg-white/30 relative overflow-hidden rounded">
          <div
            className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-in-out"
            style={{ width: `${(index + 1) / 2 * 100}%` }}
          />
        </div>
        <div className="text-xs text-white/70 pt-1 text-right">
          {String(index + 1).padStart(2, "0")} / 02
        </div>
      </div>
    </section>
  );
}
