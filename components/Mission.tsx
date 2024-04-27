import Image from "next/image";
import React from "react";
import Mission from "../public/Mission.svg";

const AboutUsSection = () => {
  return (
    <main className="overflow-x-hidden pt-20">
      {" "}
      <section className="main-container mb-0 xl:flex xxl:items-start justify-start text-white">
        {/* hero text container */}
        <div className="flex">
          <div className="w-full justify-start xl:flex relative z-10">
            <Image
              src={Mission}
              alt="vision"
              quality={90}
              className="scale-95 xl:scale-100"
            />
          </div>
        </div>
        <div className="flex flex-col p-5 justify-center ml-20 pt-36">
          <div className="flex mb-10">
            <h1 className="m-0 relative text-inherit leading-[72px] font-bold font-poppins inline-block [filter:drop-shadow(0px_4px_14px_rgba(0,_0,_0,_0.5))] max-w-full z-[3] sm:text-17xl sm:leading-[43px] lg:text-[48px] lg:leading-[58px]">
              <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                OUR
              </span>
              <span className="text-">{` `}</span>
              <span className=" text-yellow-200">MISSION</span>
            </h1>
          </div>

          <div className="relative text-xl leading-[29px] font-inter text-lightsteelblue z-[1] mq450:text-base mq450:leading-[23px]">
            <p className="m-0">
              Our vision is to illuminate Dorchester County with a beacon
            </p>
            <p className="m-0">
              of educational and spiritual excellence embodied by
            </p>
            <p className="m-0 whitespace-pre-wrap">
              Living Word Christian Academy. By fostering spirituality,
            </p>
            <p className="m-0">
              nurturing curiosity, and promoting community engagement,
            </p>
            <p className="m-0">
              we aim to forge leaders who inspire positive change.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsSection;
