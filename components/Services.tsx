import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

import { servicesItems } from "@/constants/index";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const Services = () => {

  return (
    <div className="md:py-[8rem] py-[4rem] padding flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center gap-6">
        <Button
          variant="outline"
          className="bg-transparent border-[1px] border-[#8606E6] text-[#8606E6]"
        >
          Get Started
        </Button>
        <h1 className="md:text-5xl text-2xl max-w-2xl">
          Our Cutting Edge Development And Execution
        </h1>
      </div>

      <div className="mt-10 flex justify-center md:px-[4rem] px-[2rem]">
        <Carousel className="md:w-[100%] w-[80%]">
          <CarouselContent>
            {servicesItems.map((item, index) => (
            <CarouselItem className="md:basis-1/3 basis-1/1" key={index}>
              <Card className="bg-transparent border-zinc-700">
                <CardContent className="text-white">
                  <Image
                    src={item.img}
                    alt="bg"
                    width={500}
                    height={500}
                    className="rounded-xl"
                  />
                  <p className="px-5 py-4 text-md w-3/4">
                    {item.title}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white text-black md:block hidden"/>
          <CarouselNext className="bg-white text-black md:block hidden"/>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
