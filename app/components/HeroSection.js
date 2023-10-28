import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center my-4 mx-20 sm:mx-10 text-center sm:text-left">
          <h1 className="main-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800">
              Hello, I'm{" "}
              </span>
            Leo
          </h1>
          <p className="main-para text-base sm:text-lg lg:text-xl my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div>
            <button className="rounded-full w-full sm:w-fit bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 hover:from-gray-400 hover:to-gray-400 text-white lg:text-xl px-6 py-4 lg:py-5 lg:px-10">Hire Me</button>
            <button className="rounded-full w-full sm:w-fit bg-transparent hover:bg-gray-400 border border-white text-white text-base lg:text-xl px-6 py-4 lg:py-5 lg:px-10 sm:ml-2 lg:sm:ml-4 mt-4">Resume</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-[#181818] mt-4">
          <Image
            src="/images/hero-img.png"
            alt="hero image"
            width={300}
            height={300}
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
