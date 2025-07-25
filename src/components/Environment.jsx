import { useState } from "react";
import background from "../assets/envibg.png";
import petadummy from "../assets/petadummy.png";
import enviart1 from "../assets/enviart1.png";
import enviart2 from "../assets/enviart2.png";
import enviart3 from "../assets/enviart3.png";
import enviart4 from "../assets/enviart4.png";

const mapImages = {
  "Peta Tutupan Lahan": petadummy,
  "Peta Kelerengan": petadummy,
  "Peta daerah aliran sungai": petadummy,
  "Peta Sumber mata air": petadummy,
  "Peta tingkat bahaya erosi": petadummy,
  "Map pack bahaya erosi": petadummy,
  "Peta Alas Mertajati": petadummy,
  "Peta pola ruang": petadummy,
  "Peta Infra Sosial Budaya": petadummy,
  "Peta Jasa Ekosistem": petadummy,
};

const mapOptions = Object.keys(mapImages);

export default function Environment() {
  const [activeTab, setActiveTab] = useState("peta");
  const [selectedMap, setSelectedMap] = useState(mapOptions[0]);
  const [fade, setFade] = useState(true);

  const handleTabSwitch = (tab) => {
    setFade(false);
    setTimeout(() => {
      setActiveTab(tab);
      setFade(true);
    }, 200);
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center text-white px-4 py-10 sm:px-6 sm:py-8 relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#151515] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#151515] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#151515] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#151515] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto bg-[#1f1f1f]/10 p-4 sm:p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-inner relative z-10">
        {/* Tab Header */}
        <div className="relative w-full sm:w-fit mx-auto mb-4">
          <div className="bg-[#2b2b2b] rounded-xl p-1 flex relative w-full sm:w-[300px]">
            {/* Sliding background */}
            <div
              className={`absolute top-1 bottom-1 w-1/2 rounded-lg bg-[#FFC25A]/60 transition-all duration-300 ${
                activeTab === "peta" ? "left-1" : "left-1/2"
              }`}
            />

            {/* Peta Button */}
            <button
              onClick={() => handleTabSwitch("peta")}
              className={`relative z-10 w-1/2 px-2 sm:px-4 py-2 flex items-center justify-center gap-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === "peta" ? "text-black" : "text-white/80"
              }`}
            >
              🗺️ <span>Peta</span>
            </button>

            {/* Artikel Button */}
            <button
              onClick={() => handleTabSwitch("artikel")}
              className={`relative z-10 w-1/2 px-2 sm:px-4 py-2 flex items-center justify-center gap-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === "artikel" ? "text-black" : "text-white/80"
              }`}
            >
              📄 <span>Artikel</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
          {activeTab === "peta" && (
            <div className="space-y-4 sm:space-y-6">
              {/* Map Selector */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between bg-white/10 text-white px-4 py-3 rounded-md text-sm shadow-sm font-semibold tracking-wide">
                <div>Jenis Peta</div>
                <div className="flex items-center gap-2">
                  <div className="relative w-full sm:w-fit">
                    <select
                      value={selectedMap}
                      onChange={(e) => setSelectedMap(e.target.value)}
                      className="appearance-none w-full bg-black/80 text-white px-4 py-2 pr-10 rounded-md text-sm font-medium shadow-md focus:ring-2 focus:ring-white focus:outline-none transition duration-300 cursor-pointer"
                    >
                      {mapOptions.map((map) => (
                        <option key={map} value={map}>
                          {map}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 text-sm">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Display */}
              <div className="bg-white rounded-xl overflow-hidden border border-gray-300 shadow-lg transition duration-300">
                <div className="bg-[#2e2e2e] text-white px-4 py-2 flex justify-between text-xs sm:text-sm font-medium">
                  <span>{selectedMap}</span>
                  <span>Last Update: --/--/----</span>
                </div>
                <img
                  src={mapImages[selectedMap]}
                  alt={selectedMap}
                  className="w-full h-auto object-cover transition duration-500 ease-in-out"
                />
              </div>
            </div>
          )}

        {activeTab === "artikel" && (
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Main Article Card */}
            <div className="sm:col-span-2 relative rounded-xl overflow-hidden shadow-md group">
            <img
                src={enviart1}
                alt="Lingkungan Sebagai Sumber Kehidupan"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-bold mb-1">Lingkungan Sebagai Sumber Kehidupan</h3>
                <p className="text-sm sm:text-base mb-2 text-white/90">
                Di tengah kabut danau yang sunyi, hidup aturan tak tertulis yang mengikat manusia, alam, dan leluhur dalam satu harmoni.
                </p>
                <span className="text-xs sm:text-sm text-white/70">Written By: ABC (17/07/2025)</span>
            </div>
            </div>

            {/* Side Article Cards */}
            <div className="flex flex-col gap-4">
            {/* Card 2 */}
            <div className="relative rounded-xl overflow-hidden shadow-md group h-[31%] flex-1">
                <img
                src={enviart2}
                alt="Daftar Tanaman Obat"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 flex flex-col justify-end">
                <h4 className="text-base sm:text-lg font-semibold leading-tight">
                    Daftar Tanaman Obat <br className="sm:hidden" /> Alas Mertajati
                </h4>
                <span className="text-xs text-white/70 mt-1">Written By: ABC (17/07/2025)</span>
                </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-xl overflow-hidden shadow-md group h-[31%] flex-1">
                <img
                src={enviart3}
                alt="Kekayaan Hayati Lokal"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 flex flex-col justify-end">
                <h4 className="text-base sm:text-lg font-semibold leading-tight">
                    Kekayaan Hayati Lokal
                </h4>
                <span className="text-xs text-white/70 mt-1">Written By: ABC (17/07/2025)</span>
                </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-xl overflow-hidden shadow-md group h-[31%] flex-1">
                <img
                src={enviart4}
                alt="Artikel Tambahan"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 flex flex-col justify-end">
                <h4 className="text-base sm:text-lg font-semibold leading-tight">
                    Artikel Tambahan
                </h4>
                <span className="text-xs text-white/70 mt-1">Written By: ABC (17/07/2025)</span>
                </div>
            </div>
            </div>
        </div>
        )}

        </div>
      </div>
    </div>
  );
}
