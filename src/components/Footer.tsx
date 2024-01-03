import React from "react";
import BgImg from '@/app/asserts/svgexport-5.png'
import WhiteLogo from '@/app/asserts/white_logo.png'

export default function Footer(): JSX.Element {
  const sectionStyle = {
    backgroundImage: `url(${BgImg.src})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // Add other styles as needed
  };

  return (
    <section className="w-full h-[72rem] absolute border-2 border-red-600" style={sectionStyle} >
      <div className="">Plain Text</div>
      safdsv
      <div>dsfdsv</div>
    </section>
    
  );
  
}
