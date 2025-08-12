import dynamic from "next/dynamic";
import Landing from "../Components/Home/Sections/Landing";
import NavBar from "@/Components/Home/Navigation/NavBar";
import NavBottom from "@/Components/Home/Navigation/NavBottom";
import About from "@/Components/Home/Sections/About";
import SliderFreeLeft from "@/Components/Home/Marquee/SliderFreeLeft";
import Services from "@/Components/Home/Sections/Services";
import Technology from "@/Components/Home/Sections/Technology";
import SliderFreeRight from "@/Components/Home/Marquee/SliderFreeRight";
import Projects from "./Projects/page";
import Contact from "@/Components/Home/Sections/Contact";

const Footer = dynamic(() => import("@/Components/Home/Sections/Footer"));

const page = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      <div>
        <NavBottom />
      </div>

      <Landing />
      <SliderFreeLeft />
      <About />
      <Services />
      <Technology />
      <Projects />
      <SliderFreeRight />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
