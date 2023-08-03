import React from "react";
import logo from "../../../images/footer-logo.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-row-logo">
          <img src={logo} alt="" />
        </div>

        <div className="footer-row-column2">
          <div className="footer-row-column2-col">
            <h3>MarketPlace</h3>
            <a href="#">Popular Collections</a>
            <a href="#">Art</a>
            <a href="#">Gaming</a>
            <a href="#">PFPs</a>
          </div>
          <div className="footer-row-column2-col">
            <h3>Company</h3>
            <a href="#">About us</a>
            <a href="#">Career</a>
            <a href="#">Ventures</a>
            <a href="#">Grants</a>
          </div>
          <div className="footer-row-column2-col">
            <h3>Resources</h3>
            <a href="#">Blogs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">FAQs</a>
          </div>
          <div className="footer-row-column2-col">
            <h3>NFTs</h3>
            <a href="#">Zura Token</a>
            <a href="#">H.A.C.k</a>
            <a href="#">ZURIAN</a>
            <a href="#">CONZURA</a>
          </div>
        </div>
      </div>
      <div className="footer-second-row">
        <p>©2023 Zuraverse, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
