import React from "react";
import Image from "next/image";
import { SiNestjs, SiPostgresql, SiPrisma, SiThreedotjs } from "react-icons/si";

const ComingSoon = () => {
  return (
    <div className="relative w-[350px] h-[480px] rounded-2xl border-2 border-Whitey overflow-hidden transform hover:scale-105 duration-500 Bigshadow">
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

      {/* محتوى العنصر */}
      <div className="relative z-10 p-6 h-full w-full text-white">
        <h3 className="text-2xl border-b-2 border-Whitey my-[20px]">
          Coming Soon ...
        </h3>
        <ul className="flex flex-col gap-1.5 text-2xl font-light">
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#2d5b82] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="hover:text-[#2d5b82] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-4xl transform hover:scale-110  text-4xl">
              <SiPostgresql />
            </span>
            PostgreSQL Database
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-Whitey hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="hover:text-Whitey transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiThreedotjs />
            </span>
            Three Js
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#da204b] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="hover:text-[#da204b] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiNestjs />
            </span>
            Nest js
          </li>
          <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#01344b] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
            <span className="hover:text-[#01344b] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
              <SiPrisma />
            </span>
            Prisma ORM
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComingSoon;
