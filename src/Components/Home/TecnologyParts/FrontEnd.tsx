import React from "react";
import Image from "next/image";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";

const FrontEnd = () => {
  return (
    <div className="relative w-[320px] h-[480px] rounded-2xl border-2 border-Whitey overflow-hidden transform hover:scale-105 duration-500 Bigshadow">
      {/* خلفية الصورة */}
      <Image
        src="/Image/dark-background1.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={60}
        className="z-0"
        loading="lazy"
      />

      {/* المحتوى */}
      <div className="relative z-10 p-6 h-full w-full text-white">
        <h3 className="text-2xl border-b-2 border-Whitey my-[20px] flex justify-center items-center gap-1">
          Front-End Technologies <FaComputer className="" />
        </h3>
        <ul className="flex flex-col gap-1.5 text-2xl font-light">
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#0081A3] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="text-[#0081A3] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-4xl transform hover:scale-110  text-4xl">
              <SiReact />
            </span>
            React
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-Whitey hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="text-Whitey transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiNextdotjs />
            </span>
            Next js
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#38B2AC] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="text-[#38B2AC] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiTailwindcss />
            </span>
            <span>Tailwind css</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrontEnd;
