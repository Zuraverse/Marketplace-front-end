import { ethers } from "ethers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import abi from "../../src/blockchain/abi.json";

// const provider = new ethers.providers.Web3Provider(window.ethereum);
let provider;
if (typeof window.ethereum !== "undefined") {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  // Continue with your logic using the provider
} else {
  // Handle the case where the provider is not available
  console.log("Web3 provider (window.ethereum) not found!");
  provider = new ethers.providers.JsonRpcProvider();
}

const signer = provider.getSigner();
let contractAddress = "0xE34271aB0Ae4e9938bd99739626eDdf549C3b0E7";
let contract = new ethers.Contract(contractAddress, abi, signer);

export const getContractGetterFunc = createAsyncThunk(
  "contract/getValue",
  async (address) => {
    const paidMintAllowed = await contract.isPaidMintAllowed();
    const whitelistMintAllowed = await contract.isWhitelistMintAllowed();
    const specialMintAllowed = await contract.isSpecialMintAllowed();

    const listPriceBigNo = await contract.getListPrice();

    const listPrice = ethers.utils.formatEther(listPriceBigNo);
    const specialPriceBigNo = await contract.getSpecialPrice();
    const specialPrice = ethers.utils.formatEther(specialPriceBigNo);

    const mintFromBigNo = await contract.getMintFromId();
    const mintFrom = ethers.BigNumber.from(mintFromBigNo).toNumber();

    const mintUptoBigNo = await contract.getMintUptoId();
    const mintUpto = ethers.BigNumber.from(mintUptoBigNo).toNumber();

    const maxWhitelistBigNo = await contract.getMaxWhitelist();
    const maxWhitelist = ethers.BigNumber.from(maxWhitelistBigNo).toNumber();

    const totalTokensMintedBigNo = await contract.totalTokensMinted();
    const totalTokensMinted = ethers.BigNumber.from(
      totalTokensMintedBigNo
    ).toNumber();

    const maxWhitelistedNftsBigNo = await contract.getMaxWhitelist();
    const maxWhitelistedNfts = ethers.BigNumber.from(
      maxWhitelistedNftsBigNo
    ).toNumber();
    return {
      paidMintAllowed,
      whitelistMintAllowed,
      specialMintAllowed,
      listPrice,
      specialPrice,
      mintFrom,
      mintUpto,
      maxWhitelist,
      totalTokensMinted,
      maxWhitelistedNfts,
    };
  }
);
export const getMerkleRoot = createAsyncThunk(
  "contract/getMerkleRoot",
  async (address) => {
    const merkleRoot = await contract.getMerkleRoot();
    return merkleRoot;
  }
);

export const getterSlice = createSlice({
  name: "getterFunc",
  initialState: {
    paidMintAllowed: null,
    whitelistMintAllowed: null,
    specialMintAllowed: null,
    listPrice: null,
    specialPrice: null,
    mintFrom: null,
    mintUpto: null,
    maxWhitelist: null,
    totalTokensMinted: null,
    maxWhitelistedNfts: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContractGetterFunc.fulfilled, (state, action) => {
        const {
          paidMintAllowed,
          whitelistMintAllowed,
          specialMintAllowed,
          listPrice,
          specialPrice,
          mintFrom,
          mintUpto,
          maxWhitelist,
          totalTokensMinted,
          maxWhitelistedNfts,
        } = action.payload;
        state.paidMintAllowed = paidMintAllowed;
        state.whitelistMintAllowed = whitelistMintAllowed;
        state.specialMintAllowed = specialMintAllowed;
        state.listPrice = listPrice;
        state.specialPrice = specialPrice;
        state.mintFrom = mintFrom;
        state.mintUpto = mintUpto;
        state.maxWhitelist = maxWhitelist;
        state.totalTokensMinted = totalTokensMinted;
        state.maxWhitelistedNfts = maxWhitelistedNfts;
      })
      .addCase(getMerkleRoot.fulfilled, (state, action) => {
        state.merkleRoot = action.payload;
      });
  },
});

export default getterSlice.reducer;
