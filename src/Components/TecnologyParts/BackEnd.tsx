import React from "react";
import { SiExpress, SiNodedotjs } from "react-icons/si";

const BackEnd = () => {
  return (
    <div className="bg-[url(/Image/dark-background1.png)] bg-cover bg-center p-6 rounded-2xl Bigshadow w-[350px] h-[480px] border-2 border-Whitey transform hover:scale-105 duration-500">
      <h3 className="text-2xl border-b-2 border-Whitey my-[20px] ">
        Back-End Technologies
      </h3>
      <ul className="flex flex-col gap-1.5 text-2xl font-light ">
        <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#3c873a] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
          <span className="hover:text-[#3c873a] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-4xl transform hover:scale-110  text-4xl">
            <SiNodedotjs />
          </span>
          Node js
        </li>
        <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-Whitey hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
          <span className="hover:text-Whitey transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
            <SiExpress />
          </span>
          Express js
        </li>
      </ul>
    </div>
  );
};

export default BackEnd;
