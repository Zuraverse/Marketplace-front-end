import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getUrl = (id) => {
  if (id < 10) {
    return `${id}.json`;
  } else {
    return `${id}.json`;
  }
  return;
};

export const getAllNftData = createAsyncThunk(
  "getAllNftData",
  async ({ mintFrom, mintUpto, pageNo }) => {
    const baseUrl =
      "https://bafybeibcm4jp3cdchok6wf2t4jyx3g2qljavnpsjmq3ip3fednayle4yoy.ipfs.dweb.link/";
    // const totalSupply = 20
    // console.log(mintFrom)
    // console.log(mintUpto)
    const allNft = [];
    for (let i = mintFrom; i < mintUpto + 1; i++) {
      const url = baseUrl + getUrl(i);
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data)
      allNft.push(data);
    }
    return allNft;
  }
);

export const getSingleNftData = createAsyncThunk(
  "getSingleNftData",
  async (id) => {
    const baseUrl =
      "https://bafybeibcm4jp3cdchok6wf2t4jyx3g2qljavnpsjmq3ip3fednayle4yoy.ipfs.dweb.link/";
    const url = baseUrl + getUrl(id);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

export const ipfsDataSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    allNftData: [],
    singleNftData: {},
    allowAdminAddress: [
      "0xa7A7cc05b7b1Bb9a91B330A83A7A4888C8Cd04F4",
      "0xe36051f8bF9498D2Ac7506D8cc40DB60D6E70571",
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNftData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNftData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allNftData = action.payload;
      })
      .addCase(getAllNftData.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getSingleNftData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleNftData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleNftData = action.payload;
      })
      .addCase(getSingleNftData.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default ipfsDataSlice.reducer;
