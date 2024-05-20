"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  WagmiProvider,
  useAccount,
  useReadContract,
  useWriteContract,
} from "wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bsc, polygon } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { parseEther } from "viem";
import { contractAddress } from "./common/contract-address";
import { ABI } from "./common/abi";

const projectId = "da2ffc3f8eb0b295ff1ec21d73e08f8a";

const config = getDefaultConfig({
  appName: "Living Word",
  projectId: projectId,
  chains: [polygon],
  ssr: true,
});

const VirtualXInfo = {
  appName: "Living Word",
};
const queryClient = new QueryClient();

function Staking() {
  const [account, setAccount] = useState<any>();

  const { address } = useAccount();
  const [pedningRewards, setPendingRewards] = useState<any>();
  const [stakedAmount, setStakedAmmount] = useState<any>();
  const [startTime, setStartTime] = useState<any>();
  const [lastClaimTime, setLastClaimTime] = useState<any>();
  const [tokensToStake, setTokensToStake] = useState<any>();
  const [balanceDetail, setBalanceDeatils] = useState<any>();
  const [elapsedTime, setElapsedTime] = useState<any>();
  const [options, setOptions] = useState<any>();
  const {
    data: hash,
    isPending,
    writeContractAsync,
    isError,
    isSuccess,
    error,
  } = useWriteContract();
  const {
    data: hashStake,
    isPending: isPendingStake,
    writeContractAsync: writeContractStake,
    isError: isErrorStake,
    error: errorStake,
  } = useWriteContract();
  const { data: balance, error: errorRead } = useReadContract({
    address: contractAddress,
    abi: ABI,
    functionName: "getPendingRewards",
    args: [address],
  });

  const { data: balanceDetails, error: errorGetStaked } = useReadContract({
    address: contractAddress,
    abi: ABI,
    functionName: "getStakedAmount",
    args: [address],
  });
  const { data: lastStakeStartTime } = useReadContract({
    address: contractAddress,
    abi: ABI,
    functionName: "getLastStakedStartTime",
    args: [address],
  });
  const { data: getRemainingTime } = useReadContract({
    address: contractAddress,
    abi: ABI,
    functionName: "getRemainingTime",
    args: [address],
  });
  const { data: getLastStakedClaimTime } = useReadContract({
    address: contractAddress,
    abi: ABI,
    functionName: "getLastStakedClaimedTime",
    args: [address],
  });

  const claimRewards = () => {
    writeContractAsync({
      address: contractAddress,
      abi: ABI,
      functionName: "claimReward",
      args: [],
    });
    console.log(error);
    console.log(isPending);
  };

  const approveTokens = async () => {
    await writeContractAsync({
      address: "0xa975Be9202cE26ddE8bcE29034bE42bcD4861E36",
      abi: [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "currentAllowance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "requestedDecrease",
              type: "uint256",
            },
          ],
          name: "ERC20FailedDecreaseAllowance",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "allowance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "ERC20InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "uint256", name: "balance", type: "uint256" },
            { internalType: "uint256", name: "needed", type: "uint256" },
          ],
          name: "ERC20InsufficientBalance",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "approver", type: "address" },
          ],
          name: "ERC20InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "receiver", type: "address" },
          ],
          name: "ERC20InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
          ],
          name: "ERC20InvalidSender",
          type: "error",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "ERC20InvalidSpender",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "value", type: "bool" }],
          name: "enableDisableTradin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "tradeEnabled",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      functionName: "approve",
      args: [contractAddress, tokensToStake * 10 ** 8],
    }).then(async (res) => {
      console.log(res);
      console.log(isSuccess);
      await writeContractAsync({
        address: contractAddress,
        abi: ABI,
        functionName: "stake",
        args: [Number(tokensToStake) * 10 ** 8, options],
      });
      console.log(isPendingStake);
      console.log(isErrorStake);
    });
    console.log(hash);
    console.log(isSuccess);
  };
  useEffect(() => {
    setAccount(address);
    setPendingRewards(balance);
    console.log(errorGetStaked);
    console.log(lastStakeStartTime);
    console.log(getLastStakedClaimTime);

    if (error !== null) {
      alert(error);
    }

    if (errorStake !== null) {
      alert(errorStake);
    }
    setBalanceDeatils(balanceDetails);
  }, [address, error, balance, errorStake, balanceDetails]);
  return (
    <>
      {/* new started */}

      <div className="main-container" id="stake">
        <div className="text-white rounded-[57px] bg-[#1C1C1E] mt-10 relative">
          <div className="grid grid-cols-12 mt-5 gap-8">
            <div className=" col-span-12 xl:col-span-7 xxl:col-span-6 ">
              <div className=" p-6 sm:p-14 xxl:p-20">
                <div>
                  <h2 className="xl:whitespace-nowrap text-[28px] -tracking-[1.54px] md:text-[32px] lg:tracking-normal lg:text-[40px] xl:-mt-10 xxl:-mt-10">
                    <span className="text-brandColor">Stake,</span>{" "}
                    <span className="text-lightPink">Earn,</span>{" "}
                    <span className="text-brandColor">Repeat</span>
                  </h2>
                </div>
                <div>
                  <h1 className="mt-4 text-[44.89px] -tracking-[2.469px] md:text-[85px] xl:tracking-normal xxl:text-[90px] xxl:tracking-[-5.934px] xl:whitespace-nowrap hero-text">
                    Exciting{" "}
                    <span className="text-brandColor"> APY awaits.</span>
                    <span className="text-lightPink">.</span>
                    <span className="text-brandColor">.</span>
                    <br />
                    <span className="text-lightPink">Join the journey!</span>
                  </h1>
                </div>
                <p className=" my-2 sm:my-10 text-[#8A8A8E] font-bold  xxl:text-[22px] xxl:leading-[33px]">
                  {" "}
                  Stake smart, earn smart. Unleash the potential of your assets
                  with a thrilling APY. Your journey to financial growth starts
                  here!.
                </p>

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
                            onChange={(e) => {
                              setTokensToStake(e.target.value);
                            }}
                            placeholder="Enter Amount..."
                            className="font-SourceSans3 bg-brandColor border-[3px] border-brandColor text-white rounded-3xl px-4 py-2 flex-grow hover:bg-dark active:border-b-[3px] active:border-lightPink"
                          />
                        </div>

                        <button
                          onClick={async () => {
                            options || options == 0
                              ? await approveTokens()
                              : alert("select option for duration of staking");
                          }}
                          className="font-SourceSans3 font-bold bg-gradient-to-r from-purple-600 to-fuchsia-500 border-[3px] border-purple-900 text-white text-base sm:text-lg rounded-3xl px-4 py-1.5 hover:from-fuchsia-500 hover:to-purple-600 active:border-b-[3px] active:border-lightPink w-full sm:w-auto mt-2 sm:mt-0"
                        >
                          Stake
                        </button>
                      </div>
                      <div className="flex items-center justify-center mt-2 gap-1">
                        <button
                          onClick={() => {
                            setOptions(0);
                          }}
                          className={`font-SourceSans3 ${
                            options === 0
                              ? "bg-gradient-to-r from-purple-600 to-fuchsia-500"
                              : "black"
                          } border-[3px] border-purple-900 text-white text-sm sm:text-lg rounded-3xl px-3 py-1 hover:from-fuchsia-500 hover:to-purple-600 active:border-b-[3px] active:border-lightPink w-full sm:w-auto mt-2 sm:mt-0`}
                        >
                          1 Month
                        </button>
                        <button
                          onClick={() => {
                            setOptions(1);
                          }}
                          className={`font-SourceSans3 ${
                            options === 1
                              ? "bg-gradient-to-r from-purple-600 to-fuchsia-500"
                              : "black"
                          } border-[3px] border-purple-900 text-white text-sm sm:text-lg rounded-3xl px-3 py-1 hover:from-fuchsia-500 hover:to-purple-600 active:border-b-[3px] active:border-lightPink w-full sm:w-auto mt-2 sm:mt-0`}
                        >
                          3 Months
                        </button>
                        <button
                          onClick={() => {
                            setOptions(2);
                          }}
                          className={`font-SourceSans3 ${
                            options === 2
                              ? "bg-gradient-to-r from-purple-600 to-fuchsia-500"
                              : "black"
                          } border-[3px] border-purple-900 text-white text-sm sm:text-lg rounded-3xl px-3 py-1 hover:from-fuchsia-500 hover:to-purple-600 active:border-b-[3px] active:border-lightPink w-full sm:w-auto mt-2 sm:mt-0`}
                        >
                          6 Months
                        </button>
                        <button
                          onClick={() => {
                            setOptions(3);
                          }}
                          className={`font-SourceSans3 ${
                            options === 3
                              ? "bg-gradient-to-r from-purple-600 to-fuchsia-500"
                              : "black"
                          } border-[3px] border-purple-900 text-white text-sm sm:text-lg rounded-3xl px-3 py-1 hover:from-fuchsia-500 hover:to-purple-600 active:border-b-[3px] active:border-lightPink w-full sm:w-auto mt-2 sm:mt-0`}
                        >
                          12 Months
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid w-full items-center gap-1.5">
                    <div className="border-[3px] border-lightPink rounded-3xl bg-darkBrandColor p-4 sm:p-6 w-full ">
                      <label
                        htmlFor="StakeDetails"
                        className="block text-xl sm:text-2xl font-bold text-lightPink"
                      >
                        Stake Details
                      </label>
                      <div className="flex flex-col sm:flex-row items-center gap-2 mt-1">
                        <label
                          htmlFor="stakeAmount"
                          className="font-bold text-lightPink shrink-0"
                        >
                          Total Staked Amount:
                        </label>
                        <input
                          type="text" // Adjusted type from "Pending Rewards" to a valid input type "text"
                          id="pendingRewards"
                          value={
                            balanceDetails
                              ? Number(balanceDetails) / 10 ** 8
                              : 0
                          }
                          readOnly
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[3px] border-brandColor rounded-3xl bg-brandColor text-white px-4 py-2 "
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-2 mt-1">
                        <label
                          htmlFor="stakeStartTime"
                          className="font-bold text-lightPink shrink-0"
                        >
                          Start Time:
                        </label>
                        <input
                          type="text" // Adjusted type from "Pending Rewards" to a valid input type "text"
                          id="pendingRewards"
                          value={
                            lastStakeStartTime
                              ? new Date(
                                  (lastStakeStartTime.toString() as any) * 1000
                                ).toLocaleString()
                              : 0
                          }
                          readOnly
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[3px] border-brandColor rounded-3xl bg-brandColor text-white px-4 py-2 "
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-2 mt-1">
                        <label
                          htmlFor="stakeLastClaimTime"
                          className="font-bold text-lightPink shrink-0"
                        >
                          Last Claim Time:
                        </label>
                        <input
                          type="text" // Adjusted type from "Pending Rewards" to a valid input type "text"
                          id="pendingRewards"
                          value={
                            getLastStakedClaimTime
                              ? new Date(
                                  (getLastStakedClaimTime.toString() as any) *
                                    1000
                                ).toLocaleString()
                              : 0
                          }
                          readOnly
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[3px] border-brandColor rounded-3xl bg-brandColor text-white px-4 py-2 "
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-2 mt-1">
                        <label
                          htmlFor="stakeAmount"
                          className="font-bold text-lightPink shrink-0"
                        >
                          Reward Due On:
                        </label>
                        <input
                          id="pendingRewards"
                          value={
                            getRemainingTime
                              ? new Date(
                                  (getRemainingTime.toString() as any) * 1000
                                ).toLocaleString()
                              : 0
                          }
                          readOnly
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[3px] border-brandColor rounded-3xl bg-brandColor text-white px-4 py-2 "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid w-full items-center gap-1.5">
                    <div className="border-[3px] border-lightPink rounded-3xl bg-darkBrandColor p-4 w-full">
                      <label
                        htmlFor="Pending Reward"
                        className="block text-xl font-bold text-lightPink"
                      >
                        Pending Rewards
                      </label>
                      <input
                        type="text" // Adjusted type from "Pending Rewards" to a valid input type "text"
                        id="pendingRewards"
                        value={Number(balance) / 10 ** 8}
                        readOnly
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-[3px] border-brandColor rounded-3xl bg-brandColor text-white px-4 py-2 "
                      />
                    </div>
                  </div>
                  <div className=" flex justify-center items-center">
                    <div className="flex w-full items-center space-x-2 mt-4">
                      <button
                        className="font-SourceSans3 bg-gradient-to-r from-purple-600 to-fuchsia-500 border-[3px] border-purple-900 text-white rounded-3xl px-4 py-2 flex-1 hover:from-purple-600 hover:to-fuchsia-500 active:border-b-[3px] active:border-lightPink font-bold text-xl"
                        onClick={() => {
                          claimRewards();
                        }}
                      >
                        Claim Rewards
                      </button>
                      <button
                        onClick={async () => {
                          await writeContractStake({
                            address: contractAddress,
                            abi: ABI,
                            functionName: "unstake",
                            args: [],
                          });
                        }}
                        className="font-SourceSans3 bg-gradient-to-r from-purple-600 to-fuchsia-500 border-[3px] border-purple-900 text-white rounded-3xl px-4 py-2 flex-1 hover:from-purple-600 hover:to-fuchsia-500 active:border-b-[3px] active:border-lightPink font-bold text-xl"
                      >
                        Unstake
                      </button>
                      <button
                        onClick={async () => {
                          await writeContractStake({
                            address: contractAddress,
                            abi: ABI,
                            functionName: "instantUnstake",
                            args: [],
                          });
                        }}
                        className="font-SourceSans3 bg-gradient-to-r from-purple-600 to-fuchsia-500 border-[3px] border-purple-900 text-white rounded-3xl px-4 py-2 flex-1 hover:from-purple-600 hover:to-fuchsia-500 active:border-b-[3px] active:border-lightPink font-bold text-xl"
                      >
                        Instant Unstake
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-span-12 xl:col-span-5 xxl:col-span-6 relative">
              <img
                src="/images/VRL.png"
                className=" xl:absolute xl:bottom-0 w-[60%] ml-auto mr-auto xl:w-[76%] xl:right-[53px] xxl:w-[80%] rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* new ended */}
    </>
  );
}

export default Staking;
