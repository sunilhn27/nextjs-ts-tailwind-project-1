import React from "react";
import TestimonialImg from "@/app/asserts/testimonial.png";
import Image from "next/image";

export default function Testimonial(): JSX.Element {
  return (
    <section className="my-4 w-full h-[36rem]  py-6">
      <div className="flex justify-center items-center ">
        <div className="flex">
          <div className="flex flex-col ">
            <h1 className="font-bold text-4xl mb-4">What Users Say</h1>
            <h3 className="w-[27rem] text-gray-500 text-2xl">
              “Since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.”
            </h3>
            <p className="font-bold mt-6 text-[#234FEB]">Sunil Shetty</p>
            <p className="text-gray-500 mb-2">CEO, PageBulb</p>
            <h2 className="text-[#234FEB] font-bold uppercase">More Stories</h2>
          </div>
        </div>
        <div className="flex-shrink">
            <Image src={TestimonialImg} alt="pic" className="w-[47rem] h-[32rem]"/>
        </div>
      </div>
    </section>
  );
}
