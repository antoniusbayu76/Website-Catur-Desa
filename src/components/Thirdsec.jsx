import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { FaLeaf, FaUsers, FaImage } from "react-icons/fa";
import { GiTempleDoor } from "react-icons/gi";
import CultureContent from "../components/Culture";

const menu = [
  { key: "culture", label: "Culture", icon: <GiTempleDoor /> },
  { key: "environment", label: "Environment", icon: <FaLeaf /> },
  { key: "social", label: "Social Infrastructure", icon: <FaUsers /> },
  { key: "glimpse", label: "Glimpse of MADT", icon: <FaImage /> },
];

const Thirdsec = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState("culture");
  const sectionRef = useRef();

  useImperativeHandle(ref, () => ({
    goToTab(tabKey) {
      setActiveTab(tabKey);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  const renderContent = () => {
    switch (activeTab) {
      case "culture":
        return <CultureContent />;
      case "environment":
        return <div>🌿 Konten Lingkungan & Konservasi</div>;
      case "social":
        return <div>👥 Konten Sosial & Infrastruktur</div>;
      case "glimpse":
        return <div>📸 Galeri / Dokumentasi MADT</div>;
      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen text-white px-4 sm:px-6 py-12 bg-[#151515] overflow-hidden"
    >
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse,rgba(255,194,90,0.20)_30%,#151515_60%)]" />

      {/* Tab Menu - Centered in desktop, scrollable in mobile */}
      <div className="relative z-10">
        <div className="flex justify-center">
          <div className="flex overflow-x-auto sm:overflow-visible">
            <div className="inline-flex items-center bg-[#1e1e1e]/50 backdrop-blur-md rounded-2xl border border-white/10 px-2 py-2 gap-2 sm:gap-4 mx-auto min-w-max sm:min-w-0">
              {menu.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap rounded-2xl text-sm sm:text-base transition-all duration-200
                    ${
                      activeTab === item.key
                        ? "bg-[#FFC25A]/60 text-black font-semibold shadow-sm"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 mt-8 sm:mt-10 max-w-4xl mx-auto bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 text-sm sm:text-base">
        {renderContent()}
      </div>
    </section>
  );
});

export default Thirdsec;
