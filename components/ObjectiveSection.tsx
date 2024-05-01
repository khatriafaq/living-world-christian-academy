import Image from "next/image";
import React from "react";
import Mission from "../public/Mission.svg";

const ObjectiveSection = () => {
  return (
    <main className="overflow-x-hidden md:mt-10 ">
      {" "}
      <section
        className="main-container mb-0 xl:flex xxl:items-start justify-start text-white"
        id="objective"
      >
        {/* hero text container */}
        <div className="flex flex-col p-5 justify-center lg:pt-20">
          <div className="flex mb-10">
            <h1 className="m-0 relative text-inherit leading-[72px] font-bold font-poppins inline-block [filter:drop-shadow(0px_4px_14px_rgba(0,_0,_0,_0.5))] max-w-full z-[3] sm:text-17xl sm:leading-[43px] lg:text-[48px] lg:leading-[58px]">
              <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                OUR
              </span>
              <span className="text-">{` `}</span>
              <span className=" text-cyan-400">OBJECTIVE</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 rounded-2xl sm:grid-cols-2 lg:grid-cols-3 font-poppins bg-gradient-to-tl from-bg1/0 to-bg1/40 p-[50px]">
            <div className="rounded-3xl bg-gradient-to-b from-bg1/0 to-bg1/10 p-2 dark:from-gray-800">
              <div className="rounded-[calc(1.5rem-1px)] bg-bg1/10 p-10 h-[380px]">
                <div className="flex gap-2 justify-between align-top">
                  <p className="text-[20px] leading-[32px] lg:text-[30px] lg:leading-[52px] pb-6 text-cyan-300">
                    1. Delivering Educational Excellence.
                  </p>
                </div>
                <h3 className="text-[20px] lg:text-2xl leading-9 text-white font-normal">
                  Empowering students with essential skills and knowledge for
                  lifelong success.
                </h3>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-b from-bg1/0 to-bg1/10 p-2 dark:from-gray-800">
              <div className="rounded-[calc(1.5rem-1px)] bg-bg1/10 p-10 h-[380px]">
                <div className="flex gap-2">
                  <p className="text-[20px] leading-[32px] lg:text-[30px] lg:leading-[52px] pb-6 text-cyan-300">
                    2. Expanding the Christian sphere of influence.
                  </p>
                </div>
                <h3 className="text-[20px] lg:text-2xl leading-9 text-white font-normal">
                  Growing Christian reach through cultural and societal
                  influence worldwide expansion.
                </h3>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-b from-bg1/0 to-bg1/10 p-2 dark:from-gray-800">
              <div className="rounded-[calc(1.5rem-1px)] bg-bg1/10 p-10 h-[380px]">
                <div className="flex gap-2">
                  <p className="text-[20px] leading-[32px] lg:text-[30px] lg:leading-[52px] pb-6 text-cyan-300">
                    3. Aligning students with Biblical Teachings.
                  </p>
                </div>
                <h3 className="text-[20px] lg:text-2xl leading-9 text-white font-normal">
                  Aligning student and family values with the moral compass of
                  biblical teachings.
                </h3>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-b from-bg1/0 to-bg1/10 p-2 dark:from-gray-800">
              <div className="rounded-[calc(1.5rem-1px)] bg-bg1/10 p-10  h-[380px]">
                <div className="flex gap-2">
                  <p className="text-[20px] leading-[32px] lg:text-[30px] lg:leading-[52px] pb-6 text-cyan-300">
                    4. Fostering life-building growth.
                  </p>
                </div>
                <h3 className="text-[20px] lg:text-2xl leading-9 text-white font-normal">
                  Providing opportunities for life-building growth.
                </h3>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-b from-bg1/0 to-bg1/10 p-2 dark:from-gray-800">
              <div className="rounded-[calc(1.5rem-1px)] bg-bg1/10 p-10  h-[380px]">
                <div className="flex gap-2">
                  <p className="text-[20px] leading-[32px] lg:text-[30px] lg:leading-[52px] pb-6 text-cyan-300">
                    5. Enhancing graduating citizen's quality.
                  </p>
                </div>
                <h3 className="text-[20px] lg:text-2xl leading-9 text-white font-normal">
                  Improving graduating citizen’s quality for enhanced
                  contributions.
                </h3>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-b from-bg1/0 to-bg1/10 p-2 dark:from-gray-800">
              <div className="rounded-[calc(1.5rem-1px)] bg-bg1/10 p-10  h-[380px]">
                <div className="flex gap-2">
                  <p className="text-[20px] leading-[32px] lg:text-[30px] lg:leading-[52px] pb-6 text-cyan-300">
                    6. Strengthening the country's Fabric.
                  </p>
                </div>
                <h3 className="text-[20px] lg:text-2xl leading-9 text-white font-normal">
                  Bolstering the county's social fabric for collective
                  resilience.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ObjectiveSection;
