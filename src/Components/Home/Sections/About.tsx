import AboutClient from "../AboutParts/AboutClient";

export default function About() {
  return (
    <section
      id="about"
      className="bg-Blacky text-white py-20 px-4 md:px-20 relative flex flex-col justify-center items-center pt-23 lg:pt-28"
    >
      <h2
        className="text-5xl md:text-6xl absolute top-[64px] md:top-[55px] 
        lg:top-[73px]  text-center font-bold z-1 border-b-1 border-Whitey GlueSecound"
      >
        About <span className="strokePrime">Me</span>
      </h2>

      {/* استدعاء Client Component هنا */}
      <AboutClient />
    </section>
  );
}
