"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/images/LivingWordLogo.svg";
import PrimaryBtn from "../ui/PrimaryBtn";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Data from "./config.json";
import Link from "next/link";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useAccount, WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  bsc,
  bscTestnet,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { redirect } from "next/dist/server/api-utils";

const projectId = "da2ffc3f8eb0b295ff1ec21d73e08f8a";

const VirtualXInfo = {
  appName: "Living Word",
};

const config = getDefaultConfig({
  appName: "Living Word",
  projectId: projectId,
  chains: [bsc, bscTestnet],
  //prod
  // chains : [polygon]
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="main-container flex justify-between items-center mt-5 py-[13px] px-[28px] relative z-20 max-w-full border-b-4 border-white">
      {/* logo */}
      <div className="logo flex-auto">
        <Link href="/#">
          <Image src={Logo} alt="logo" className="w-28 md:w-[120px]" />
        </Link>
      </div>

      {/* mobile menu button */}
      <div className="block lg:hidden">
        <button
          className="text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              className="rotate-90 transition-all w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}

      <div
        className="hidden lg:flex flex-auto space-x-4 items-center"
        id="home"
      >
        <nav className="m-0 w-[487px] flex flex-col items-start justify-end pt-0 px-0 pb-[22px] box-border max-w-full mq750:hidden">
          <nav className="flex w-fit gap-14 mx-auto text-lg py-4 text-white font-poppins text-center">
            <Link className="navbar__link relative" href="#home">
              HOME
            </Link>
            <Link className="navbar__link relative" href="#vision">
              Vision
            </Link>
            <Link className="navbar__link relative" href="#mission">
              Mission
            </Link>
            <Link className="navbar__link relative" href="#objective">
              Objectives
            </Link>
            <a
              href="/whitepaper.pdf" // Ensure the path is correct relative to the public directory
              className="navbar__link relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
          </nav>
        </nav>
        <div className="flex flex-auto items-start justify-end pt-0 px-0 pb-2.5">
          <button className="cursor-pointer py-1 px-[21px] bg-[transparent] shadow-[0px_2px_4px_rgba(154,_226,_255,_0.3)] rounded-full [background:linear-gradient(180deg,_#9ae2ff,_rgba(154,_226,_255,_0))] flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-sky-200 hover:bg-sky-700 hover:border-sky-300 hover:box-border hover:border-[1px] hover:border-solid hover:py-2">
            <div className="h-[41px] w-[120px] relative shadow-[0px_2px_4px_rgba(154,_226,_255,_0.3)] rounded-xl [background:linear-gradient(180deg,_#9ae2ff,_rgba(154,_226,_255,_0))] box-border hidden border-[1px] border-solid border-skyblue-200" />
            <div className="relative text-lg font-bold font-poppins text-white text-centre inline-block min-w-[78px] whitespace-nowrap z-[1] px-5 py-2">
              <Link className="relative" href="#contact">
                Contact
              </Link>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`w-full pt-6 pb-4 lg:hidden absolute left-0 -bottom-48  bg-dark transition-all rounded-[42px] fade-right font-poppins`}
        >
          <div className="flex flex-col mx-auto gap-3 w-[200px] text-white">
            <Link className="navbar__link relative" href="#about">
              HOME
            </Link>
            <Link className="navbar__link relative" href="#mission">
              Mission
            </Link>
            <Link className="navbar__link relative" href="#vision">
              Vision
            </Link>
            <Link className="navbar__link relative" href="#objective">
              Objectives
            </Link>
            <a
              href="/whitepaper.pdf" // Ensure the path is correct relative to the public directory
              className="navbar__link relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
