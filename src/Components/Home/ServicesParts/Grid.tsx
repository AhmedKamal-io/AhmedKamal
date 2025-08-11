import React from "react";
import Image from "next/image";
const Grid = () => {
  return (
    <div className="flex h-[70%] m-8 sm:m-12 md:m-16 lg:m-24 xl:z-30 w-[95%] md:w-[80%] items-center justify-center ">
      <div className="md:grid grid-cols-4 grid-rows-4 gap-3 h-[600px] w-full hidden Bigshadow ">
        {/* Large Screens */}
        <div className="row-span-3 transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound">
          <Image
            src="/Image/Landing.jpg"
            alt="Landing"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
          <h3 className="">Landing Pages</h3>
        </div>
        <div className="shadow-xl hover:shadow-Secound col-span-2 bg-Bluey rounded-2xl Bigshadow relative transition-all duration-500">
          <Image
            src="/Image/Performance.png"
            alt="Performance"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="col-span-2 row-span-2 col-start-2 shadow-xl transition-all duration-500 hover:shadow-Secound relative row-start-2 bg-Prime rounded-2xl Bigshadow">
          <Image
            src="/Image/E-Commers.jpg"
            alt="SaaS"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="rounded-2xl Bigshadow relative col-span-2 col-start-1 row-start-4 transition-all duration-500 bg-Whitey shadow-xl hover:shadow-Secound">
          <Image
            src="/Image/ServerData.jpg"
            alt="ServerData"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-2  Bigshadow relative col-start-4 row-start-1 bg-Secound rounded-2xl shadow-xl hover:shadow-Secound transition-all duration-500">
          <Image
            src="/Image/SaaS.jpg"
            alt="SaaS"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-2 col-start-4 Bigshadow row-start-3 bg-SecoundFade transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound">
          <Image
            src="/Image/SEO.jpg"
            alt="SEO"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="col-start-3 row-start-4 relative Bigshadow rounded-2xl overflow-hidden shadow-xl hover:shadow-Secound transition-all duration-500">
          <Image
            src="/Image/Debugging.jpg"
            alt="Debugging"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
      </div>

      {/* Medium Screens */}

      <div className="hidden sm:grid grid-cols-3 grid-rows-6 gap-2 Bigshadow md:hidden h-[600px] w-full">
        <div className="row-span-3 transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound">
          <Image
            src="/Image/Landing.jpg"
            alt="Landing"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-2 transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound">
          <Image
            src="/Image/Performance.png"
            alt="Performance"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-2 col-start-2 bg-Whitey row-start-3 transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound">
          <Image
            src="/Image/E-Commers.jpg"
            alt="SaaS"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-3 col-start-1 row-start-4 bg-Whitey transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound">
          <Image
            src="/Image/ServerData.jpg"
            alt="ServerData"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-3 col-start-3 row-start-1 bg-Whitey transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound">
          <Image
            src="/Image/SaaS.jpg"
            alt="SaaS"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-3 col-start-3 row-start-4 bg-Whitey transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound">
          <Image
            src="/Image/SEO.jpg"
            alt="SEO"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-2 col-start-2 row-start-5 bg-Whitey transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound">
          <Image
            src="/Image/Debugging.jpg"
            alt="Debugging"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
      </div>

      {/* Small Screens */}

      <div className="grid grid-cols-2 grid-rows-6 gap-3 sm:hidden h-[600px] w-full">
        <div className="transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound border-1 border-Assend">
          <Image
            src="/Image/Debugging.jpg"
            alt="Debugging"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-2 transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound border-1 border-Assend">
          <Image
            src="/Image/Performance.png"
            alt="Performance"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-2 transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound border-1 border-Assend">
          <Image
            src="/Image/E-Commers.jpg"
            alt="SaaS"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-2 col-start-2 row-start-3 transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound border-1 border-Assend">
          <Image
            src="/Image/Landing.jpg"
            alt="Landing"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="row-span-2 row-start-4 transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound border-1 border-Assend">
          <Image
            src="/Image/SaaS.jpg"
            alt="SaaS"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="col-start-2 row-start-5 transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound border-1 border-Assend">
          <Image
            src="/Image/SEO.jpg"
            alt="SEO"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
        <div className="col-span-2 row-start-6 transition-all duration-500 rounded-2xl relative shadow-xl hover:shadow-Secound border-1 border-Assend">
          <Image
            src="/Image/ServerData.jpg"
            alt="ServerData"
            objectFit="full"
            loading="lazy"
            layout="fill"
            className="object-cover rounded-2xl absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
