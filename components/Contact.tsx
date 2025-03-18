"use client";

import { Manrope } from "next/font/google";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Contact = () => {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "3d23dc08-f2aa-4289-8f0d-c2f9882982dc",
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      toast("Form Submitted Successfully");
      console.log(result);
    }
  }

  return (
    <div className="padding flex md:flex-row flex-col items-start md:items-stretch justify-between py-[6rem] md:gap-6 gap-[4rem] border-t-[1px] border-t-zinc-700">
      <div
        className={`${manrope.className} text-white w-full md:w-[60%] flex flex-col gap-[3rem]`}
      >
        <h1 className={`text-4xl max-w-3xl font-bold ${manrope.className}`}>
          A comprehensive solution for all of your challenges.
        </h1>
        <p className="pt-[1rem] font-light">
          "Get in touch with us – we’re here to help!"
        </p>
        <div className="flex md:gap-[8rem] gap-[2rem] items-center">
          <div>
            <h1 className="text-sm text-neutral-400">Phone</h1>
            <a className="md:text-sm text-xs" href="tel:+7066040014">+91-7066040014</a>
          </div>
          <div>
            <h1 className="text-sm text-neutral-400">Email</h1>
            <a href="mailto:quantumfluxtechnology@gmail.com" className="md:text-sm text-xs">quantumfluxtechnology@gmail.com</a>
          </div>
          <div>
            <h1 className="text-sm text-neutral-400">Address</h1>
            <p className="md:text-sm text-xs">Pune, India</p>
          </div>
        </div>
        <div className="text-3xl font-light">Contact Us !</div>
        <div className="w-full">
          <form className="space-y-[3rem]" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="border-b-[1px] border-b-neutral-400 w-[100%] focus:border-b-white outline-none focus:ring-0"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone Number"
              className="border-b-[1px] border-b-neutral-400 w-[100%] focus:border-b-white outline-none focus:ring-0"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Email Address"
              className="border-b-[1px] border-b-neutral-400 w-[100%] focus:border-b-white outline-none focus:ring-0"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="border-b-[1px] border-b-neutral-400 w-[100%] focus:border-b-white outline-none focus:ring-0 resize-none"
            />
            <input
              type="hidden"
              name="access_key"
              value="3d23dc08-f2aa-4289-8f0d-c2f9882982dc"
            />
            <div>
              <Button
                type="submit"
                className="bg-white text-black hover:bg-white hover:text-black hover:cursor-grabbing"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative md:flex-1 flex justify-between flex-col rounded-xl p-6 md:w-auto w-full md:h-auto h-[20rem] overflow-hidden bg-[url('/bg.webp')] bg-no-repeat bg-cover">

        <div className="relative">
          <Image src="/logo.png" alt="logo" width={200} height={80} />
        </div>
        <div className="flex flex-col gap-4 items-end relative">
          <p>Quickest Contact With Us</p>
          <ul className="flex gap-6">
          <Link href='https://www.instagram.com/quantumfluxtechnology?igsh=MWFlaGNic3F1MWN0bQ=='>
                    <li className='hover:cursor-pointer'>
                    <Image
                    src='/instagram.svg'
                    alt='instagram'
                    width={20}
                    height={20}
                    />
                    </li>
                  </Link>
                                <Link href='https://www.linkedin.com/company/quantumflux-technology-pvt-ltd/about/'>

                    <li className='hover:cursor-pointer'>
                    <Image
                    src='/linkedin.svg'
                    alt='instagram'
                    width={20}
                    height={20}
                    />
                    </li>
                  </Link>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
