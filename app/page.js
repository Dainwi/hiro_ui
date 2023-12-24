// import Image from 'next/image'

import Benifits from "@/components/Benifits";
import Cta from "@/components/Cta";
import Features from "@/components/Features";
import FeaturesList from "@/components/FeaturesList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home(){
  return(
    <main>
    <Navbar/>
    <Hero/>
    <Features/>
    <FeaturesList/>
    <Benifits/>
    <Cta/>
    <Footer/>
    </main>
  );
};
