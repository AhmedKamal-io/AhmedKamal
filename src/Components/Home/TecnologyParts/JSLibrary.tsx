import React from "react";
import Image from "next/image";
import { SiFramer } from "react-icons/si";
import GSAPlogo from "./GSAPlogo";

const JSLibrary = () => {
  return (
    <div className="relative w-[320px] h-[480px] rounded-2xl border-2 border-Whitey overflow-hidden transform hover:scale-105 duration-500 Bigshadow">
      {/* الخلفية */}
      <Image
        src="/Image/dark-background1.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={60}
        loading="lazy"
        className="z-0"
      />

      {/* المحتوى */}
      <div className="relative z-10 p-6 h-full w-full text-white">
        <h3 className="text-2xl border-b-2 border-Whitey my-[20px] flex justify-center items-center gap-1">
          JavaScript Libraries
        </h3>
        <ul className="flex flex-col gap-1.5 text-2xl font-light">
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#87c602] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="text-[#87c602] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-4xl transform hover:scale-110 text-4xl">
              <GSAPlogo />
            </span>
            GSAP Animations
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#e809a8] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="text-[#e809a8] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiFramer />
            </span>
            Framer Motion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JSLibrary;
