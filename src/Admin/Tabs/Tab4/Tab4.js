
import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Tab4 = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <Breadcrumbs separator="—" aria-label="breadcrumbs" size="lg">
          <Link to="/admin/profile" style={{ textDecoration: "none", color: "black", fontSize: "24px", fontFamily: "Poppins" }}>Profile</Link>
        </Breadcrumbs>
      </div>
    </>
  )
}

export default Tab4