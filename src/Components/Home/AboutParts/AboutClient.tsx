"use client";

import dynamic from "next/dynamic";
import AboutSecound from "../AboutParts/AboutSecound";
import Introduce from "../AboutParts/Introduce";
import AboutSocial from "../AboutParts/AboutSocial";

// dynamic import مع ssr:false للمكون الثقيل Threads
const Threads = dynamic(() => import("../Outside/Threads"), { ssr: false });

export default function AboutClient() {
  return (
    <>
      <Introduce />
      <AboutSecound />
      <AboutSocial />
      <div className=" w-full h-[150px] lg:h-[220px] absolute top-[95%] sm:top-[92.5%] md:top-[93%] lg:top-[89%]">
        <Threads
          amplitude={2}
          distance={0.1}
          enableMouseInteraction={true}
          color={[1, 1, 1]}
        />
      </div>
    </>
  );
}
