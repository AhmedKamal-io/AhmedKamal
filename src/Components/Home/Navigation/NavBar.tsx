import React from "react";

import NavLinks from "./NavLinks";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex  justify-between items-center px-9 py-[10px]  lg:mt-3.5 border-WhiteyFade border-b-2 lg:rounded-4xl lg:mx-6 lg:bg-AssendFade shadow-Prime shadow-md backdrop-blur-[5px] Bigshadow  lg:border-1  lg:outline-3 lg:outline-SecoundFade z-2000">
      {/* Logo Icon */}
      <div>
        <a href="#home">
          <Image
            src="/Image/personal-logo-png.png"
            alt="Logo Of Ahmed Kamal"
            width={50}
            height={50}
            className="focus:outline-none"
          />
        </a>
      </div>
      {/* Nav Links */}
      <NavLinks />

      {/* download cv botton */}
      <div className="text-lg bg-BlackyFade rounded-full px-2">V 1.4.9</div>
    </nav>
  );
};

export default NavBar;
