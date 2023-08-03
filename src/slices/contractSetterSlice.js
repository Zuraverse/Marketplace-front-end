import { ethers } from "ethers";
import abi from "../blockchain/abi.json"
import { ByteCode } from "../blockchain/byteCode";
import AlertComponent from "../sharedComponent/Alert";

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
const contractAddress = "0x78728b5754724551e86fd91E73e1666Ad386A0e7"
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

export const handleMintNft = async (merkleRoot) => {
    const tokenId = 1;
    const uri = "https://bafybeibcm4jp3cdchok6wf2t4jyx3g2qljavnpsjmq3ip3fednayle4yoy.ipfs.dweb.link/1.json";
    const proof = [
        "0xbe174fd7e07bf79075c9914efe8253e46f147a0483a957547b08c1b06eef3b5f",
        "0x2188be489f1df039a314a2e54579cf206d770d3be7ad48ef2a8d2c5f0ea192b6",
        "0x80eeffe818197df2cad09cc3b7341db1744ab18280491e38017ec22cd05a222a"
      ] 
    // console.log(merkleRoot)
    try {
        const tx = await contract.freeMint(tokenId, uri,proof);
        await tx.wait();
        console.log('NFT minted successfully!');
    } catch (error) {
        console.error('Error minting NFT:', error);
    }
}
