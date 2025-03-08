'use client'

import Image from 'next/image'
import React from 'react'

import {contactItems, navItems} from '@/constants'
import { Manrope } from 'next/font/google';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Smooth scroll to top
        });
      };

  return (
    <div className={`padding ${manrope.className} py-[6rem] border-t-[1px] border-t-zinc-700`}>
    
    <div className='flex md:flex-row flex-col justify-between'>
      <div>
        <Image src='/logo.png' alt='logo' width={180} height={180}/>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 md:gap-[2rem] gap-6 mt-[3rem] md:mt-0'>
        <div className='flex flex-col gap-6'>
            <h1>Quick Links</h1>
            <ul className='flex flex-col gap-3'>
                {navItems.map((item, index) => (
                    <li key={index} className='text-zinc-500 text-xs hover:text-white transition-all duration-300 hover:cursor-pointer'>{item.title}</li>
                ))}
            </ul>
        </div>
        <div className='flex flex-col gap-6'>
            <h1>Contact Us</h1>
            <ul className='flex flex-col gap-3'>
                {contactItems.map((item, index) => (
                    <li key={index} className='text-zinc-500 text-xs hover:text-white transition-all duration-300 hover:cursor-pointer'>{item.title}</li>
                ))}
            </ul>
        </div>
        <div className='flex flex-col gap-6 ml-0 md:ml-[6rem] mt-4 md:mt-0'>
            <h1>Quick Contact With Us</h1>
            <ul className="flex gap-6">
                                <li className='hover:cursor-pointer'>
                                <Image
                                src='/instagram.svg'
                                alt='instagram'
                                width={15}
                                height={15}
                                />
                                </li>
                                <li className='hover:cursor-pointer'>
                                <Image
                                src='/linkedin.svg'
                                alt='instagram'
                                width={15}
                                height={15}
                                />
                                </li>
                                <li className='hover:cursor-pointer'>
                                <Image
                                src='/facebook.svg'
                                alt='instagram'
                                width={15}
                                height={15}
                                />
                                </li>
                                <li className='hover:cursor-pointer'>
                                <Image
                                src='/twitter.svg'
                                alt='instagram'
                                width={15}
                                height={15}
                                />
                                </li>
                            </ul>
        </div>
      </div>
    </div>
    <div className='flex justify-between items-center mt-[6rem]'>
                <p className='md:text-sm text-xs text-zinc-500'>    
                2025 Quantumflux technologies all rights reserved
                </p>
                <Button onClick={scrollToTop} className='bg-transparent  hidden md:flex items-center gap-2 hover:bg-transparent hover:cursor-pointer'>
Back to top
<ArrowUp/>
                </Button>
                <Button onClick={scrollToTop} className='bg-transparent md:hidden block hover:bg-transparent hover:cursor-pointer'>
<ArrowUp/>
                </Button>
    </div>
    </div>
  )
}

export default Footer
