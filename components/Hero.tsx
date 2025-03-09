'use client'

import Image from "next/image";

import * as Scroll from "react-scroll";


import { Manrope } from "next/font/google";
import { Button } from "./ui/button";

import {ArrowRight} from "lucide-react";
import React from "react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Hero = () => {
  return (
    <div className="flex flex-col h-auto md:h-screen">
<div className="md:h-[60%] h-[30rem] flex flex-col justify-between text-white relative">
  <video 
    className="absolute z-0 top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/bgvid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

        <nav className="flex items-center justify-between w-full py-6 relative z-10 padding">
          <div className="inline-block">
            <Image src="/logo.png" alt="logo" width={200} height={200} />
          </div>
          <div>
            <Scroll.Link to='contact' smooth={true} spy={true} offset={-50} className={`${manrope.className} hover:cursor-pointer`}>Contact Us</Scroll.Link>
          </div>
        </nav>

        <div className="flex md:flex-row flex-col justify-between md:items-center w-full pb-6 gap-10 relative padding">
            <div className="md:text-3xl text-2xl md:max-w-lg max-w-[50%]">
                Innovative Solutions For Dynamic Industries
            </div>
            <div className="flex flex-col gap-4 items-end md:items-center">
                <p>Quickest Contact With Us</p>
                <ul className="flex gap-6">
                    <li className='hover:cursor-pointer'>
                    <Image
                    src='/instagram.svg'
                    alt='instagram'
                    width={20}
                    height={20}
                    />
                    </li>
                    <li className='hover:cursor-pointer'>
                    <Image
                    src='/linkedin.svg'
                    alt='instagram'
                    width={20}
                    height={20}
                    />
                    </li>
                    <li className='hover:cursor-pointer'>
                    <Image
                    src='/facebook.svg'
                    alt='instagram'
                    width={20}
                    height={20}
                    />
                    </li>
                    <li className='hover:cursor-pointer'>
                    <Image
                    src='/twitter.svg'
                    alt='instagram'
                    width={20}
                    height={20}
                    />
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-20 pt-10 pb-20 padding md:text-start text-center border-b-[1px] border-b-zinc-700">
        <h1 className="md:text-3xl text-2xl max-w-2xl">"Transform ideas into innovative software and wesbites that drive success."</h1>
        <div className="flex md:flex-row flex-col md:gap-0 gap-6 items-center justify-between">
          <p className="text-sm">"Transform ideas into innovative software and wesbites that drive success."</p>
          <Scroll.Link to='services' smooth={true} spy={true} offset={-50}>
          <Button className="bg-white text-[#2C0A3F] hover:bg-white hover:cursor-pointer md:text-sm text-xs">
            <span className={`${manrope.className} font-semibold`}>
            Get Started
            </span>
            <ArrowRight/>
          </Button>
          </Scroll.Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
