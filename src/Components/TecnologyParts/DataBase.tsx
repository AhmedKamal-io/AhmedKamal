import React from "react";
import { SiMongodb, SiMongoose, SiRedis } from "react-icons/si";

const DataBase = () => {
  return (
    <div className="bg-[url(/Image/dark-background1.png)] bg-cover bg-center p-6 rounded-2xl Bigshadow w-[350px] h-[480px] border-2 border-Whitey transform hover:scale-105 duration-500">
      <h3 className="text-2xl border-b-2 border-Whitey my-[20px] ">
        Data base & Cashing
      </h3>
      <ul className="flex flex-col gap-1.5 text-2xl font-light ">
        <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#4DB33D] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
          <span className="hover:text-[#4DB33D] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-4xl transform hover:scale-110  text-4xl">
            <SiMongodb />
          </span>
          MongoDB
        </li>
        <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-Whitey hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
          <span className="hover:text-Whitey transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
            <SiMongoose />
          </span>
          Mongoose ODM
        </li>
        <li className="flex items-center gap-2 bg-BlackyFade p-1 hover:shadow-[#7A0C00] hover:shadow-lg rounded-lg hover:bg-Blacky transition-all duration-500 my-1">
          <span className="hover:text-[#7A0C00] transition-all duration-500 bg-Blacky hover:bg-Blacky p-3 rounded-full transform hover:scale-110 text-4xl">
            <SiRedis />
          </span>
          <span>Redis Cashing</span>
        </li>
      </ul>
    </div>
  );
};

export default DataBase;
