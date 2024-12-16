import Image from "next/image";
import FAQ from "@/components/faq";
import SwiperComp from "@/components/home/swiper/swiper";
import Pricing from "@/components/home/pricing-list/pricing-list";
import ExpertAt from "@/components/expert-at";
import Contact from "@/components/layout/contact/contact";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-hidden">
        <ExpertAt />
        <Pricing />
        <SwiperComp />
        <FAQ />
        <Contact />
      </main>
     
    </div>
  );
}
