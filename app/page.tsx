import Image from "next/image";
import Phone from "../public/Phone.svg";
import PhoneDisply from "../public/PhoneDisply.svg";
import TeamSection from "@/components/TeamSection";
import AboutUsSection from "@/components/AboutUsSection";
import Faqs from "@/components/Faqs/Faqs";
import { FaqsData } from "@/components/Faqs/FaqsData";
import RoadMapSection from "@/components/RoadMapSection";
import { useState } from "react";
import Staking from "@/components/stake";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      ({" "}
      <section className="main-container mb-0 xl:flex xxl:items-start justify-start text-white">
        {/* hero text container */}

        <div className="flex flex-col p-5">
          <div className="flex mb-10">
            <h2 className="m-0 xl:mt-36 relative text-inherit leading-[108.8%] uppercase font-bold z-[4] mq450:text-8xl mq450:leading-[29px] mq1050:text-17xl mq1050:leading-[39px] font-poppins">
              <p className="m-0">Educational Excellence and</p>
              <p className="m-0">
                <span className="text-blue-200">Spiritual Empowerment</span>
                <span> for</span>
              </p>
              <p className="m-0">Dorchester Country</p>
            </h2>
          </div>

          <div className="relative text-lg inline-block max-w-full z-[4] font-poppins">
            <p className="m-0">
              We envisage a future where every student, regardless of
            </p>
            <p className="m-0">
              background, is equipped with the knowledge, skills, and
            </p>
            <p className="m-0">
              values essential for success in a dynamic world.
            </p>
          </div>
        </div>
        <div className="flex p-5">
          <div className="w-full justify-start xl:flex relative z-10">
            <Image
              src={Phone}
              alt="phone"
              quality={90}
              className=" scale-100 xl: sca"
            />
          </div>
        </div>
        
      </section>
      
      <AboutUsSection />
      {/* <Staking /> */}
      {/* <RoadMapSection /> */}
      {/* <TeamSection /> */}
      {/* <Faqs faqs={FaqsData} /> */}
      )
    </main>
  );
}
