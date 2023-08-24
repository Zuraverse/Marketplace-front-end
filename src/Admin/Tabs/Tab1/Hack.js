import { Box, Breadcrumbs, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { getMerkleRoot } from '../../../slices/contractGetterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { allowPaidMinting, deployContract, setMerkleRoot, whitelistMinting, setSpecialPriceFunc, specialMinting, setCurrentNftPriceFunc } from '../../../slices/contractSetterSlice';
import AlertComponent from '../../../sharedComponent/Alert';
import Papa from 'papaparse';
import { MerkleTree } from "merkletreejs"
import { keccak256 } from "keccak256"
import { utils, ethers } from "ethers"

const Hack = () => {
  const dispatch = useDispatch()
  const { merkleRoot, paidMintAllowed, whitelistMintAllowed, specialMintAllowed } = useSelector((state) => state.getterFunc)
  const [markleRootValue, setMarkleRootValue] = useState("")
  const [isPaidMintingAllowed, setIsPaidMintingAllowed] = useState(paidMintAllowed);
  const [isWhitelistMintAllowed, setIsWhitelistMintAllowed] = useState(whitelistMintAllowed);
  const [isSpecialMintAllowed, setIsSpecialMintAllowed] = useState(specialMintAllowed);
  const [maxFreeNfts, setMaxFreeNfts] = useState("");
  const [listPrice, setListPrice] = useState("");
  const [totalNftSupply, setTotalNftSupply] = useState("");
  const [specialPrice, setSpecialPrice] = useState("");
  const [updateCurrentNftprice, setUpdateCurrentNftPrice] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [rootHash, setRootHash] = useState("");



  const handlePaidMintingSwitch = (event) => {
    setIsPaidMintingAllowed(event.target.checked);
    allowPaidMinting(event.target.checked)
      .then((alertData) => {
        setAlertType(alertData.type);
        setAlertMessage(alertData.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleWhitelistMintSwitch = async (event) => {
    setIsWhitelistMintAllowed(event.target.checked);

    whitelistMinting(event.target.checked)
      .then((alertData) => {
        setAlertType(alertData.type);
        setAlertMessage(alertData.message);
      })
      .catch((error) => {
        console.error(error);
      });

  };
  const handleSpecialMintingSwitch = (event) => {
    setIsSpecialMintAllowed(event.target.checked);
    specialMinting(event.target.checked)
      .then((alertData) => {
        setAlertType(alertData.type);
        setAlertMessage(alertData.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeploy = () => {
    deployContract({ arg1: maxFreeNfts, arg2: listPrice, arg3: totalNftSupply })
      .then((alertData) => {
        setAlertType(alertData.type);
        setAlertMessage(alertData.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGetMarkleRoot = () => {
    dispatch(getMerkleRoot())
  }
  const handleSetMarkleRoot = () => {
    setMerkleRoot(markleRootValue)
      .then((alertData) => {
        setAlertType(alertData.type);
        setAlertMessage(alertData.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const handleUpdateSpecialPrice = () => {
    setSpecialPriceFunc(specialPrice)
      .then((alertData) => {
        setAlertType(alertData.type);
        setAlertMessage(alertData.message);
      })
      .catch((error) => {
        console.error(error);
      });

  }
  const handleUpdateCurrentNftPrice = () => {
    setCurrentNftPriceFunc(updateCurrentNftprice)
      .then((alertData) => {
        setAlertType(alertData.type);
        setAlertMessage(alertData.message);
      })
      .catch((error) => {
        console.error(error);
      });

  }
  const handleAlertClose = () => {
    setAlertType('');
    setAlertMessage('');
  };
  useEffect(() => {
    setIsWhitelistMintAllowed(whitelistMintAllowed);
  }, [whitelistMintAllowed]);


  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));

  const handleFileUpload = () => {

  }

  const handleUploadCsv = (event) => {
    console.log("first")

    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (results) => {
        const data = results.data;
        const result = data.flat();

        const leafNodes = result.map(addr => utils.keccak256(utils.toUtf8Bytes(addr)));
        console.log(leafNodes)

        const merkleTree = new MerkleTree(leafNodes, utils.keccak256, { sortPairs: true });

        const rootHash = merkleTree.getHexRoot();
        setRootHash(rootHash)
      }
    })
  }




  const label = { inputProps: { 'aria-label': 'Color switch demo' } };

  return (
    <>
      {alertType && alertMessage && (
        <AlertComponent alertMessage={alertMessage} alertType={alertType} handleAlertClose={handleAlertClose} />
      )}

      <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" size="lg">
          <Link underline="hover" style={{ textDecoration: "none", color: "#AdA7A7", fontSize: "20px", fontFamily: "Poppins" }} to="/admin/dashboard/">
            Dashboard
          </Link>
          <Typography style={{ textDecoration: "none", color: "black", fontSize: "20px", fontFamily: "Poppins" }} >H.A.C.K</Typography>
        </Breadcrumbs>


        <Box sx={{ padding: "30px" }}>
          <Box sx={{ my: "15px" }}>
            <Typography variant='h4' sx={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "Bold", mb: "15px", letterSpacing: "0.4px", color: "#000000" }}>Merkle Root</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mb: "15px" }}>
              <Typography variant='p' sx={{ fontFamily: "Roboto", fontSize: "15px", color: "#747474", letterSpacing: "0.4px" }}>getMerkleRoot </Typography>
              <Button onClick={handleGetMarkleRoot} variant="contained" sx={{ backgroundColor: "#4340DA", border: "none", borderRadius: "8px", width: "200px", height: "40px", textTransform: "capitalize", fontFamily: "Roboto", fontSize: "15px", fontWeight: "medium" }}>Get</Button>
              {merkleRoot ? (<Typography variant='span' sx={{ fontFamily: "Roboto", fontSize: "18px", color: "#747474", letterSpacing: "0.6px", overflowWrap: "break-word" }}>{merkleRoot} </Typography>) : null}
            </Box>
            <div className='flex mb-3'>
              <div className="block mb-2 text-sm font-medium text-black " for="file_input" >Upload CSV File</div>
              {/* <input
                type="file"
                name="file"
                className="custom-file-input"
                id="exampleInputFile"
                required
                onChange={handleUploadCsv}
              /> */}

              <input
                type="file"
                name="file"
                id="exampleInputFile"
                className="block w-full text-sm text-gray-900 border border-[#4340DA] rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                onChange={handleUploadCsv} />
              {rootHash ? (<Typography variant='span' sx={{ fontFamily: "Roboto", fontSize: "18px", color: "#747474", letterSpacing: "0.6px", overflowWrap: "break-word" }}>{rootHash} </Typography>) : null}
            </div>


            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography variant='p' sx={{ fontFamily: "Roboto", fontSize: "15px", color: "#747474", letterSpacing: "0.4px" }}>setMerkleRoot </Typography>
              <TextField onChange={(e) => setMarkleRootValue(e.target.value)} size="small" variant="outlined" sx={{
                width: "100%", fontSize: "14px", "@media (min-width: 890px)": {
                  width: "415px",
                  maxWidth: "415px",
                  fontSize: "16px",
                },
              }} />
              <Button onClick={handleSetMarkleRoot} variant="contained" sx={{ my: "5px", backgroundColor: "#4340DA", border: "none", borderRadius: "8px", width: "200px", height: "40px", textTransform: "capitalize", fontFamily: "Roboto", fontSize: "15px", fontWeight: "medium" }}>Set</Button>
            </Box>

          </Box>


          <Box sx={{}}>
            <Typography variant='h4' sx={{ fontFamily: "Roboto", fontSize: "20px", mb: "15px", letterSpacing: "0.4px", color: "#000000" }}>Deploy Smart Contract</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography variant='p' sx={{ fontFamily: "Roboto", fontSize: "15px", color: "#747474", letterSpacing: "0.4px" }}>Max. Free NFTs</Typography>
              <TextField onChange={(e) => setMaxFreeNfts(e.target.value)} size="small" variant="outlined" sx={{
                width: "100%", fontSize: "14px", "@media (min-width: 890px)": {
                  width: "415px",
                  maxWidth: "415px",
                  fontSize: "16px",
                },
              }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", my: "10px" }}>
              <Typography variant='p' sx={{ fontFamily: "Roboto", fontSize: "15px", color: "#747474", letterSpacing: "0.4px" }}>LISTPRICE (wei)</Typography>
              <TextField onChange={(e) => setListPrice(e.target.value)} size="small" variant="outlined" sx={{
                width: "100%", fontSize: "14px", "@media (min-width: 890px)": {
                  width: "415px",
                  maxWidth: "415px",
                  fontSize: "16px",
                },
              }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography variant='p' sx={{ fontFamily: "Roboto", fontSize: "15px", color: "#747474", letterSpacing: "0.4px" }}>Total NFT Supply</Typography>
              <TextField onChange={(e) => setTotalNftSupply(e.target.value)} size="small" variant="outlined" sx={{
                width: "100%", fontSize: "14px", "@media (min-width: 890px)": {
                  width: "415px",
                  maxWidth: "415px",
                  fontSize: "16px",
                },
              }} />
            </Box>
            <Button onClick={handleDeploy} variant="contained" sx={{ my: "15px", backgroundColor: "#4340DA", border: "none", borderRadius: "8px", width: "200px", height: "40px", textTransform: "capitalize", fontFamily: "Roboto", fontSize: "15px", fontWeight: "medium" }}>Depoly</Button>

          </Box>


          <Box sx={{ my: "15px" }}>
            <Typography variant='h4' sx={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "Bold", mb: "15px", letterSpacing: "0.4px", color: "#000000" }}>Whitelisting</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mb: "15px" }}>
              <Typography variant='p' sx={{ fontFamily: "Roboto", fontSize: "15px", color: "#747474", letterSpacing: "0.4px" }}>Allow Whitelisted Minting  </Typography>
              <Switch {...label} checked={isWhitelistMintAllowed} onChange={handleWhitelistMintSwitch} color="secondary" />
            </Box>
          </Box>
          <Box sx={{ my: "15px" }}>
            <Typography variant='h4' sx={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "Bold", mb: "15px", letterSpacing: "0.4px", color: "#000000" }}>Minting</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mb: "15px" }}>
              <Typography variant='p' sx={{ fontFamily: "Roboto", fontSize: "15px", color: "#747474", letterSpacing: "0.4px" }}>Allow Paid Minting  </Typography>
              <Switch {...label} checked={isPaidMintingAllowed} onChange={handlePaidMintingSwitch} color="secondary" />
            </Box>
          </Box>

          <Box sx={{ my: "15px" }}>
            <Typography variant='h4' sx={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "Bold", mb: "15px", letterSpacing: "0.4px", color: "#000000" }}>Price</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mb: "15px" }}>
              <Typography variant='p' sx={{ fontFamily: "Roboto", fontSize: "15px", color: "#747474", letterSpacing: "0.4px" }}>Update Current NFT Price  </Typography>
              <TextField onChange={(e) => setUpdateCurrentNftPrice(e.target.value)} size="small" variant="outlined" sx={{
                width: "100%", fontSize: "14px", "@media (min-width: 890px)": {
                  width: "415px",
                  maxWidth: "415px",
                  fontSize: "16px",
                },
              }} />
            </Box>
          </Box>
          <Button onClick={handleUpdateCurrentNftPrice} variant="contained" sx={{ my: "15px", backgroundColor: "#4340DA", border: "none", borderRadius: "8px", width: "200px", height: "40px", textTransform: "capitalize", fontFamily: "Roboto", fontSize: "15px", fontWeight: "medium" }}>Update</Button>

          <Box sx={{ backgroundColor: "#BEBCF6" }}>
            <Box sx={{ my: "15px" }}>
              <Typography variant='h4' sx={{ fontFamily: "Roboto", fontSize: "20px", fontWeight: "Bold", mb: "15px", letterSpacing: "0.4px", color: "#000000" }}>Special Minting</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mb: "15px" }}>
                <Typography variant='p' sx={{ fontFamily: "Roboto", fontSize: "15px", color: "#747474", letterSpacing: "0.4px" }}>Allow Special Minting  </Typography>
                <Switch {...label} checked={isSpecialMintAllowed} onChange={handleSpecialMintingSwitch} color="secondary" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mb: "15px" }}>
                <Typography variant='p' sx={{ fontFamily: "Roboto", fontSize: "15px", color: "#747474", letterSpacing: "0.4px" }}>Update Special Price  </Typography>
                <TextField onChange={(e) => setSpecialPrice(e.target.value)} size="small" variant="outlined" sx={{
                  width: "100%", fontSize: "14px", "@media (min-width: 890px)": {
                    width: "415px",
                    maxWidth: "415px",
                    fontSize: "16px",
                  },
                }} />
              </Box>
              <Button onClick={handleUpdateSpecialPrice} variant="contained" sx={{ my: "15px", backgroundColor: "#4340DA", border: "none", borderRadius: "8px", width: "200px", height: "40px", textTransform: "capitalize", fontFamily: "Roboto", fontSize: "15px", fontWeight: "medium" }}>Update</Button>
            </Box>
          </Box>
        </Box>

      </div>
    </>

  )
}

export default Hack