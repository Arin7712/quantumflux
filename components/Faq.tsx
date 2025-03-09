'use client'

import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqItems } from '@/constants';

import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Faq = () => {

  return (
    <div className='padding py-[6rem]'>
      <div className={`md:text-5xl text-3xl ${manrope.className} font-bold`}>
        FAQ
      </div>
      <Accordion type="single" collapsible className={`mt-6 ${manrope.className}`}>
        {
          faqItems.map((item, index) => (
            <AccordionItem key={index} value={index.toString()} className='max-w-3xl'>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))
        }
</Accordion>

    </div>
  )
  
}

export default Faq
