import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const companies = [
  { src: "/Image/Companies/Airbnb.png", alt: "Airbnb", bg: "bg-Blacky" },
  { src: "/Image/Companies/Shopify.png", alt: "Shopify", bg: "bg-Whitey" },
  { src: "/Image/Companies/Netflex.png", alt: "Netflex", bg: "bg-Blacky" },

  { src: "/Image/Companies/OpenAi.png", alt: "OpenAi", bg: "bg-AssendFade" },
  { src: "/Image/Companies/Paypal.png", alt: "Paypal", bg: "bg-Blacky" },
  { src: "/Image/Companies/Reddit.png", alt: "Reddit", bg: "bg-Blacky" },

  { src: "/Image/Companies/Nike.png", alt: "Nike", bg: "bg-Whitey" },
  { src: "/Image/Companies/Spotify.png", alt: "Spotify", bg: "bg-Blacky" },
];
const CompanySlider2 = () => {
  return (
    <div className="">
      <Marquee
        pauseOnHover
        speed={20}
        autoFill
        direction="right"
        className="Masked"
      >
        {companies.map((companies, index) => (
          <Image
            key={index}
            src={companies.src}
            alt={companies.alt}
            width={120}
            height={80}
            loading="lazy"
            className={`grayscale-100 hover:grayscale-0 transition-all duration-600 Bigshadow p-1 ${companies.bg} rounded-2xl mx-1`}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default CompanySlider2;
