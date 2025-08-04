import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { FaLeaf, FaUsers, FaImage, FaGlobe, FaGlobeAsia } from "react-icons/fa";
import { GiTempleDoor } from "react-icons/gi";
import CultureContent from "../components/Culture";
import SocialContent from "../components/Social";
import Glimpse from "../components/Glimpse";
import EnvironmentContent from "../components/Environment";

const menu = [
  { key: "culture", label: "Culture", icon: <GiTempleDoor /> },
  { key: "environment", label: "Environment", icon: <FaGlobeAsia /> },
  { key: "social", label: "Social Infrastructure", icon: <FaUsers /> },
  { key: "glimpse", label: "Glimpse of MADT", icon: <FaImage /> },
];

const Thirdsec = forwardRef((props, ref) => {
  const [activeTab, setActiveTab] = useState("culture");
  const [fade, setFade] = useState(true); // for transition
  const sectionRef = useRef();

  // Expose method for parent (Home.jsx)
  useImperativeHandle(ref, () => ({
    goToTab(tabKey) {
      setFade(false);
      setTimeout(() => {
        setActiveTab(tabKey);
        setFade(true);
      }, 200);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  const handleTabChange = (tabKey) => {
    setFade(false);
    setTimeout(() => {
      setActiveTab(tabKey);
      setFade(true);
    }, 200);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "culture":
        return <CultureContent />;
      case "environment":
        return <EnvironmentContent />;
      case "social":
        return <SocialContent />;
      case "glimpse":
        return <Glimpse />;
      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen text-white px-4 sm:px-6 py-12 bg-[#151515] overflow-hidden"
    >
      <div className="absolute inset-0 z-0" />

      {/* Tab Menu */}
      <div className="relative z-10">
        <div className="flex justify-center">
          <div className="flex overflow-x-auto sm:overflow-visible">
            <div className="inline-flex items-center bg-[#1e1e1e]/50 backdrop-blur-md rounded-2xl border border-white/10 px-2 py-2 gap-2 sm:gap-4 mx-auto min-w-max sm:min-w-0">
              {menu.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleTabChange(item.key)}
                  className={`flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap rounded-2xl text-sm sm:text-base transition-all duration-200
                    ${activeTab === item.key
                      ? "bg-[#FFC25A]/60 text-black font-semibold shadow-sm"
                      : "text-white/80 hover:bg-white/10"}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content with Fade Effect */}
      <div
        className={`relative z-10 mt-8 sm:mt-10 w-full px-0 text-sm sm:text-base transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {renderContent()}
      </div>
    </section>
  );
});

export default Thirdsec;