import Image from "next/image";
import React from "react";
import HeroImg from "@/app/asserts/hero-image.png";
import SvgBg from "@/app/asserts/svgexport-1.png";

export default function Hero() {
  return (
    <section className="my-12">
      <div className="flex md:flex-row justify-evenly items-center border-2">
        <div className="flex">
          <div className="flex flex-col">
            <h4 className="text-gray-500 text-2xl">Appify helps to</h4>
            <h1 className="text-[2rem]">Get Your Money</h1>
            <h1 className="font-bold text-[2rem]">Working</h1>
            <p className="md:w-[34rem] 2xl:w-[34rem] text-gray-500">
              With impressive interest rates, an app, tools & guides, to plan,
              save & invest, Appify is the smartest way.
            </p>
          </div>
        </div>
        <div className=" mb-12 md:mb-0">
          <Image alt="pic" src={HeroImg} className="" />
        </div>
      </div>
    </section>
  );
}
