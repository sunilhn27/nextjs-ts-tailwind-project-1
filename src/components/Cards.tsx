import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "@/app/asserts/invention.svg";

interface CardProps {
  image: StaticImageData;
  title: string;
  para: string;
}

const Card: React.FC<CardProps> = ({ image, title, para }) => {
  return (
    <div className="w-[26rem] h-[22rem] border-2 rounded-lg shadow-xl">
      <div className="flex flex-col py-8 mx-6">
        <div className="justify-center items-center space-y-2">
          <Image src={image} alt="Icon" className="h-[6rem] w-[6rem]" />
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="w-[19rem] h-[6rem] text-gray-400">{para}</p>
          <Link className="text-[#A361FF] font-bold " href={"/"}>
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Cards(): JSX.Element {
  return (
    <section className="mt-12">
      <div className="flex justify-center items-center text-center">
        <h1 className="w-[28rem] text-[2rem]">
          A fresh approach to customer with financial freedom
        </h1>
      </div>

      <div className="flex justify-center items-center mt-12">
        <div className="grid md:grid-cols-3 gap-4">
          <Card
            image={Icon}
            title="Plan Money"
            para="The future can be even brighter but a goal
without a plan is just a wish. Use our tools
to plan ahead."
          />
          <Card
            image={Icon}
            title="Save Money"
            para="With a whooping 10-15% interest rate per
            annum, grow your savings on your own
            terms with our process & plans."
          />
          <Card
            image={Icon}
            title="Invest Money"
            para="Invest in mutual funds tailored to you and
            your financial position, and watch the
            returns keep rolling in."
          />
        </div>
      </div>
    </section>
  );
}
