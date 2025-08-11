import React from "react";
import Grid from "../ServicesParts/Grid";

const Services = () => {
  return (
    <section
      className=" bg-AssendFade text-Whitey flex flex-col justify-center items-center pt-11"
      id="services"
    >
      <h2 className=" strokePrime text-5xl my-6 border-b-Whitey border-b-2 ">
        Services
      </h2>
      <p>i provied large amount of scalabliety and reailablty</p>
      <Grid />
    </section>
  );
};

export default Services;
