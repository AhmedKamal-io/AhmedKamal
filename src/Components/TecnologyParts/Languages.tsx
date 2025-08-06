import React from "react";
import Image from "next/image";
import { SiCss3, SiHtml5, SiJavascript, SiTypescript } from "react-icons/si";

const Languages = () => {
  return (
    <div className="relative h-[480px] w-[350px] rounded-2xl border-2 border-Whitey overflow-hidden transform hover:scale-105 duration-500 Bigshadow">
      {/* خلفية الصورة */}
      <Image
        src="/Image/dark-background1.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={60}
        loading="lazy"
        className="z-0"
      />

      {/* محتوى العنصر */}
      <div className="relative z-10 p-6 h-full w-full text-white">
        <h3 className="text-2xl border-b-2 border-Whitey my-[20px]">
          Programming languages
        </h3>
        <ul className="flex flex-col gap-1.5 text-2xl font-light">
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#F06529] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="hover:text-[#F06529] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-4xl transform hover:scale-110  text-4xl">
              <SiHtml5 />
            </span>
            HTML
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#264de4] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="hover:text-[#264de4] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiCss3 />
            </span>
            Css
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#F0DB4F] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="hover:text-[#F0DB4F] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiJavascript />
            </span>
            <span>JavaScript</span>
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#3178C6] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1 ">
            <span className="hover:text-[#3178C6] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiTypescript />
            </span>
            <span>TypeScript</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Languages;
