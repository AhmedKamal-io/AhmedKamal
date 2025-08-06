import React from "react";
import Languages from "../TecnologyParts/Languages";
import FrontEnd from "../TecnologyParts/FrontEnd";
import BackEnd from "../TecnologyParts/BackEnd";
import DataBase from "../TecnologyParts/DataBase";
import JSLibrary from "../TecnologyParts/JSLibrary";
import CoomingSoon from "../TecnologyParts/CoomingSoon";

const Technology = () => {
  return (
    <section
      id="services"
      className="bg-Prime  p-2 pt-14 pb-6 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold text-center py-4  text-Whitey sm:text-4xl sm:max-w-sm md:text-5xl md:max-w-lg mx-auto">
        <span className="strokeSecound text-[110%]">Tech</span>nology &{" "}
        <span className="strokeSecound text-[110%]">Skills</span>
      </h2>
      <p className="text-center text-lg my-4">
        All Technologies i learned & use in projects
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 w-full  p-2">
        {/* Languges */}
        <Languages />
        <FrontEnd />
        <BackEnd />
        <DataBase />
        <JSLibrary />
        <CoomingSoon />
      </div>
    </section>
  );
};

export default Technology;
