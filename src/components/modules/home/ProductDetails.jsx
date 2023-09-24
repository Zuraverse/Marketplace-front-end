import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { FaGreaterThan } from "react-icons/fa";
import HACk1 from "../../../assets/images/banner/HACK_1.png";
import bg from "../../../assets/images/banner/bg.png";
import Countdown from "react-countdown";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useAccount } from "wagmi";
import HeaderCommon from "./HeaderCommon";
import { getSingleNftData } from "../../../slices/ipfsData";
import { getMerkleProof } from "../../../slices/backened";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <>
        <section className="timer_alert_section">
          <div className="timer_alert_section_inner">
            <h3>Free Mint Ends in</h3>
            <div className="timer_alertnumbers">
              <div className="timer_alertnumbers">
                <div className="timer_alertnumbers_inner">
                  <h5> {days} </h5> <h5> DAYS</h5>
                </div>
                <span className="timer_seprater">:</span>
                <div className="timer_alertnumbers_inner">
                  <h5> {hours}</h5> <h5> HRS</h5>
                </div>
                <span className="timer_seprater">:</span>
                <div className="timer_alertnumbers_inner">
                  <h5> {minutes}</h5>
                  <h5> MINS</h5>
                </div>
                <span className="timer_seprater">:</span>
                <div className="timer_alertnumbers_inner">
                  <h5> {seconds}</h5> <h5> SECS</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [mintAllowed, setMintAllowed] = useState(false);
  const { address, isConnected } = useAccount();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const { singleNftData } = useSelector((state) => state.custom);

  const { merkleProof } = useSelector((state) => state.backenedFunc);
  const whitelistedAddress = merkleProof.whitelistedAddress;

  useEffect(() => {
    dispatch(getSingleNftData(id));
    // Check if merkleProof is not available, then fetch it
    if (isConnected && !merkleProof.whitelistedAddress) {
      dispatch(getMerkleProof({ address }));
    }
  }, [id, address, isConnected, dispatch, merkleProof.whitelistedAddress]);

  useEffect(() => {
    if (whitelistedAddress.length > 0) {
      setMintAllowed(true);
    }
  }, [whitelistedAddress.length]);

  return (
    <>
      <HeaderCommon />
      {singleNftData && (
        <section className="product_detail_main_section">
          <img src={bg} alt="" className="img-fluid bg_img" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="product_detail_page_headings">
                  <h2>
                    Product <br /> Details
                  </h2>

                  <div className="breadcrumb_main">
                    <h3>
                      <Link to="/"> Home</Link>
                      <span>
                        <FaGreaterThan className="icons" />
                      </span>
                      Product Details
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_details_main_row">
              <div className="row ">
                <div className="col-md-4 col-sm-12">
                  <div className="product_details_main_img_box">
                    <img
                      src={`https://ipfs.io/ipfs/bafybeibjgjp45yynomskvrfd3dsvphdmvtx6ssajnqigvinz2xuqmy4c4e/${id}.jpg`}
                      alt=""
                      className="img-fluid DP_img"
                    />
                  </div>
                  <div className="product_details_timer_box_main">
                    <Countdown
                      date={Date.now() + 500000000}
                      renderer={renderer}
                    />

                    {mintAllowed ? (
                      <button className="MINT_NOW_button" onClick={handleShow}>
                        MINT NOW
                      </button>
                    ) : (
                      <button className="MINT_NOW_button" onClick={handleShow}>
                        No Whitelist
                      </button>
                    )}
                  </div>
                </div>
                <div className="col-md-8 col-sm-12">
                  <div className="product_details_main_content_box">
                    <div>
                      <h2>{singleNftData && singleNftData.name}</h2>
                      <p>{singleNftData && singleNftData.description}</p>
                    </div>
                    <div className="product_detail_tabs_section">
                      <Tabs
                        defaultActiveKey="Details"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        style={{ width: "100%" }}
                      >
                        <Tab
                          eventKey="Details"
                          title="Details"
                          className=""
                          style={{ fontFamily: "Abel" }}
                        >
                          <div className="">
                            <div>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="Contract_Address_main">
                                    <div className="product_detail_tab_details_flex_box">
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        Contract Address{" "}
                                      </h3>
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        <span style={{ fontFamily: "Abel" }}>
                                          {" "}
                                          0x2953...4963
                                        </span>
                                      </h3>
                                    </div>

                                    <div className="product_detail_tab_details_flex_box">
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        Token ID{" "}
                                      </h3>{" "}
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        {" "}
                                        5452996050965136...{" "}
                                      </h3>
                                    </div>
                                    <div className="product_detail_tab_details_flex_box">
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        Token Standard{" "}
                                      </h3>{" "}
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        {" "}
                                        ERC-1155
                                      </h3>
                                    </div>

                                    <div className="product_detail_tab_details_flex_box">
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        Chain{" "}
                                      </h3>{" "}
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        {" "}
                                        Polygon
                                      </h3>
                                    </div>

                                    <div className="product_detail_tab_details_flex_box">
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        Metadata{" "}
                                      </h3>{" "}
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        Centralized{" "}
                                      </h3>
                                    </div>

                                    <div className="product_detail_tab_details_flex_box">
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        Creator Fee{" "}
                                      </h3>
                                      <h3 style={{ fontFamily: "Abel" }}>
                                        5%{" "}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab
                          eventKey="Properties"
                          title="Properties"
                          style={{ fontFamily: "Abel" }}
                        >
                          <div className="Properties_content">
                            <div>
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-6">
                                  <div className="products_tabs_div">
                                    <h2 style={{ fontFamily: "Abel" }}>
                                      Background
                                    </h2>
                                    <p style={{ fontFamily: "Abel" }}>
                                      {singleNftData.attributes &&
                                        singleNftData.attributes[0].value}
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-6">
                                  <div className="products_tabs_div">
                                    <h2 style={{ fontFamily: "Abel" }}>BASE</h2>
                                    <p style={{ fontFamily: "Abel" }}>
                                      {singleNftData.attributes &&
                                        singleNftData.attributes[1].value}
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-6">
                                  <div className="products_tabs_div">
                                    <h2 style={{ fontFamily: "Abel" }}>
                                      Mouth{" "}
                                    </h2>
                                    <p style={{ fontFamily: "Abel" }}>
                                      {singleNftData.attributes &&
                                        singleNftData.attributes[2].value}
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-6">
                                  <div className="products_tabs_div">
                                    <h2 style={{ fontFamily: "Abel" }}>
                                      Headwear
                                    </h2>
                                    <p style={{ fontFamily: "Abel" }}>
                                      {singleNftData.attributes &&
                                        singleNftData.attributes[3].value}
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-6">
                                  <div className="products_tabs_div">
                                    <h2 style={{ fontFamily: "Abel" }}>Eye</h2>
                                    <p style={{ fontFamily: "Abel" }}>
                                      {singleNftData.attributes &&
                                        singleNftData.attributes[4].value}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab
                          eventKey="Bids"
                          title="Bids"
                          style={{ fontFamily: "Abel" }}
                        >
                          <div className="Properties_content">
                            <div>
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-6"></div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Body>
              <div>
                <div>
                  <div>
                    <img src={HACk1} alt="" className="img-fluid DP_img" />
                  </div>
                  <h3>Congratulations! You are a Hippie Alien Now.</h3>
                  <p>
                    You are a proud owner of Hippie Alien Cosmic Klub NFT now,
                    which will give you lots of benefits around the Zuraverse
                    ecosystem. But be aware, with great powers come great
                    responsibility and you would be saving the planet earth with
                    other Hippie Aliens Now.{" "}
                  </p>
                  <div className="">
                    <button className="View_transaction_btn">
                      View transaction on Polygon Scan
                    </button>
                  </div>
                  <div className="">
                    <button className="go_to_home_btn">
                      {" "}
                      <Link to="/"> Go to Zuraverse Home </Link>
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </section>
      )}
    </>
  );
};

export default ProductDetails;
