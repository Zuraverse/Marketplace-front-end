
export const contractDetails = {
	HACK: {
		name: 'HACK',
		tokenImage: 'token icon image path',
		abi: [
            {
                "inputs": [
                    {
                        "internalType": "bool",
                        "name": "_pause",
                        "type": "bool"
                    }
                ],
                "name": "allowPaidMinting",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bool",
                        "name": "_pause",
                        "type": "bool"
                    }
                ],
                "name": "allowSpecialMinting",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bool",
                        "name": "_pause",
                        "type": "bool"
                    }
                ],
                "name": "allowWhitelistMinting",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "maxWhitelistNfts",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_listPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_maxAmount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_fromTokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_toTokenId",
                        "type": "uint256"
                    }
                ],
                "name": "BatchMetadataUpdate",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "currentTokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "uri",
                        "type": "string"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "_merkleProof",
                        "type": "bytes32[]"
                    }
                ],
                "name": "freeMint",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "MetadataUpdate",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "currentTokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "uri",
                        "type": "string"
                    }
                ],
                "name": "mint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "_merkleRoot",
                        "type": "bytes32"
                    }
                ],
                "name": "setMerkleRoot",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_from",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_upto",
                        "type": "uint256"
                    }
                ],
                "name": "setMintIdsPerRound",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "currentTokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "uri",
                        "type": "string"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "_merkleProof",
                        "type": "bytes32[]"
                    }
                ],
                "name": "specialMint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_listPrice",
                        "type": "uint256"
                    }
                ],
                "name": "updateListPrice",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_price",
                        "type": "uint256"
                    }
                ],
                "name": "updateSpecialPrice",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getApproved",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getListPrice",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getMaxWhitelist",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getMerkleRoot",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getMintFromId",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getMintIdsPerRound",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getMintUptoId",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getSpecialPrice",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "gettokenMintStatus",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isPaidMintAllowed",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isSpecialMintAllowed",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isWhitelistMintAllowed",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "specialMintClaimed",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "tokenByIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "tokenOfOwnerByIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalTokensMinted",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32[]",
                        "name": "_merkleProof",
                        "type": "bytes32[]"
                    }
                ],
                "name": "userWhitelisted",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "whitelistClaimed",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ],
		address: {
			5: '0xBBB70d3a5a2139ba44b891c02559f65c899E9937'
		}
	}



}

export const mintAddress = [
    {
        address1: "0xa7A7cc05b7b1Bb9a91B330A83A7A4888C8Cd04F4",
        uri:"/uri/0",
    },

    {
        address1:"0x75E0538B84a84625e6E75AcF1e61d0B816098A95",
        uri:"/uri/0",
        data:["0x6791224a17d83ffdb6caf3d9ec452997222a33ea867f22054a929e2dd189bc5b","0x965f68691d783d394bd5f4a6bf4c48b059a46c8408853005028e8de90e4700dc","0xedb0c1d84709e427cb1545a4eb8a9854215dd6822424ad641c98e5330a88d138","0xb305693073a921eca8c831368d670c45a875b2517f33173653f348bff21f17a2"]
    },
    {
        address1:"0xFF3A46D03BDF5D34A6a8c51546b5711bb85f7B1d",
        uri:"/uri/1",
        data:["0xee288eb2608e5d6bf031fed06b0de37c966a9037696195226f424d723d80ec43","0x965f68691d783d394bd5f4a6bf4c48b059a46c8408853005028e8de90e4700dc","0xedb0c1d84709e427cb1545a4eb8a9854215dd6822424ad641c98e5330a88d138","0xb305693073a921eca8c831368d670c45a875b2517f33173653f348bff21f17a2"]
    },
    {
        address1:"0xd7b7C662F52f99dbE9c3C6b43F9cF97bcfAb510F",
        uri:"/uri/1",
        data:["0xee288eb2608e5d6bf031fed06b0de37c966a9037696195226f424d723d80ec43","0x965f68691d783d394bd5f4a6bf4c48b059a46c8408853005028e8de90e4700dc","0xedb0c1d84709e427cb1545a4eb8a9854215dd6822424ad641c98e5330a88d138","0xb305693073a921eca8c831368d670c45a875b2517f33173653f348bff21f17a2"]
    },
    {
        address1:"0xA1386847c9baE68405cbdf52fBac3C5Bd699ae76",
        uri:"/uri/1",
        data:["0x2d20e89d333c06c39f501db8d21075fc52320823239202c9ed7e0a2605ec4218","0x476edad135a1c0f1cdbc49c6abbe5430a99a70cfb953390b5b3c006ebf4a2a91","0xedb0c1d84709e427cb1545a4eb8a9854215dd6822424ad641c98e5330a88d138","0xb305693073a921eca8c831368d670c45a875b2517f33173653f348bff21f17a2"]
    },
    {
        address1:"0xb7eb58Dfa8787F4D89DEE4004CA5A8b671139a47",
        uri:"/uri/1",
        data:["0xb8996760a63df42f1a00bd6d698931a92765dffc56f86d5f0a8423854a216340","0x476edad135a1c0f1cdbc49c6abbe5430a99a70cfb953390b5b3c006ebf4a2a91","0xedb0c1d84709e427cb1545a4eb8a9854215dd6822424ad641c98e5330a88d138","0xb305693073a921eca8c831368d670c45a875b2517f33173653f348bff21f17a2"]
    },
    {
        address1:"0xeF40621A6fF2046a9c66E20FCC1E12A48Eb56a2e",
        uri:"/uri/1",
        data:["0x04c1248b3dfda52627a6b44b01b2f5ea867eed3423af28431ba8db54d819b22c","0x1eb334a29d12f592dd7818abc6ca3ff2f4219e2b39f27aea7e50a93da00129a6","0x461ee9be29faf4d067ab5e690385161054e876e4add8d2faf675a76243091f7e","0xb305693073a921eca8c831368d670c45a875b2517f33173653f348bff21f17a2"]
    },
    {
        address1:"0x00Dd4cE8a3Ba697a17c079589004446d267435df",
        uri:"/uri/1",
        data:["0x516347f0aec383c1df5f193dbcef205d2f499c128900ec6f7df5e667628af803","0x1eb334a29d12f592dd7818abc6ca3ff2f4219e2b39f27aea7e50a93da00129a6","0x461ee9be29faf4d067ab5e690385161054e876e4add8d2faf675a76243091f7e","0xb305693073a921eca8c831368d670c45a875b2517f33173653f348bff21f17a2"]
    },
    {
        address1:"0xEc5dbc566B445D955505DEb5A14088A5E23C46b0",
        uri:"/uri/1",
        data:["0x2cf8ca7ce0673cc87ad8dfc430ccfa4163ab94ff3ac6a4338dbe3cf046dac1b7","0xbaaf7a12a4ad4ca9e4c0875ffb62d52dafbe266a795c180a699513b9abea8747","0x461ee9be29faf4d067ab5e690385161054e876e4add8d2faf675a76243091f7e","0xb305693073a921eca8c831368d670c45a875b2517f33173653f348bff21f17a2"]
    },
    {
        address1:"0x72e90C673D456FaC8f4D5E65A18c443554d1F434",
        uri:"/uri/1",
        data:["0x97c832e5a9fa707fd2110f7a28964ee96834cec9f5fc1bcf301fe9796443035c","0xbaaf7a12a4ad4ca9e4c0875ffb62d52dafbe266a795c180a699513b9abea8747","0x461ee9be29faf4d067ab5e690385161054e876e4add8d2faf675a76243091f7e","0xb305693073a921eca8c831368d670c45a875b2517f33173653f348bff21f17a2"]
    },
    {
        address1:"0xe42f43004B3Cd525c414852C0A26f6ba98420759",
        uri:"/uri/1",
        data:["0xaf64b91d4f25d4760495a83a8f47eb890651de17c703ad8a7419d95ddb7e29bd","0xc89d53513666f49e0490deff139d94a5180aee24df08fe434df063850e06c779","0xed8c7e2115287b64be7e95cfc8496412c4a67b2f66077c8c26f8ff8b4b76fe7f","0x22dd82887fca6ada6d634a66fc58f8d16fc99d06c2a307ff7467a2e836105ef7"]
    },
    {
        address1:"0x0DC74caBcfB00ab5Fdeef60088685A71fef97003",
        uri:"/uri/1",
        data:["0x030f2563e5ff1a792648301d13e538fb4a2439a3e84033fa0a0be4edef1d828e","0xc89d53513666f49e0490deff139d94a5180aee24df08fe434df063850e06c779","0xed8c7e2115287b64be7e95cfc8496412c4a67b2f66077c8c26f8ff8b4b76fe7f","0x22dd82887fca6ada6d634a66fc58f8d16fc99d06c2a307ff7467a2e836105ef7"]
    },
    {
        address1:"0xba98A46FA4433C46CE35a2c389DDd22042893440",
        uri:"/uri/1",
        data:["0xa85a3c8bddc0be9bd02ad6cc51bdc1581bda1e3f1f676e3d0961f02ef0eac33c","0x4645079f7b50a1a20795749e2bac0ddc7c70d608ce3838696ea8735d3a060f77","0xed8c7e2115287b64be7e95cfc8496412c4a67b2f66077c8c26f8ff8b4b76fe7f","0x22dd82887fca6ada6d634a66fc58f8d16fc99d06c2a307ff7467a2e836105ef7"]
    },
    {
        address1:"0xfe42de0fad386dBAbF31C994C1b3B20CEEdba0eA",
        uri:"/uri/1",
        data: ["0xc6fd4a171d8b49ecc1bde5b6e3e682c47d14dcaba31145ad378442e9e056d779","0x4645079f7b50a1a20795749e2bac0ddc7c70d608ce3838696ea8735d3a060f77","0xed8c7e2115287b64be7e95cfc8496412c4a67b2f66077c8c26f8ff8b4b76fe7f","0x22dd82887fca6ada6d634a66fc58f8d16fc99d06c2a307ff7467a2e836105ef7"]
    },
    {
        address1:"0xf387229980fFCC03300f10aa229b9A2be5ab1D40",
        uri:"/uri/1",
        data:["0x944575a0dec849c8e8c640c517c9302ec7c6b6f0f5d57bd8e03923288ce82c0c","0x22dd82887fca6ada6d634a66fc58f8d16fc99d06c2a307ff7467a2e836105ef7"]
    },
    {
        address1:"0xe36051f8bF9498D2Ac7506D8cc40DB60D6E70571",
        uri:"/uri/1",
        data:["0x944575a0dec849c8e8c640c517c9302ec7c6b6f0f5d57bd8e03923288ce82c0c","0x22dd82887fca6ada6d634a66fc58f8d16fc99d06c2a307ff7467a2e836105ef7"]
    },




]
