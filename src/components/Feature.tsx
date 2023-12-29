import React from "react";
import FeatureImg from "@/app/asserts/feature-1.png";
import Image, { StaticImageData } from "next/image";
import CupImg from "@/app/asserts/cup.svg";
import TargetImg from "@/app/asserts/target.svg";
import Invention from "@/app/asserts/invention.svg";

interface FeaturePoints {
  image: StaticImageData;
  header: string;
  para: string;
}

const Points: React.FC<FeaturePoints> = ({ image, header, para }) => {
  return (
    <div className="flex mt-12 space-x-6">
      <Image src={image} alt="img1" />
      <div className="flex flex-col ">
        <h1 className="font-bold text-xl">{header}</h1>
        <p className="w-[26rem] text-gray-600">{para}</p>
      </div>
    </div>
  );
};

export default function Feature(): JSX.Element {
  return (
    <section className="bg-[#FAFAFA] w-full h-[47rem] mt-12">
      <div className="flex justify-evenly items-center">
        <div className="flex ">
          <Image src={FeatureImg} alt="featureImg" className="mt-12"/>
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="w-[25rem] text-3xl">
              Your money is well protected and secured
            </h1>
            <Points
              image={Invention}
              header="Bank-grade Security"
              para="Our payment processors are PCIDSS compliant to ensure optimum security of your data."
            />
            <Points
              image={CupImg}
              header="Best Investments"
              para="We invest in low risk fixed income securities which include
              treasury bills and mutual funds."
            />
            <Points
              image={TargetImg}
              header="Under Secure Watch"
              para="Invest your savings in low risk financial instruments,
              registered with the Securities."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
