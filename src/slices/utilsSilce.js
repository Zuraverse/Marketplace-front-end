import { ethers } from "ethers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

let provider;
if (typeof window.ethereum !== 'undefined') {
     provider = new ethers.providers.Web3Provider(window.ethereum);
    // Continue with your logic using the provider
  } else {
    // Handle the case where the provider is not available
    console.error("Web3 provider (window.ethereum) not found!");
    provider = new ethers.providers.JsonRpcProvider();
  }

export const getBlockChainName = createAsyncThunk("getUtilsData", async () => {
    const network = await provider.getNetwork();
    const ChainNo = network.chainId;
    const chooseChain = ["Polygon", "Ethereum"];
    const chainName = chooseChain.filter((name, index) => {
        if (ChainNo === 137 && index === 0)
            return true

        if (ChainNo === 1 && index === 1) {
            return true;
        }
        return false;
    });
    return chainName
})

export const getBalance = createAsyncThunk("getBalance", async (address) => {
    const balance = await provider.getBalance(address);
    const eathervalue = ethers.utils.formatEther(balance);
    return eathervalue
})

export const utilsSlice = createSlice({
    name: "utils",
    initialState: {
        currentBlockChainName: null,
        walletBalance: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBlockChainName.fulfilled, (state, action) => {
                state.currentBlockChainName = action.payload
            })
            .addCase(getBalance.fulfilled, (state, action) => {
                state.walletBalance = action.payload
            })

    }
})

export default utilsSlice.reducer