import { addressContract } from "./address";
import { ABI } from "./abi";
import { useWriteContract } from "wagmi";

export const sendContractTransactionToMint = (ammount: string) => {
  const { data: hash, writeContract } = useWriteContract();
  writeContract({
    addressContract,
    abi: ABI,
    functionName: "mint",
    args: [ammount],
  });
  return hash;
};
