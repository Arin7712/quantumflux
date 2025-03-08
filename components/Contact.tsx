import { Manrope } from "next/font/google";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Contact = () => {
  return (
<div className="padding flex md:flex-row flex-col items-start md:items-stretch justify-between py-[6rem] md:gap-6 gap-[4rem] border-t-[1px] border-t-zinc-700">
      <div
        className={`${manrope.className} text-white w-full md:w-[60%] flex flex-col gap-[3rem]`}
      >
        <h1 className="text-4xl font-medium max-w-3xl">
          A comprehensive solution for all of your challenges.
        </h1>
        <p className="pt-[1rem] font-light">"Get in touch with us – we’re here to help!"</p>
        <div className="flex md:gap-[8rem] gap-[2rem] items-center">
          <div>
            <h1 className="text-sm text-neutral-400">Phone</h1>
            <p className="md:text-sm text-xs">+91-1234567890</p>
          </div>
          <div>
            <h1 className="text-sm text-neutral-400">Email</h1>
            <p className="md:text-sm text-xs">info@quantumflux.com</p>
          </div>
          <div>
            <h1 className="text-sm text-neutral-400">Address</h1>
            <p className="md:text-sm text-xs">123 Main Street, Anytown, USA</p>
          </div>
        </div>
        <div className="text-3xl font-light">Contact Us !</div>
        <div className="w-full">
          <form className="space-y-[3rem]">
            <input
              type="text"
              placeholder="Name"
              className="border-b-[1px] border-b-neutral-400 w-[100%] focus:border-b-white outline-none focus:ring-0"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border-b-[1px] border-b-neutral-400 w-[100%] focus:border-b-white outline-none focus:ring-0"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="border-b-[1px] border-b-neutral-400 w-[100%] focus:border-b-white outline-none focus:ring-0"
            />
            <textarea
              placeholder="Your Message"
              className="border-b-[1px] border-b-neutral-400 w-[100%] focus:border-b-white outline-none focus:ring-0 resize-none"
            />
            <div>
              <Button type="submit" className="bg-white text-black">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[url('/t1.png')] bg-cover md:flex-1 flex justify-between flex-col rounded-xl p-6 md:w-auto w-full md:h-auto h-[20rem]">
      <div>
        <Image src='/logo.png' alt='logo' width={200} height={80} />
      </div>
      <div className="flex flex-col gap-4 items-end">
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
  );
};

export default Contact;
