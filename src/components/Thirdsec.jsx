import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { FaLeaf, FaUsers, FaImage } from "react-icons/fa";
import { GiTempleDoor } from "react-icons/gi";

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
        return <div>🛕 Konten Budaya & Adat</div>;
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
      className="relative w-full min-h-screen text-white px-6 py-16 bg-[#151515] overflow-hidden"
    >
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,194,90,0.15)_20%,#151515_80%)]" />

      {/* Tab Menu */}
      <div className="relative z-10 flex justify-center">
        <div className="bg-[#1e1e1e]/50 backdrop-blur-md rounded-2xl border border-white/10 px-4 py-2 flex flex-wrap justify-center gap-4">
          {menu.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-sm md:text-base transition-all duration-200
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

      {/* Content Area */}
      <div className="relative z-10 mt-10 max-w-4xl mx-auto bg-white/5 p-6 rounded-xl border border-white/10">
        {renderContent()}
      </div>
    </section>
  );
});

export default Thirdsec;
