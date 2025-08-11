import React from "react";
import Landing from "../Components/Home/Sections/Landing";
import NavBar from "@/Components/Home/Navigation/NavBar";
import NavBottom from "@/Components/Home/Navigation/NavBottom";
import About from "@/Components/Home/Sections/About";
import Technology from "@/Components/Home/Sections/Technology";
import Footer from "@/Components/Home/Sections/Footer";
import Services from "@/Components/Home/Sections/Services";
import Contact from "@/Components/Home/Sections/Contact";
import SliderFreeLeft from "@/Components/Home/Marquee/SliderFreeLeft";
import SliderFreeRight from "@/Components/Home/Marquee/SliderFreeRight";
import Projects from "@/Components/Home/Sections/Projects";

// ✅ أخبر Next.js إن الصفحة static 100%
export const dynamic = "force-static";

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
