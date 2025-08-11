import React from "react";

const NavBottom = () => {
  return (
    <div className="fixed bottom-0 w-full z-50 lg:hidden flex justify-center Bigshadow">
      <div className="flex  justify-evenly items-center px-1 sm:px-6 py-[10px] md:py-[8px]  max-w-lg w-[92%] sm:w-[90%] rounded-2xl bg-AssendFade shadow-Prime shadow-2xl backdrop-blur-[5px] text-shadow-Blacky text-white  sm:gap-3 mb-3 sm:mb-4 border-[0.25px] text-[15px] sm:text-md  font-semibold outline-3 outline-SecoundFade border-WhiteyFade z-2000 ">
        {[
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Projects", href: "#projects" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative  font-medium text-md sm:text-[15px]  transition-all duration-300 hover:text-Secound group md:text-lg"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-Secound transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
        ))}

        <a
          href="#contact"
          className=" transition-all duration-500 hover:shadow-md hover:shadow-Assend  bg-Assend text-Whitey px-2 rounded-full  outline-3 outline-Secound sm:text-md md:text-lg "
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBottom;
