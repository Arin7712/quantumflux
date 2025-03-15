import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Experience = () => {
  return (
    <div className="py-[6rem] padding flex flex-col items-center h-auto  md:h-auto bg-white">
      <div className="flex flex-col items-center text-center gap-6">
        <Button
          variant="outline"
          className="bg-[#E3CDF4] border-[1px] text-black hover:bg-[#E3CDF4] hover:text-black"
        >
          Experience
        </Button>
        <h1
          className={`md:text-5xl text-2xl max-w-2xl text-black font-bold ${manrope.className}`}
        >
          The World Class work done by our Team
        </h1>
      </div>

      <div
        className={`flex md:flex-row flex-col items-center gap-14 py-[3rem] ${manrope.className}`}
      >
        <div className="flex md:flex-row flex-col">
          <div className="relative md:w-[300px] w-full h-[462px] rounded-lg flex flex-col items-center justify-between px-4 py-6 overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/bgvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="text-center text-xl relative">
              Chairman <br></br>Daniel Deez
            </div>
            <span className="relative">
              <Image src="/logo.png" alt="logo" width={150} height={80} />
            </span>
          </div>
          <Image src="/t3.jpg" alt="t1" width={270} height={450} className="w-[500px] md:hidden block"/>
          <Image src="/t3.jpg" alt="t1" width={270} height={450} className=" md:block hidden"/>
        </div>

        <div className="flex md:flex-row flex-col ">
          <Image src="/t2.png" alt="t1" width={270} height={450} className="w-[500px] md:hidden block"/>
          <Image src="/t2.png" alt="t1" width={270} height={450} className=" md:block hidden"/>
          <div className="relative md:w-[300px] w-full md:order-1 order-[-1] h-[462px] rounded-lg flex flex-col items-center justify-between px-4 py-6 overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/bgvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>{" "}
            <div className="text-center text-xl relative">
              MD, Global <br></br>Daniel Nuts
            </div>
            <span className="relative">
              <Image src="/logo.png" alt="logo" width={150} height={80} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;