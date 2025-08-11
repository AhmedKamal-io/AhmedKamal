import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="bg-WhiteyFade  relative ">
      <Image
        src="/Image/WorldMap.png"
        alt="WorldMap"
        objectFit="full"
        loading="lazy"
        layout="fill"
        className="object-cover absolute"
      />

      <div className="flex item-center flex-col justify-center z-100 w-[95%] md:w-[80%] lg:w-[60%] mx-auto">
        <h2 className="text-Blacky text-4xl z-1000 w-fit mx-auto my-6 border-b-2 border-Blacky pt-7 GlueSecound">
          Contact Me{" "}
        </h2>
        <form className="bg-WhiteyFade  backdrop-blur-[5px] rounded-2xl outline-1 outline-Blacky border-Secound border-2 text-Whitey p-4 m-4 text-md">
          <h2 className="text-xl text-Blacky w-fit mx-auto my-3.5">
            Send Me a Message
          </h2>
          <p></p>
          <div className="m-4">
            <label htmlFor="">
              <h3 className="text-Blacky">Full Name</h3>
            </label>
            <input
              type="text"
              className="block rounded-lg border-1 border-Blacky focus:shadow-lg focus:shadow-Secound w-full  p-2 bg-BlackyFade  my-1 transition-all duration-500 "
              required
              placeholder="Ahmed Kamal"
            />
          </div>
          <div className="m-4">
            <label htmlFor="">
              <h3 className="text-Blacky">Email</h3>
            </label>
            <input
              type="email"
              required
              placeholder="Example@Shit.com"
              className="block rounded-lg border-1 border-Blacky focus:shadow-lg focus:shadow-Secound w-full  p-2 bg-BlackyFade my-1 transition-all duration-500"
            />
          </div>
          <div className="m-4">
            <label htmlFor="">
              <h3 className="text-Blacky">Phone Number</h3>
            </label>
            <input
              type="number"
              placeholder="01110101010"
              className="block  rounded-lg border-1 border-Blacky focus:shadow-lg focus:shadow-Secound w-full  p-2 bg-BlackyFade my-1 transition-all duration-500"
            />
          </div>
          <div className="m-4">
            <label htmlFor="" className="">
              <h3 className="text-Blacky">Message</h3>
            </label>
            <textarea
              required
              className="resize-none block rounded-lg border-1 border-Blacky focus:shadow-lg focus:shadow-Secound w-full  p-2 bg-BlackyFade my-1 transition-all duration-500 h-36"
            />
          </div>
          <button
            type="submit"
            className="bg-Secound text-Whitey rounded-2xl px-8 py-2.5 w-fit mx-8  "
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
