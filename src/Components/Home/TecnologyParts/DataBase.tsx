import React from "react";
import Image from "next/image";
import { SiMongodb, SiMongoose, SiRedis } from "react-icons/si";

const DataBase = () => {
  return (
    <div className="relative w-[320px] h-[480px] rounded-2xl border-2 border-Whitey overflow-hidden transform hover:scale-105 duration-500 Bigshadow">
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
          Data base & Caching
        </h3>
        <ul className="flex flex-col gap-1.5 text-2xl font-light">
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#4DB33D] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="text-[#4DB33D] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-4xl transform hover:scale-110  text-4xl">
              <SiMongodb />
            </span>
            MongoDB
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-Whitey hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="text-Whitey transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiMongoose />
            </span>
            Mongoose ODM
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#7A0C00] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="text-[#7A0C00] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiRedis />
            </span>
            <span>Redis Caching</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataBase;
