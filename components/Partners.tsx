import React from 'react'
import { Button } from './ui/button'
import { Manrope } from 'next/font/google';
import { AvatarCirclesDemo } from './AvatarCirclesDemo';
import Image from 'next/image';
import { partnerLogos } from '@/constants';

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Partners = () => {
  return (
    <div className='flex flex-col justify-between bg-white h-auto md:h-screen text-black padding py-[6rem]'>

   
    <div className=' flex md:flex-row flex-col justify-between items-start '>
      <div className='space-y-6'>
      <Button
          variant="outline"
          className="bg-[#E3CDF4] border-[1px] text-black px-12"
        >
          Partners
        </Button>
        <h1 className={`text-4xl max-w-lg font-bold ${manrope.className}`}>We Build for Client's Satisfaction</h1>
      </div>

      <div className='flex flex-col items-start md:w-[45%] w-full pt-10 md:pt-0'>
        <div className='flex items-center gap-6 w-full md:border-b-none border-b-[1px] border-b-black md:border-b-white pb-4 md:pb-4'>
        <AvatarCirclesDemo/>
        <div className='flex flex-col gap-1 w-full border-b-none md:border-b-[1px] md:border-b-black pb-0  md:pb-4'>
        <p>John Steve</p>
        <p className='text-zinc-700'>Someposition</p>
        </div>
        </div>
        <p className="md:ml-[7.5rem] pt-4 pr-[8rem] md:pr-[8rem] w-[100%] md:w-[70%] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
      </div>
    </div>
    <div className='flex md:flex-nowrap flex-wrap gap-[2rem] md:gap-[14rem] items-center w-full md:pt-0 pt-[6rem]'>
        {partnerLogos.map((item,index) => (
        <Image
        key={index}
        src={item.path}
        alt='logo'
        width={100}
        height={100}/>
        ))}
    </div>
    </div>
  )
}

export default Partners
