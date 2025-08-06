import React from "react";
import Landing from "../Components/Sections/Landing";
import NavBar from "@/Components/Navigation/NavBar";
import NavBottom from "@/Components/Navigation/NavBottom";
import About from "@/Components/Sections/About";
import Technology from "@/Components/Sections/Technology";
import Projects from "@/Components/Sections/Projects";
import Footer from "@/Components/Sections/Footer";

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
      <About />
      <Technology />
      <Projects />
      <Footer />
    </div>
  );
};

export default page;
