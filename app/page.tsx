"use client";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Tech from "@/components/Tech";
import Image from "next/image";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div className="bg-[#151515]">
      <Hero />
      <Element name="services">
        <section id="services">
          <Services />
        </section>
      </Element>
      {/* <Experience /> */}
      <Tech />
      {/* <Partners/> */}
      <Faq />
      <Element name="contact">
        <section id="contact">
          <Contact />
        </section>
      </Element>
      <Footer />
    </div>
  );
}
