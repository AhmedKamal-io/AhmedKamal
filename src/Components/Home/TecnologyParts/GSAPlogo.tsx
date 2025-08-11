import React from "react";
import Image from "next/image";

const GSAPlogo = () => {
  return (
    <div>
      <Image
        src="/SVG/GSAP.svg"
        alt="GSAP Logo"
        className=" rounded-full shadow-lg transition-transform transform hover:scale-110"
        width={35}
        height={35}
      />
    </div>
  );
};

export default GSAPlogo;
