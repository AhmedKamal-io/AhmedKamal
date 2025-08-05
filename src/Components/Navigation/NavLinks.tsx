import React from "react";

const NavLinks = () => {
  return (
    <div className="hidden lg:flex lg:gap-12 font-semibold text-lg  ">
      <a
        href="#about"
        className="hover:text-Secound transition-all duration-500 after:block after:w-[0%] after:h-0.5 after:bg-Secound hover:after:w-[100%] after:duration-500 after:transition-all after:rounded-b-full Bigshadow "
      >
        About
      </a>

      <a
        href="#services"
        className="hover:text-Secound transition-all duration-500 after:block after:w-[0%] after:h-0.5 after:bg-Secound hover:after:w-[100%] after:duration-500 after:transition-all after:rounded-b-full Bigshadow "
      >
        Services
      </a>
      <a
        href="#projects"
        className="hover:text-Secound transition-all duration-500 after:block after:w-[0%] after:h-0.5 after:bg-Secound hover:after:w-[100%] after:duration-500 after:transition-all after:rounded-b-full Bigshadow "
      >
        Projects
      </a>
      <a
        href="#contact"
        className="transition-all duration-500 hover:shadow-md hover:shadow-Assend  bg-Assend text-Whitey px-2 rounded-full outline-3 outline-Secound"
      >
        Contact Me
      </a>
    </div>
  );
};

export default NavLinks;
