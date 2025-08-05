import React from "react";
import { FaCopyright, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" flex flex-nowrap flex-col justify-center items-center w-full pb-14 lg:pb-2.5 bg-Blacky">
      <div className="border-b-1 border-Whitey flex flex-col sm:flex-row   justify-between items-start p-4 border-t-1 w-full">
        {" "}
        <div className="text-sm text-Whitey  flex flex-col w-1/2 my-2">
          <a href="#home" className="hover:text-Secound m-2 ">
            Home
          </a>
          <a href="#about" className="hover:text-Secound m-2">
            About me
          </a>
          <a href="#services" className="hover:text-Secound m-2">
            Tecnologies
          </a>
          <a href="#contact" className="hover:text-Secound m-2">
            Contuct Us
          </a>
        </div>
        <div className="flex  w-1/2 flex-row  items-center text-2xl p-5 my-2 ">
          <a
            href="https://www.instagram.com/a7med_kamal_ak"
            target="_blank"
            className="mx-3 sm:mx-2"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/ahmed.kamsl.5"
            target="_blank"
            className="mx-3 sm:mx-2"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/AhmedKamal-io"
            target="_blank"
            className="mx-3 sm:mx-2"
          >
            <FaGithub />
          </a>
          <a href="" className="mx-3 sm:mx-2">
            <FaXTwitter />
          </a>
        </div>
        <div className="flex flex-nowrap w-1/2 my-2">
          <h5 className="text-sm ml-[30%]">
            Powerd by : <a href="">Ahmed Kamal</a>
          </h5>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap justify-center items-center w">
        <div className="flex justify-center items-center py-3.5 text-md text-Assend">
          <span>
            <FaCopyright />
          </span>
          <p>Copyright All are reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
