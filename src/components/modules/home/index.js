import React from "react";
import { Link } from 'react-router-dom'
import { useAccount } from 'wagmi'

import { useConnectModal } from "@rainbow-me/rainbowkit";
import WagmiUtils from "../../../blockchain/wagmiUtils";
import '@rainbow-me/rainbowkit/styles.css';
import TabSection from './TabSection'
import HeaderCommon from './HeaderCommon'
import YourApp from './MyApp'
import hero_bg_1 from '../../../assets/images/banner/hero_bg_1.png'
import hero_bg_2 from '../../../assets/images/banner/hero_bg_2.png'
import robot from '../../../assets/images/banner/layer18.png'
import mobile_banner from '../../../assets/images/banner/mob-banner1.png'
import { Alert } from "@mui/material";

const Home = () => {
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal();
  return (
    <>
      <HeaderCommon />
      <section className="hero_main_section">
        <img src={hero_bg_1} alt="" className="hero_bg_1" />
        <img src={hero_bg_2} alt="" className="hero_bg_2" />

        <div className="container">
          <div className="row banner_desktop">
            <div className="col-12 mintWrapper">
              <img src={robot} alt="layer16" className="robot img_move" />
              <div className="mint-box row img_bg">
                <div className="col-md-5 sm-hidden">
                </div>
                <div className="col-lg-7 col-md-12 text-wrapper">
                  <h2>
                    Discover the vast universe
                    <br /> of
                    <span> Hippie Aliens Cosmic Klub</span>
                  </h2>
                  <p>
                    H.A.C.K is the gateway to Zuraverse. H.A.C.K NFTs introduce
                    Zuraverse to the Web3 audience.
                  </p>
                  <p>
                    {' '}
                    They are the stepping stone in the formation of Zuraverse.
                  </p>

                  <div className="hero_buttons_row" style={{ display: "flex" }}>
                    {!isConnected ? (<WagmiUtils compo={<YourApp classes={"theme_btn hero_blue_btns"} />} />)
                      : (<button className="theme_btn hero_blue_btns"> <Link style={{ textDecoration: "none", color: "#FEFEFE" }} to={`/collection`}> Free Mint </Link></button>)}
                    <button className="theme_btn theme_dark_btn btn_margin_left" onClick={openConnectModal} type="button">
                      {' '}
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row mint_box_mob">
            <div className='col-lg-6 '>
              <img src={mobile_banner} className='img-fluid ' alt='' />
            </div>
            <div className="col-lg-6 col-md-12 text-wrapper">
              <h2>
                Discover the vast universe
                <br /> of
                <span> Hippie Aliens Cosmic Klub</span>
              </h2>
              <p>
                H.A.C.K is the gateway to Zuraverse. H.A.C.K NFTs introduce
                Zuraverse to the Web3 audience.
              </p>
              <p>
                {' '}
                They are the stepping stone in the formation of Zuraverse.
              </p>

              <div className="hero_buttons_row">

              </div>
            </div>
          </div>
          <TabSection />
        </div>
      </section>
    </>
  )
}

export default Home
