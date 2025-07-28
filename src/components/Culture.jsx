import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import vid1 from "../assets/vid1.png";
import vid2 from "../assets/background.png";
import toy from "../assets/toy.png";

const sliderItems = [
  {
    image: vid1,
    title: "The Legend of Tamblingan",
    desc: "Sebuah kisah tentang persatuan alam, leluhur, dan manusia.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    image: vid2,
    title: "Tamblingan Cultural Roots",
    desc: "Menelusuri akar budaya desa yang diwariskan turun-temurun.",
    url: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
  },
];

const topics = [
  { title: "History", desc: "Legenda Dalem Tamblingan dan Pembentukan Catur Desa", bg: toy },
  { title: "Menjala Ingatan...", desc: "Refleksi spiritual-ekologis masyarakat adat dalam menjaga hutan keramat", bg: toy },
  { title: "Nyegara Gunung", desc: "Konsepsi konservasi spiritual dan ekologis masyarakat Tamblingan", bg: toy },
  { title: "TOY", desc: "Permainan dianggap warisan budaya adat Tamblingan", bg: toy },
  { title: "Other", desc: "Permainan dianggap warisan budaya adat Tamblingan", bg: toy },
];

export default function CultureContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  const handleChange = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setFade(true);
    }, 200);
  };

  const handlePrev = () => {
    handleChange(activeIndex === 0 ? sliderItems.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    handleChange(activeIndex === sliderItems.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="space-y-6 w-full">
      {/* Hero slider */}
      <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden bg-cover bg-center flex items-center px-6 md:px-12">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-cover bg-center ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${sliderItems[activeIndex].image})` }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#151515] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#151515] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#151515] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#151515] to-transparent" />
        </div>

        <div className="relative px-3 md:px-7 z-10 text-white max-w-lg">
          <h2 className="text-lg md:text-4xl font-bold mb-2">
            {sliderItems[activeIndex].title}
          </h2>
          <p className="text-sm md:text-base opacity-90 mb-4">
            {sliderItems[activeIndex].desc}
          </p>
          <a
            href={sliderItems[activeIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-800 hover:bg-[#ffb129] text-white font-semibold px-4 py-2 rounded"
          >
            WATCH NOW
          </a>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-10"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-10"
        >
          <FaChevronRight />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {sliderItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleChange(idx)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === idx
                  ? "bg-white"
                  : "border border-white bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info teks */}
      <div className="px-4 md:px-20 text-left">
        <p className="text-sm italic md:text-base mb-1 text-white">
          CERITA DARI TAMBLINGAN
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Ketika Alam, Leluhur, dan Manusia Bersatu
        </h3>
      </div>

      {/* Horizontal Scrollable Content */}
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent hover:scrollbar-thumb-white/60">
        <div className="flex gap-4 pb-4 w-max px-4 md:px-6">
          {topics.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item.title === "History") navigate("/history");
                else if (item.title === "Nyegara Gunung") navigate("/nyegara-gunung");
                else if (item.title === "Menjala Ingatan...") navigate("/menjala");

              }}
              className="relative w-48 md:w-56 h-32 md:h-56 rounded-xl overflow-hidden bg-no-repeat bg-center shrink-0 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{
                backgroundSize:
                  window.innerWidth < 640 ? "150%" : "150%",
                backgroundImage: `url(${item.bg})`,
              }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 h-full flex flex-col justify-end p-3 text-white">
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
