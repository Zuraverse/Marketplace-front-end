import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NftCollection = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" size="lg">
        <Link underline="hover" style={{ textDecoration: "none", color: "#AdA7A7", fontSize: "20px", fontFamily: "Poppins" }} to="/admin/dashboard/">
          Dashboard
        </Link>
        <Typography style={{ textDecoration: "none", color: "black", fontSize: "20px", fontFamily: "Poppins" }} >Nft Collection</Typography>
      </Breadcrumbs>

    </div>
  )
}

export default NftCollection