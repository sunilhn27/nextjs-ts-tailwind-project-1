import React, { FC } from "react";
import FeatureImg from "@/app/asserts/feature.png";
import Image, { StaticImageData } from "next/image";
import layerImg from "@/app/asserts/layers.svg";

interface Pointsprops {
  image: StaticImageData;
  header: string;
  para: string;
}

const Points: FC<Pointsprops> = ({ image, header, para }) => {
  return (
    <section>
      <div className="flex justify-center items-center mt-12 space-x-4">
        <div>
          <Image src={layerImg} alt="layer2" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Bank-grade Security</h1>
          <p className="w-[26rem]">
            Our payment processors are PCIDSS compliant to ensure optimum
            security of your data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function FeatureThree(): JSX.Element {
  return (
    <section className="my-12 bg-[#FAFAFAFA] w-full h-[47rem]">
      <div className="flex justify-evenly items-center py-12">
        <div className="flex">
          <Image src={FeatureImg} alt="feature3" />
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <h1 className="w-[24rem] text-3xl">
              Your money is well protected and secured
            </h1>
            <Points
              image={layerImg}
              header="Bank-grade Security"
              para="Our payment processors are PCIDSS compliant to ensure optimum security of your data."
            />
            <Points
              image={layerImg}
              header="Best Investments"
              para="We invest in low risk fixed income securities which include
            treasury bills and mutual funds."
            />
            <Points
              image={layerImg}
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
