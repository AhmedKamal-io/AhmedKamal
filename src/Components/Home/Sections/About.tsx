import dynamic from "next/dynamic";
import AboutSecound from "../AboutParts/AboutSecound";
import AboutSocial from "../AboutParts/AboutSocial";
import Introduce from "../AboutParts/Introduce";

const Threads = dynamic(() => import("../Outside/Threads"));

// components/About.tsx
export default function About() {
  return (
    <section
      id="about"
      className="bg-Blacky text-white py-20 px-4 md:px-20 relative flex flex-col justify-center items-center pt-23 lg:pt-28"
    >
      <h2
        className="text-5xl md:text-6xl absolute top-[64px] md:top-[55px] 
      lg:top-[73px]  text-center font-bold z-1 border-b-1 border-Whitey GlueSecound  "
      >
        About <span className="strokePrime">Me</span>
      </h2>
      <Introduce />
      <AboutSecound />
      <AboutSocial />
      <div className="realtive w-full h-[150px] lg:h-[220px] absolute top-[95%] sm:top-[92.5%] md:top-[93%] lg:top-[89%] ">
        <Threads
          amplitude={2}
          distance={0.1}
          enableMouseInteraction={true}
          color={[1, 1, 1]}
        />
      </div>
    </section>
  );
}
