import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Firstsec from "../components/Firstsec";
import Secondsec from "../components/Secondsec";
import Thirdsec from "../components/Thirdsec";
import Fourthsec from "../components/Forthsec";

export default function Home() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const location = useLocation();

  const handleNavClick = (sectionKey, offset = 0) => {
    const isMobile = window.innerWidth < 768;
    const adjustedOffset = isMobile ? 80 : 0;

    switch (sectionKey) {
      case "third":
        thirdRef.current?.goToTab("culture");
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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const target = params.get("target");
    if (target) {
      handleNavClick(target);
    }
  }, [location]);

  return (
    <div className="w-full">
      <div ref={firstRef}>
        <Firstsec onNavClick={handleNavClick} />
      </div>
      <div ref={secondRef}>
        <Secondsec />
      </div>
      <Thirdsec ref={thirdRef} />
      <div ref={fourthRef}>
        <Fourthsec />
      </div>
    </div>
  );
}
