import { Box, Breadcrumbs, Toolbar } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const drawerWidth = 240;

const Tab1 = () => {
    return (
        <>
                    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
                        <Breadcrumbs separator="—" aria-label="breadcrumbs" size="lg">
                            <NavLink to="/admin/dashboard" style={{ textDecoration: "none", color: "black", fontSize: "24px", fontFamily: "Poppins" }}>Admin Dashboard</NavLink>
                        </Breadcrumbs>
                        <Box sx={{ display: "flex", flexDirection: "column", margin: "20px", gap: "20px" }}>
                            <Link to="/admin/dashboard/nftCollections" style={{ textDecoration: "none", fontFamily: "Poppins", color: "#0B63F8", fontSize: "20px",letterSpacing:"0.6px" }}>Nft Collections</Link>
                            <Link to="/admin/dashboard/gamePass" style={{ textDecoration: "none", fontFamily: "Poppins", color: "#0B63F8", fontSize: "20px",letterSpacing:"0.6px" }}>Game Pass</Link>
                            <Link to="/admin/dashboard/hack" style={{ textDecoration: "none", fontFamily: "Poppins", color: "#0B63F8", fontSize: "20px",letterSpacing:"0.6px" }}>H.A.C.K</Link>
                        </Box>
                    </div>

        </>
    )
}

export default Tab1