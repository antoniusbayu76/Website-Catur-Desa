import { useState } from "react";
import background from "../assets/socialbg.png";
import card1 from "../assets/socialart1.png";
import card2 from "../assets/socialart2.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function SocialContent() {
  const navigate = useNavigate();
  const articles = [
    {
      title: "Pegangan Hukum Adat Sejak Seribu Tahun Lalu",
      image: card1,
      link: "/aturan-adat", // ✅ tambahkan properti link
    },
    {
      title: "Mengenal Dualitas Kepemimpinan di Tamblingan Bali",
      image: card2,
    },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white px-4 sm:px-6 py-3 md:py-4 relative overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#151515] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#151515] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#151515] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#151515] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8">
        {/* Text Section */}
        <div className="flex-1 space-y-3">
          <p className="uppercase text-2xl md:text-4xl text-white/80">Soroti</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Jejak Sosial <br /> di Plosok Desa
          </h2>
          <p className="text-xl sm:text-base text-white/80 max-w-md">
            Kenali struktur sosial yang tumbuh dari tradisi, solidaritas, dan semangat gotong royong.
          </p>

          {/* Page indicator */}
          <div className="space-y-2 md:pt-32 w-full max-w-xs">
            {/* Progress Line */}
            <div className="w-full h-[2px] bg-white/30 relative overflow-hidden rounded">
                <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
                style={{ width: `${((index + 1) / articles.length) * 100}%` }}
                />
            </div>

             {/* Indicator & Arrows */}
            <div className="flex items-center justify-between text-sm text-white/80 pt-1">
                <span>
                {String(index + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
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
            </div>
            </div>

        </div>

        {/* Slider Section */}
        <div className="flex-1 relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 60}%)`,
              gap: "1rem",
            }}
          >
            {articles.map((item, idx) => (
              <div
                key={idx}
                className="w-[60%] min-w-[60%] md:h-[28rem] h-[24rem] rounded-2xl bg-no-repeat bg-center relative shrink-0 group overflow-hidden"
                onClick={() => item.link && navigate(item.link)}
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})`, backgroundSize: window.innerWidth < 640 ? "150%" : "110%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
                />
                <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                <div className="absolute bottom-0 p-4 z-10 text-white rounded-b-2xl">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
