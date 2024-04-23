"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/images/VirtualXLogo-1- 1.svg";
import PrimaryBtn from "../ui/PrimaryBtn";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Data from "./config.json";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
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
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { redirect } from "next/dist/server/api-utils";

const projectId = "da2ffc3f8eb0b295ff1ec21d73e08f8a";

const VirtualXInfo = {
  appName: "Virtual X",
};

const config = getDefaultConfig({
  appName: "Virtual X",
  projectId: projectId,
  chains: [bsc],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="main-container bg-dark flex justify-between items-center rounded-[38px] mt-10 py-[13px] px-[28px] relative z-20">
      {/* logo */}
      <div className="logo">
        <Link href="/#">
          <Image src={Logo} alt="logo" className="w-28 md:w-[218px]" />
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
      <div className="hidden lg:flex space-x-4">
        <ConnectButton />
        <div className="flex m-auto gap-5">
          <a
            href="https://www.twitter.com/VirtualX5GUK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-brandColor border-[3px] border-brandColor button-small text-white rounded-3xl px-4 py-2 hover:bg-dark active:border-b-[3px] active:border-lightPink">
              <XIcon />
            </div>
          </a>
          <a
            href="https://t.me/VirtualXuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-brandColor border-[3px] border-brandColor button-small text-white rounded-3xl px-4 py-2 hover:bg-dark active:border-b-[3px] active:border-lightPink">
              <TelegramIcon />
            </div>
          </a>
        </div>
        <PrimaryBtn download={true} text="Whitepaper" />
        <button
          onClick={() => {
            window.scrollTo({
              top: 2500,
              behavior: "smooth",
            });
          }}
        >
          <PrimaryBtn text="Stake Now" />
        </button>
        {/* <PrimaryBtn action={() => {sendTransaction(); setTokensToSend("")}} text="Buy Presale" /> */}
        {/* <input value={tokensToSend} type="number" style={{WebkitAppearance : "none"}} className="font-SourceSans3 bg-brandColor border-[3px] border-brandColor button-small text-white rounded-3xl px-4 py-2 hover:bg-dark active:border-b-[3px] active:border-lightPink" placeholder="BNB's To Invest" onChange={(e) => {
          setTokensToSend(e.target.value)
        }
        }/> */}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`w-full pt-6 pb-4 lg:hidden absolute left-0 -bottom-48  bg-dark transition-all rounded-[42px] fade-right`}
        >
          <div className="flex flex-col mx-auto gap-3 w-[200px]">
            {/* <WagmiConfig config={wagmiConfig}>
              <RainbowKitProvider
                chains={chains}
                appInfo={VirtualXInfo}
                modalSize="compact"
              >
                <div>
                  <ConnectButton />
                </div>
              </RainbowKitProvider>
            </WagmiConfig> */}

            <div className="flex m-auto gap-5">
              <a
                href="https://www.twitter.com/VirtualX5GUK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-brandColor border-[3px] border-brandColor button-small text-white rounded-3xl px-4 py-2 hover:bg-dark active:border-b-[3px] active:border-lightPink">
                  <XIcon />
                </div>
              </a>
              <a
                href="https://t.me/VirtualXuk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-brandColor border-[3px] border-brandColor button-small text-white rounded-3xl px-4 py-2 hover:bg-dark active:border-b-[3px] active:border-lightPink">
                  <TelegramIcon />
                </div>
              </a>
            </div>

            <ConnectButton />
            <PrimaryBtn download={true} text="Whitepaper" />
            <button
              onClick={() => {
                window.scrollTo({
                  top: 2500,
                  behavior: "smooth",
                });
              }}
            >
              <PrimaryBtn text="Stake Now" />
            </button>

            {/* <PrimaryBtn action={() => {sendTransaction(); setTokensToSend("")}} text="Buy Presale" /> */}
            {/* <input
              value={tokensToSend}
              type="number"
              style={{ WebkitAppearance: "none" }}
              className="font-SourceSans3 bg-brandColor border-[3px] border-brandColor button-small text-white rounded-3xl px-4 py-2 hover:bg-dark active:border-b-[3px] active:border-lightPink"
              placeholder="BNB's To Invest"
              onChange={(e) => {
                setTokensToSend(e.target.value);
              }}
            /> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
