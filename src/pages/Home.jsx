import React, { useRef } from "react";
import Firstsec from "../components/Firstsec";
import Secondsec from "../components/Secondsec";
import Thirdsec from "../components/Thirdsec";
import Fourthsec from "../components/Forthsec";

export default function Home() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);   // ref langsung ke komponen Thirdsec
  const fourthRef = useRef(null);

  const handleNavClick = (sectionKey, offset = 0) => {
  const isMobile = window.innerWidth < 768;
  const adjustedOffset = isMobile ? 80 : 0;

  switch (sectionKey) {
    case "third":
      thirdRef.current?.goToTab("culture"); // scroll sudah dibungkus di dalam Thirdsec
      return;

    case "first":
      if (firstRef.current) {
        const y = firstRef.current.getBoundingClientRect().top + window.scrollY + adjustedOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return;

    case "second":
      if (secondRef.current) {
        const y = secondRef.current.getBoundingClientRect().top + window.scrollY + adjustedOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return;

    case "fourth":
      if (fourthRef.current) {
        const y = fourthRef.current.getBoundingClientRect().top + window.scrollY + adjustedOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return;

    default:
      return;
  }
};


  return (
    <div className="w-full">
      <div ref={firstRef}>
        <Firstsec onNavClick={handleNavClick} />
      </div>

      <div ref={secondRef}>
        <Secondsec />
      </div>

      {/* ref langsung ke komponen Thirdsec */}
      <Thirdsec ref={thirdRef} />

      <div ref={fourthRef}>
        <Fourthsec />
      </div>
    </div>
  );
}
