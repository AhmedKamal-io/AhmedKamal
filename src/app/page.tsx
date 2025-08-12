import dynamic from "next/dynamic";
import Landing from "../Components/Home/Sections/Landing";
import NavBar from "@/Components/Home/Navigation/NavBar";
import NavBottom from "@/Components/Home/Navigation/NavBottom";
import About from "@/Components/Home/Sections/About";

const Services = dynamic(() => import("@/Components/Home/Sections/Services"));

const Technology = dynamic(
  () => import("@/Components/Home/Sections/Technology")
);
const Contact = dynamic(() => import("@/Components/Home/Sections/Contact"));
const SliderFreeLeft = dynamic(
  () => import("@/Components/Home/Marquee/SliderFreeLeft")
);
const SliderFreeRight = dynamic(
  () => import("@/Components/Home/Marquee/SliderFreeRight")
);
const Projects = dynamic(() => import("@/Components/Home/Sections/Projects"));

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
