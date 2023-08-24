import { ethers } from "ethers";
import abi from "../blockchain/abi.json"
import { ByteCode } from "../blockchain/byteCode";
import AlertComponent from "../sharedComponent/Alert";
import { useDispatch } from "react-redux";
import { backenedSlice, getMerkleProof } from "./backened";

let provider;
if (typeof window.ethereum !== 'undefined') {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    // Continue with your logic using the provider
} else {
    // Handle the case where the provider is not available
    console.log("Web3 provider (window.ethereum) not found!");
    provider = new ethers.providers.JsonRpcProvider();
}
const signer = provider.getSigner();
const contractAddress = "0x5698e3485aA0C020B34e4A18b3cb0bf4a5f90Bcc"
const contract = new ethers.Contract(contractAddress, abi, signer);



export const setMerkleRoot = async (data) => {

    try {
        const tx = await contract.setMerkleRoot(data);
        await tx.wait();
        return { type: "success", message: "Merkle root set successfully" }
    } catch (error) {
        return { type: "error", message: error.reason }
    }
}


export const allowPaidMinting = async (data) => {
    try {
        const tx = await contract.allowPaidMinting(data);
        await tx.wait();
        return { type: "success", message: "allowPaidMinting settings set successfully" }
    } catch (error) {
        return { type: "error", message: error.reason }
    }
}
export const whitelistMinting = async (data) => {
    try {
        const tx = await contract.allowWhitelistMinting(data);
        await tx.wait();
        return { type: "success", message: "allowWhitelistMinting settings set successfully" }
    } catch (error) {
        return { type: "error", message: error.reason }
    }
}

export const deployContract = async ({ arg1, arg2, arg3 }) => {
    if (signer) {
        const contractFactory = new ethers.ContractFactory(
            abi,
            ByteCode.ByteCode,
            signer
        )

        try {
            const contract = await contractFactory.deploy(
                arg1, arg2, arg3
            );
            await contract.deployed();

            return { type: "success", message: `Contract deployed at address: ${contract.address}` }
        } catch (error) {
            return { type: "error", message: error.reason }
        }

    }
}
export const specialMinting = async (data) => {
    try {
        const tx = await contract.allowSpecialMinting(data);
        await tx.wait();
        return { type: "success", message: "specialMinting settings set successfully" }
    } catch (error) {
        return { type: "error", message: error.reason }
    }
}

export const setSpecialPriceFunc = async (data) => {
    try {
        const tx = await contract.updateSpecialPrice(data);
        await tx.wait();
        return { type: "success", message: "Special price update successfully" }
    } catch (error) {
        return { type: "error", message: error.reason }
    }
}

export const setCurrentNftPriceFunc = async (data) => {
    try {
        const tx = await contract.updateListPrice(data);
        await tx.wait();
        return { type: "success", message: "Current Nft price update successfully" }
    } catch (error) {
        return { type: "error", message: error.reason }
    }
}

export const handleMintNft = async ({tokenId,address,merkleProof}) => {
    console.log(address)
    console.log(merkleProof)
    const uri = `https://bafybeibcm4jp3cdchok6wf2t4jyx3g2qljavnpsjmq3ip3fednayle4yoy.ipfs.dweb.link/${tokenId}.json`;
    


    try {
        const tx = await contract.freeMint(tokenId, uri, merkleProof);
        await tx.wait();
        // return { type: "success", message: "NFT minted successfully!" }
        console.log('NFT minted successfully!');
    } catch (error) {
        return { type: "error", message: error.reason }
    }
}
