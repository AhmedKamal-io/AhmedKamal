// import HeroText from "../HeroText";
import HeroText from "../HeroParts/HeroText";
import RippleGrid2 from "../Outside/RippleGrid2";

const Landing = () => {
  return (
    <div id="home" className="relative">
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <RippleGrid2 />
      </div>

      <div
        style={{ position: "relative", zIndex: 1 }}
        className="flex items-center justify-center h-screen"
      >
        <HeroText />
      </div>
    </div>
  );
};

export default Landing;
