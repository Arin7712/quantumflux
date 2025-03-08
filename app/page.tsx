import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Tech from "@/components/Tech";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Experience/>
      <Tech/>
      <Partners/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}
