"use client";
import React, { ReactNode } from "react";
import {
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

import { bsc, bscTestnet } from "wagmi/chains";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Source_Sans_3, Space_Grotesk } from "next/font/google";
import { WagmiProvider } from "wagmi";

const projectId = "da2ffc3f8eb0b295ff1ec21d73e08f8a";

const config = getDefaultConfig({
  appName: "Living Word",
  projectId: projectId,
  chains: [bscTestnet],
  ssr: true,
});

const LivingWordInfo = {
  appName: "livingword",
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
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
