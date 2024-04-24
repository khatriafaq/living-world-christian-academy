"use client";
import Header from "@/components/common/Header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/common/Footer";
import { Source_Sans_3, Space_Grotesk } from "next/font/google";
import CountdownClock from "@/components/CountdownClock";
import Providers from "./providers";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider, useAccount } from "wagmi";
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

const projectId = "da2ffc3f8eb0b295ff1ec21d73e08f8a";

const config = getDefaultConfig({
  appName: "Virtual X",
  projectId: projectId,
  chains: [bsc],
  ssr: true,
});

const VirtualXInfo = {
  appName: "Virtual X",
};

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "auto",
});

const btnFont = Source_Sans_3({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-source-sans-3",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${space.className} overflow-x-hidden ${btnFont.variable}`}
        style={{ paddingLeft: "2%" }}
      >
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              
              <Header />

              <div style={{ position: "relative", top: "-20px" }}>
                <CountdownClock />
              </div>

              {children}

              <div className="dekstop_styling ">
                <Footer />
              </div>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
