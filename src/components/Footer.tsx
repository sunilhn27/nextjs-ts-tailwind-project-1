import Image,{ StaticImageData } from "next/image";
import React from "react";
import VectorImg3 from '@/app/asserts/Logo.png';


interface ServiceCardProps {
  image: StaticImageData;
  title: string;
  para: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, para }) => {
  return (
      <div className='flex flex-col'>
        <div className='shadow-2xl w-[26rem] h-[19rem]  text-center py-12 rounded-lg'>
          <Image src={image} alt='pic' className='mx-auto mb-6' />
          <h1 className='font-bold text-[1.5rem] mb-2'>{title}</h1>
          <p className='w-[21rem] mx-auto text-gray-500'>{para}</p>
        </div>
      </div>
  );
};

export default function Footer(): JSX.Element{
  return (<></>
    // <section className="">
    //   <div>
    //     <ServiceCard image={VectorImg3} title="title" para="Para"/>
    //   </div>
    // </section>
  );
}

