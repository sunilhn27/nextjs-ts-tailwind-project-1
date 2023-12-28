import Image from "next/image";
import React from "react";
import HeroImg from "@/app/asserts/hero-image.png";
import PlayStore from "@/app/asserts/svgexport-2.png";
import AppleStore from "@/app/asserts/svgexport-3.png";
import Client1 from "@/app/asserts/client-1.png";
import Client2 from "@/app/asserts/client-2.png";
import Client3 from "@/app/asserts/client-3.png";
import Client4 from "@/app/asserts/client-4.png";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

export default function Hero() {
  return (
    <section className="my-12 bg-[#FAFAFA]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col ">
          <h3 className="text-3xl">Appify helps to</h3>
          <h1 className="text-5xl font-thin">Get Your Money</h1>
          <h1 className="text-4xl font-bold">Working</h1>
          <p className="w-[34rem] text-gray-500">
            With impressive interest rates, an app, tools & guides, to plan,
            save & invest, Appify is the smartest way.
          </p>
          <div className="flex mt-3 space-x-3">
            <Image src={AppleStore} alt="playstore" />
            <Image src={PlayStore} alt="applestore" />
          </div>
        </div>

        <div className="flex">
          <Image src={HeroImg} alt="pic" />
        </div>
      </div>
      <section className="flex justify-center items-center bg-white w-[83rem] border-2 h-[12rem] mx-auto rounded-2xl shadow-2xl">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl text-gray-700">Trusted by</h1>
          <div className="flex w-[70rem] justify-between items-center mt-4 ">
            < SlArrowLeft />
            <div className="flex space-x-3">
            <Image src={Client1} alt="client1" />
            <Image src={Client2} alt="client2" />
            <Image src={Client3} alt="client3" />
            <Image src={Client4} alt="client4" />
            </div>
            <SlArrowRight />
          </div>
        </div>
      </section>
    </section>
  );
}
