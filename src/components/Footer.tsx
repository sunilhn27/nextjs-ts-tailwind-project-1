import React from "react";
import BgImg from "@/app/asserts/svgexport-5.png";
import SvgImg from "@/app/asserts/cta-bg.svg";
import PlayStore from "@/app/asserts/svgexport-2.png";
import AppleStore from "@/app/asserts/svgexport-3.png";
import Image from "next/image";
import WhiteLogo from "@/app/asserts/white_logo.png";

export default function Footer(): JSX.Element {
  const sectionStyle: React.CSSProperties = {
    backgroundImage: `url(${BgImg.src})`, // URL for the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "white",
    // Add other styles as needed
  };

  const logoStyle: React.CSSProperties = {
    backgroundImage: `url(${SvgImg.src})`, // URL for the image on top
    // width: '1100px', // Adjust the width as needed
    // height: '100px', // Adjust the height as needed
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    top: "-40px", // Adjust the top position as needed
    left: "50%",
    transform: "translateX(-50%)",
  };

  return (
    <section
      className="w-full h-[60rem] flex flex-col justify-center items-center relative border-2 border-red-600 mt-32 text-red-700"
      style={sectionStyle}
    >
      <div className="flex justify-center items-center mt-48">
        <div className="grid grid-cols-5">
          <div className="flex flex-col border-2 border-red-500">
            <Image src={WhiteLogo} alt="whitelogo" className="mb-4" />
            <h3>Get the future you want</h3>
            <p className="w-[21rem]">
              We offer great advice, tools and guides to help you plan your best
              future for free.
            </p>
          </div>
          <div className="border-2 border-red-500">
            <Image src={WhiteLogo} alt="whitelogo" />
          </div>
          <div className="border-2 border-red-500">
            <Image src={WhiteLogo} alt="whitelogo" />
          </div>
          <div className="border-2 border-red-500">
            <Image src={WhiteLogo} alt="whitelogo" />
          </div>
          <div className="border-2 border-red-500">
            <Image src={WhiteLogo} alt="whitelogo" />
          </div>
        </div>
      </div>
      <div style={logoStyle} className="w-[70rem] h-[30rem] text-white top-3">
        <div className="flex justify-center items-center my-auto py-16">
          <div className="flex flex-col space-y-2 text-center">
            <h3 className="text-2xl text-gray-300">Save Your Money</h3>
            <h1 className="text-5xl font-bold">Get Our Apps</h1>
            <p className="w-[30rem] text-gray-300">
              With impressive interest rates, an app, tools & guides, to plan,
              save & invest, Appify is the smartest way.
            </p>
            <div className="flex justify-center items-center pt-6 space-x-3">
              <Image src={AppleStore} alt="playstore" />
              <Image src={PlayStore} alt="applestore" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
