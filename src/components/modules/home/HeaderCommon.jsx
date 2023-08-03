import React from "react";
import Nav from "react-bootstrap/Nav";
import WalletButtons from "./walletButtons";
import { Box, IconButton } from "@mui/material";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";


const HeaderCommon = () => {
  const navigate = useNavigate()
  const { address, isConnected } = useAccount();

  const { allowAdminAddress} = useSelector((state) => state.custom);

  const handleClick =()=>{
    if (allowAdminAddress.includes(address)) {
      navigate("/admin/dashboard")
    }
    else {
      navigate("/profile")
    }
    
  }
  return (
    <>
      <Nav style={{display:"flex",justifyContent:"end",alignItems:"center",padding:"10px 30px"}}>
          <WalletButtons />
          {isConnected ?(
            <Box className="mx-3 p-0 cursor-pointer" onClick={handleClick}>
            <IconButton sx={{ p: 0 }}>
              <AccountCircleIcon className="fs-2 text-white" />
            </IconButton>
          </Box>
          ):null }
          
      </Nav>
    </>
  );
};

export default HeaderCommon;
