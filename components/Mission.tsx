import Image from "next/image";
import React from "react";
import Mission from "../public/Mission.svg";

const AboutUsSection = () => {
  return (
    <main className="overflow-x-hidden pt-2">
      {" "}
      <section className="main-container mb-0 xl:flex xxl:items-start justify-start text-white ">
        {/* hero text container */}

        <div className="flex flex-col p-5 order-2 md:pl-24">
          <div className="flex md:mt-28">
            <h1 className="m-0 relative text-inherit leading-[72px] font-bold font-poppins inline-block [filter:drop-shadow(0px_4px_14px_rgba(0,_0,_0,_0.5))] max-w-full z-[3] sm:text-15xl sm:leading-[43px] lg:text-[48px] lg:leading-[58px]">
              <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                OUR
              </span>
              <span className="text-">{` `}</span>
              <span className=" text-yellow-300">MISSION</span>
            </h1>
          </div>

          <div className=" max-w-lg relative text-xl leading-[150%] font-poppins text-lightsteelblue z-[1] mq450:text-base mq450:leading-[24px]">
            <p className="m-0 leading-9">
              Our mission is to develop a vibrant community of lifelong learners through accessible, inclusive, and innovative education. Guided by collaborative engagement and rooted in biblical values, we empower students to excel spiritually, academically, socially, and personally.
            </p>
          </div>
        </div>
        <div className="flex order-1 justify-start">
          <div className="w-full justify-end xl:flex relative z-10">
            <Image
              src={Mission}
              alt="Mission"
              quality={90}
              className="scale-95 xl:scale-100"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsSection;
