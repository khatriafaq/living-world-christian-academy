"use client";
import Image from "next/image";
import Phone from "../public/Phone.svg";
import Mission from "@/components/Mission";
import Faqs from "@/components/Faqs/Faqs";
import { FaqsData } from "@/components/Faqs/FaqsData";
import { useEffect, useState } from "react";
import Vision from "@/components/Vision";
import ObjectiveSection from "@/components/ObjectiveSection";
import Sliders from "@/components/Sliders";
import WhatsApp from "@/components/WhatsApp";
import { ConnectButton, Theme, darkTheme } from "@rainbow-me/rainbowkit";
import { addressContract } from "./api/address";
import { useAccount, useWriteContract } from "wagmi";
import { ABI } from "./api/abi";
import { contractAddressUsdt } from "./api/contract.usdt";
import { usdtABI } from "./api/abi.usdt";

export default function Home() {
  const [ammount, setAmmount] = useState("");
  const { address } = useAccount();
  const { data: hash, writeContractAsync, error } = useWriteContract();
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const sendContractTransactionToMint = async (ammount: string) => {
    if (!address) {
      alert("please connect your wallet");
      return;
    }
    await writeContractAsync({
      address: contractAddressUsdt,
      abi: usdtABI,
      functionName: "approve",
      args: [addressContract, (ammount as unknown as number) * 10 ** 6],
    }).then(async () => {
      setTimeout(() => {
        writeContractAsync({
          address: addressContract,
          abi: ABI,
          functionName: "mint",
          args: [ammount],
        }).then(async (hash) => {
          console.log("Transaction hash:", hash);
        });
      }, 30000);
    });
    return hash;
  };
  return (
    <main className="overflow-x-hidden">
      {" "}
      <section className="main-container mb-0 xl:flex xxl:items-start justify-start text-white ">
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

          <div className="relative text-lg inline-block max-w-full z-[4] font-poppins">
            <div className=" max-w-lg relative text-xl leading-[150%] font-poppins text-lightsteelblue z-[1] mq450:text-base mq450:leading-[24px]">
              <p className="m-0 leading-9 pb-10">
                Introducing our groundbreaking NFT Endowment Program and
                innovative initiative aimed at bridging the realms of
                educational excellence and spiritual empowerment. We envision a
                future where every student, regardless of background, is
                equipped with the knowledge, skills, and values essential for
                success in a dynamic world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-[20px] max-w-full rounded-full">
              <button className="cursor-pointer py-[18px] pr-[34px] sm:pl-[38.1px] pl-[70px] bg-[transparent] shadow-[0px_3px_4px_rgba(154,226,_255,_0.3)] rounded-t-21xl rounded-br-none rounded-full [background:linear-gradient(178.53deg,#9ae2ff,_rgba(154,_226,_255,_0))] overflow-hidden flex flex-row items-start justify-start shrink-0 whitespace-nowrap z-[4] border-[2px] border-solid border-skyblue-500 hover:bg-skyblue-400 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue-300">
                <b className="relative uppercase font-inter text-white text-left shrink-0">
                  <ConnectButton label="CONNECT WALLET" />
                </b>
              </button>
              <button className="flex-col max-w-full cursor-pointer py-[18px] pr-[34px] pl-[140px] sm:pl-[60px] bg-[transparent] w-[400px] sm:w-[180px] shadow-[0px_3px_4px_rgba(154,226,_255,_0.35)] rounded-t-21xl rounded-br-21xl rounded-bl-none [background:linear-gradient(0deg,_rgba(196,_241,_255,_0),_rgba(183,_236,_255,_0.31)_31%,#9ae2ff)] box-border overflow-hidden shrink-0 flex sm:flex-row items-start justify-start z-[4] border-[2px] border-solid border-skyblue-500 hover:bg-skyblue-400 hover:box-border hover:border-[2px] hover:border-solid hover:border-skyblue-300 rounded-full">
                <b
                  className="relative inline-block text-centre font-poppins min-w-[50px] pt-2 text-xl"
                  onClick={() => {
                    sendContractTransactionToMint(ammount);
                  }}
                >
                  MINT
                </b>
              </button>

              {/* Input field and button added below */}
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-col sm:flex-row items-center max-w-[420px] mt-2 gap-2 pt-4">
                <div className="flex flex-col sm:flex-row w-full items-center justify-center">
                  <input
                    onChange={(e) => {
                      setAmmount(e.target.value);
                      console.log(e.target.value);
                    }}
                    id="stakeAmount"
                    type="number"
                    placeholder="Enter Amount..."
                    className="cursor-text py-[18px] px-[34px] bg-transparent shadow-[0px_3px_4px_rgba(154,_226,_255,_0.3)] rounded-full bg-gradient-to-r to-[#9ae2ff] from-[rgba(154,_226,_255,_0)] overflow-hidden whitespace-nowrap z-[4] border-[2px] border-solid border-skyblue-500 hover:bg-skyblue-400 hover:border-skyblue-300 text-white w-full"
                  />
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
      <WhatsApp />
      <Vision />
      <Mission />
      <Sliders />
      <ObjectiveSection />
      {/* <Staking /> */}
      {/* <RoadMapSection /> */}
      {/* <TeamSection /> */}
      <Faqs faqs={FaqsData} />
    </main>
  );
}
function merge(
  arg0: {
    colors: {
      accentColor: string;
      accentColorForeground: string;
      actionButtonBorder: string;
      actionButtonBorderMobile: string;
      actionButtonSecondaryBackground: string;
      closeButton: string;
      closeButtonBackground: string;
      connectButtonBackground: string;
      connectButtonBackgroundError: string;
      connectButtonInnerBackground: string;
      connectButtonText: string;
      connectButtonTextError: string;
      connectionIndicator: string;
      downloadBottomCardBackground: string;
      downloadTopCardBackground: string;
      error: string;
      generalBorder: string;
      generalBorderDim: string;
      menuItemBackground: string;
      modalBackdrop: string;
      modalBackground: string;
      modalBorder: string;
      modalText: string;
      modalTextDim: string;
      modalTextSecondary: string;
      profileAction: string;
      profileActionHover: string;
      profileForeground: string;
      selectedOptionBorder: string;
      standby: string;
    };
    shadows: {
      connectButton: string;
      dialog: string;
      profileDetailsAction: string;
      selectedOption: string;
      selectedWallet: string;
      walletLogo: string;
    };
    fonts: { body: string };
    radii: {
      actionButton: string;
      connectButton: string;
      menuButton: string;
      modal: string;

      modalMobile: string;
    };
    blurs: { modalOverlay: string };
  },
  arg1: Theme
) {
  throw new Error("Function not implemented.");
}
