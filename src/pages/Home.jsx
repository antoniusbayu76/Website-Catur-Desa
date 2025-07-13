import { useRef } from "react";
import Menu from "../components/Menu";
import Firstsec from "../components/Firstsec";
import Secondsec from "../components/Secondsec";
import Thirdsec from "../components/Thirdsec";

export default function Home() {
  const thirdRef = useRef();

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <Menu onSelectMenu={(tabKey) => thirdRef.current?.goToTab(tabKey)} />
      <Firstsec />
      <Secondsec />
      <Thirdsec ref={thirdRef} />
    </div>
  );
}
