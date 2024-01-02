import React from "react";
import FeatureImg from "@/app/asserts/feature-2.png";
import layerImg from "@/app/asserts/layers.svg";
import Image, { StaticImageData } from "next/image";

interface Pointsprops {
  image: StaticImageData;
  header: string;
  para: string;
}

const Points: React.FC<Pointsprops> = ({ image, header, para }) => {
  return (
    <section>
      <div className="flex justify-center items-center space-x-4 mt-12">
        <div>
          <Image src={image} alt="layeer" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">{header}</h1>
          <p className="w-[26rem]">{para}</p>
        </div>
      </div>
    </section>
  );
};

export default function FeatureTwo(): JSX.Element {
  return (
    <section className="my-12 w-full h-[47rem] ">
      <div className="flex justify-evenly items-center py-12">
        <div className="flex">
          <div className="flex flex-col">
            <h1 className="w-[21rem] text-3xl">
              Start building wealth easily in 5 minutes
            </h1>
            <Points
              image={layerImg}
              header="Create an account"
              para="Sign up for an account with your name, email and phone number."
            />
            <Points
              image={layerImg}
              header="Add a payment method"
              para="Using your debit card, bank account, USSD, QR Code, setup
              your first plan."
            />
            <Points
              image={layerImg}
              header="Watch your money grow"
              para="Sit back, relax & let your money work for you all day,
              everyday."
            />
          </div>
        </div>
        <div className="flex">
          <Image src={FeatureImg} alt="featureimg" />
        </div>
      </div>
    </section>
  );
}
