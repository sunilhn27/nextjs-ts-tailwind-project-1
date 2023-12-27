import Image from "next/image";
import React from "react";
import Logo from "@/app/asserts/Logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <section className="w-auto mt-2 h-[6rem] fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-evenly items-center tracking-wider">
        <nav className="flex items-center gap-8 font-bold text-[1.2rem] ">
          <Image src={Logo} alt="logo" />
          <Link className="hover:text-[#234FEB]" href={"#home"}>Home</Link>
          <Link className="hover:text-[#234FEB]" href={"#features"}>Features</Link>
          <Link className="hover:text-[#234FEB]" href={"#about"}>About</Link>
          <Link className="hover:text-[#234FEB]" href={"#howitworks"}>How It Works</Link>
          <Link className="hover:text-[#234FEB]" href={"#testimonials"}>Testimonials</Link>
        </nav>
        <div className="flex font-bold">
          <button className="bg-[#234FEB] w-[9.5rem] h-[2.5rem] text-white rounded-md ">DOWNLOAD</button>
        </div>
      </div>
    </section>
  );
}
