import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Tab3 = () => {
  return (
   <>
   <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
    <Breadcrumbs separator="—" aria-label="breadcrumbs" size="lg">
                <Link to="/admin/collection" style={{ textDecoration: "none", color: "black", fontSize: "24px",fontFamily:"Poppins" }}>Collection</Link>
            </Breadcrumbs>
            </div>
   </>
  )
}

export default Tab3