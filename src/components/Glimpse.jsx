import { useState } from "react";
import background from "../assets/glimpsebg.png";
import img1 from "../assets/karyadalu.jpg";
import img2 from "../assets/melasti.jpg";
import img3 from "../assets/pengerakih.jpg";
import img4 from "../assets/ngendihang.jpg";
import img5 from "../assets/sasihkalima.jpg";

const images = [
  { id: 1, src: img1, alt: "Dokumentasi 1" },
  { id: 2, src: img2, alt: "Dokumentasi 2" },
  { id: 3, src: img3, alt: "Dokumentasi 3" },
  { id: 4, src: img4, alt: "Dokumentasi 4" },
  { id: 5, src: img5, alt: "Dokumentasi 5" },
];

const Glimpse = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="relative w-full">
        <div
              className="w-full min-h-screen bg-cover bg-center text-white px-4 sm:px-6 py-3 md:py-4 relative overflow-hidden"
              style={{ backgroundImage: `url(${background})` }}
        >
        
{/* JUDUL */}
  <div className="text-white px-2 sm:px-4 pt-6 sm:pt-8 max-w-3xl">
    <p className="mx-12 text-sm sm:text-2xl text-white/80">Potret Budaya</p>
    <h2 className="mx-12 text-2xl sm:text-6xl font-bold leading-snug sm:leading-tight">
      Rangkaian Momen <br /> Penuh Makna!
    </h2>
  </div>

      {/* Horizontal Scroll Gallery */}
      <div className="pt-20 overflow-x-auto whitespace-nowrap flex gap-4 px-4 py-4">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt}
            className="h-40 sm:h-56 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setFullscreenImage(img.src)}
          />
        ))}
      </div>

        </div>
        {/* Gradient overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#151515] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#151515] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#151515] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#151515] to-transparent" />
      </div>

      {/* Fullscreen Viewer with Background */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain drop-shadow-2xl"
          />
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Glimpse;
