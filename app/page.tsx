import Image from "next/image";
import Phone from "../public/Phone.svg";
import PhoneDisply from "../public/PhoneDisply.svg";
import TeamSection from "@/components/TeamSection";
import AboutUsSection from "@/components/Vision";
import Mission from "@/components/Mission";
import Faqs from "@/components/Faqs/Faqs";
import { FaqsData } from "@/components/Faqs/FaqsData";
import RoadMapSection from "@/components/RoadMapSection";
import { useState } from "react";
import Staking from "@/components/stake";
import Vision from "@/components/Vision";
import ObjectiveSection from "@/components/ObjectiveSection";
import Sliders from "@/components/Sliders";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {" "}
      <section className="main-container mb-0 xl:flex xxl:items-start justify-start text-white">
        {/* hero text container */}

        <div className="flex flex-col p-5">
          <div className="flex mb-10">
            <h2 className="m-0 xl:mt-36 relative text-inherit leading-[108.8%] uppercase font-bold z-[4] mq450:text-8xl mq450:leading-[29px] mq1050:text-17xl mq1050:leading-[39px] font-poppins">
              <p className="m-0">Educational Excellence and</p>
              <p className="m-0">
                <span className="text-skyblue-200">Spiritual Empowerment</span>
                <span> for</span>
              </p>
              <p className="m-0">Dorchester County</p>
            </h2>
          </div>
        </div>

          <div className="relative text-lg inline-block max-w-full z-[4] font-poppins">
            <p className="m-0">
              We envision a future where every student, regardless of
            </p>
            <p className="m-0">
              background, is equipped with the knowledge, skills, and
            </p>
            <p className="m-0 pb-10">
              values essential for success in a dynamic world.
            </p>

            <div className="flex flex-row  gap-[20px] max-w-full rounded-full">
              <button className="cursor-pointer py-[18px] pr-[34px] pl-[38.1px] bg-[transparent] shadow-[0px_3px_4px_rgba(154,_226,_255,_0.3)] rounded-t-21xl rounded-br-none rounded-full [background:linear-gradient(178.53deg,_#9ae2ff,_rgba(154,_226,_255,_0))] overflow-hidden flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738] whitespace-nowrap z-[4] border-[2px] border-solid border-skyblue-500 hover:bg-skyblue-400 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue-300">
                <b className="relative uppercase font-inter text-white text-left">
                  connect wallet
                </b>
              </button>
              <button className="cursor-pointer py-[18px] pr-[34px] pl-[38.1px] bg-[transparent] w-[126.2px] shadow-[0px_3px_4px_rgba(154,_226,_255,_0.35)] rounded-t-21xl rounded-br-21xl rounded-bl-none [background:linear-gradient(0deg,_rgba(196,_241,_255,_0),_rgba(183,_236,_255,_0.31)_31%,_#9ae2ff)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start [debug_commit:1de1738] z-[4] border-[2px] border-solid border-skyblue-500 hover:bg-skyblue-400 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue-300 rounded-full">
                <b className="relative text-lgi uppercase inline-block font-inter text-white text-left min-w-[50px]">
                  mint
                </b>
              </button>
                     {/* Input field and button added below */}
                     <div>
                  <div className="mt-4 grid w-full items-center gap-1.5">
                    <div className="border-[3px] border-lightPink rounded-3xl bg-darkBrandColor p-4 w-full">
                      <label
                        htmlFor="startStaking"
                        className="block text-lg sm:text-xl font-bold text-lightPink"
                      >
                        Start Staking
                      </label>
                      <div className="flex flex-col sm:flex-row items-center w-full mt-2 gap-2">
                        <div className="flex flex-row w-full items-center justify-center">
                          <label
                            htmlFor="stakeAmount"
                            className="text-lightPink font-bold flex items-center justify-center py-1"
                          >
                            Amount:
                          </label>
                          <input
                            id="stakeAmount"
                            type="number"
                            placeholder="Enter Amount..."
                            className="font-SourceSans3 bg-brandColor border-[3px] border-brandColor text-white rounded-3xl px-4 py-2 flex-grow hover:bg-dark active:border-b-[3px] active:border-lightPink"
                          />
                        </div>

                        
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
        <div className="flex p-5">
          <div className="w-full justify-start xl:flex relative z-10">
            <Image
              src={Phone}
              alt="phone"
              quality={90}
              className="scale-100 xl:scale-100"
            />
          </div>
        </div>
      </section>
      <Vision />
      <Mission />
      <Sliders />
      <ObjectiveSection />
      <WhatsApp/>
      {/* <Staking /> */}
      {/* <RoadMapSection /> */}
      {/* <TeamSection /> */}
      <Faqs faqs={FaqsData} />
    </main>
  );
}
