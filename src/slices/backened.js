import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getMerkleProof = createAsyncThunk("getMerkleProof", async ({address} , { rejectWithValue }) => {
    let url = `http://localhost:5000/merkleproofs `
    const config = {
        headers: {
            "Content-Type": "application/json"         //bina config ke cookie nhi set honi dhyan rakhna
        },
        withCredentials: true
    }
    try {
        const response = await axios.post(url, {address},config ); // replace with your API endpoint and data
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})

export const backenedSlice = createSlice({
    name: "pdf",
    initialState: {
        isLoading: false,
        isCreated: false,
        merkleProof: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMerkleProof.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMerkleProof.fulfilled, (state, action) => {
                state.isLoading = false
                state.merkleProof = action.payload.merkleProofs.proof
            })
            .addCase(getMerkleProof.rejected, (state, action) => {
                state.isLoading = false
                state.merkleProof = ""
            })
        
    }
})


export default backenedSlice.reducer


