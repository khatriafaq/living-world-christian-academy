import { OurTeam } from "@/data/TeamData";
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <main className="overflow-x-hidden pt-2 md:mt-10">
      <section className="main-container text-white mt-32 " id="team">
        <h1 className="text-4xl md:text-6xl xl:text-[65px] font-bold text-center mb-10">
          Meet Our CEOs
        </h1>

        {/* team member container */}
        <div className="">
          <div className=" w-5/6 m-auto flex flex-wrap items-center gap-y-6 md:gap-y-8 xl:gap-8 xl:px-10 border-2 border-solid border-white">
            {OurTeam.map((item, index) => {
              return (
                <div
                  className="mx-auto bg-brandColor border  rounded-[20px] text-center px-10 md:px-16 py-5 transition-allborder-2 border-solid border-white"
                  key={index}
                >
                  <div className="grayscale">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={item.photo}
                        alt=""
                        className="rounded-full w-40 h-40"
                      />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mt-4">{item.name}</h3>
                  <p className="text-sm text-[#adacac]">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamSection;
