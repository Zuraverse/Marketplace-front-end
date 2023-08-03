import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { FiFilter, FiRefreshCcw } from "react-icons/fi";
import { BsFillGrid3X3GapFill, BsGridFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import {  useAccount } from "wagmi";
import HeaderCommon from "./HeaderCommon";
import { mintAddress } from "../../../blockchain/contractDetails";
import { ethers } from "ethers";
import avatarImg from "../../../images/profile2.jpg";
import { FileDrop } from "react-file-drop";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllNftData } from "../../../slices/ipfsData";

const Profile = () => {
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState(null);
  const [ChainId, setChainId] = useState(null);
  const [mintAllowed, setMintAllowed] = useState(false);
  const mintedMan = mintAddress.filter((obj) => obj.address1 === address);
  const chooseChain = ["Polygon", "Ethereum"];
  const [avatar, setAvatar] = useState(avatarImg);
  const [avatarPreview, setAvatarPreview] = useState(avatarImg);
  const fileInputRef = useRef(null);
  const [activeButton, setActiveButton] = useState("button1");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allNftData, isLoading } = useSelector((state) => state.custom);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const onFileInputChange = (event) => {
    const { files } = event.target;
    console.log(files);
    // do something with your files...
  };

  const chainName = chooseChain.filter((name, index) => {
    if (ChainId === 137 && index === 0) {
      return true;
    }
    if (ChainId === 1 && index === 1) {
      return true;
    }
    return false;
  });
  const copyAddress = () => {
    navigator.clipboard.writeText(address);
  };

  const handleImgUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setAvatar(reader.result);
        setAvatarPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const getBlockChainDetails = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const chainId = await provider.getNetwork();
    const signer = await provider.getSigner();
    // console.log(provider);
    const ChainNo = chainId.chainId;
    const eathervalue = ethers.utils.formatEther(balance);
    if (isConnected) {
      setBalance(eathervalue);
      setChainId(ChainNo);
    }
  };
  getBlockChainDetails(address);

  useEffect(() => {
    dispatch(getAllNftData());
    if (isConnected && mintedMan.length > 0) {
      setMintAllowed(true);
    } 
  }, [isConnected]);

  return (
    <>
      <div className="other_page_header">
        <section className="haeder_main_section ">
          <HeaderCommon />
        </section>
      </div>
      <section>
        <label
          for="dropzone-file"
          className="profile_page_bg_banner"
          style={{ cursor: "pointer" }}
        >
          <input
            id="dropzone-file"
            onChange={onFileInputChange}
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
          <div style={{ lineHeight: "15px" }}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Poppins",
                color: "#D1D5DB",
              }}
            >
              Drop your profile banner here, or{" "}
              <span style={{ color: "#394bf2" }}>click to browse</span>
            </p>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Poppins",
                color: "#D1D5DB",
              }}
            >
              1200*800 (3:4) recommened, up to 5MB
            </p>
          </div>
        </label>
        <div className="container collection_page_bg_banner_content_main">
          <div className="row collection_page_bg_banner_row_bg">
            <div
              className="col-lg-2 col-md-2 col-sm-2 col-3"
              style={{
                padding: "10px",
                border: "2px solid",
                borderImage: "linear-gradient(to right,#5a51fd,#9336e0) 2",
              }}
            >
              <label
                for="dropzone-file"
                style={{ cursor: "pointer", width: "100%", height: "100%" }}
              >
                {/* <img
                  src={avatarImg}
                  alt=""
                  className="img-fluid DP_img DP_img_main"
                /> */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontSize: "8px",
                      color: "#7C3AED",
                      textAlign: "center",
                    }}
                  >
                    Click to browse
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontSize: "8px",
                      color: "#9CA3AF",
                      textAlign: "center",
                    }}
                  >
                    500 x 500 (4:4) recommended,{" "}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontSize: "8px",
                      color: "#9CA3AF",
                      textAlign: "center",
                    }}
                  >
                    up to 10MB each
                  </p>
                </div>
              </label>
              <input
                id="dropzone-file"
                onChange={onFileInputChange}
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                className="img-fluid DP_img DP_img_main"
              />
            </div>
            <div className="col-lg-7 col-md-10 col-sm-10 col-9">
              <div className="collection_DP_content">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ fontFamily: "Hammersmith One" }}>
                    Albert Camus{" "}
                  </h3>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "black",
                      color: "#ffffff",
                    }}
                  >
                    Edit
                  </button>
                </div>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      wordBreak: "break-word",
                      fontFamily: "Abel",
                      marginRight: "4px",
                    }}
                  >
                    {`${address.slice(0, 9)}...${address.slice(-4)}`}
                  </p>
                  <IconButton
                    onClick={copyAddress}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      p: "0px",
                    }}
                  >
                    <ContentCopyIcon sx={{ color: "#ffffff" }} />
                  </IconButton>
                </div>

                <div className="collection_content_mobile">
                  <p style={{ fontFamily: "Abel" }}>
                    Always Imagine Sisyphus Happy!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12  collection_content_desktop">
              <div className="">
                <p>
                  H.A.C.K. NFTs are the creators and OG Collection of Zuraverse.
                  Owning them gives you acess to exclusive games, experiences,
                  and also entry to our Metaverse in a special role.
                </p>
                <button className="see_more_btn">See More</button>
              </div>
            </div>
          </div>

          <div className="row filter_row_main mt-5">
            <div className="col-md-2 col-sm-2 col-2 sm-hidden filter_desktop">
              <div className="filter_row">
                <div>
                  <button className="filter__btn">
                    <FiFilter className="icons" />
                  </button>
                  <button className="filter__btn">
                    <FiRefreshCcw className="icons" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
              <div className="filter_row__filter_mobile">
                <div className="filter_row filter_mobile">
                  <div>
                    <button className="filter__btn">
                      <FiFilter className="icons" />
                    </button>
                    <button className="filter__btn">
                      <FiRefreshCcw className="icons" />
                    </button>
                  </div>
                </div>
                <div
                  className="filter_row_side_search_grid_btn "
                  style={{
                    flexWrap: "wrap",
                    rowGap: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <div
                    className="search_box"
                    style={{ width: "100%", maxWidth: "400px" }}
                  >
                    <form className="collection_search">
                      <input
                        type="search"
                        placeholder="Search Items by name, attribute"
                        style={{ width: "100%" }}
                      />
                      <span className="collection_search_icons">
                        <AiOutlineSearch className="icons" />
                      </span>
                    </form>
                  </div>
                  <div
                    className="items_btns_profile "
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      rowGap: "10px",
                    }}
                  >
                    <button
                      className={activeButton === "button1" ? "active" : ""}
                      onClick={() => handleClick("button1")}
                    >
                      Collected(03)
                    </button>
                    <button
                      className={activeButton === "button2" ? "active" : ""}
                      onClick={() => handleClick("button2")}
                    >
                      Liked
                    </button>
                    <button
                      className={activeButton === "button3" ? "active" : ""}
                      onClick={() => handleClick("button3")}
                    >
                      Activity
                    </button>
                    <button
                      className={activeButton === "button4" ? "active" : ""}
                      onClick={() => handleClick("button4")}
                    >
                      More
                    </button>
                  </div>
                  <div className="grid_list_buttons">
                    <button>
                      <BsFillGrid3X3GapFill className="icons" />
                    </button>
                    <button className="BsGridFill_bg">
                      <BsGridFill className="icons" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {allNftData.length > 0 &&
              allNftData.map((item, index) => (
                <div key={index} className="col-md-4 col-lg-3 col-sm-6 ">
                  <div className="collection_small_box">
                    <Link to={`/product-details/${item.id}`}>
                      <img
                        src={`https://zuraverse.infura-ipfs.io/ipfs/QmXkfGFHUy7uMbi9priDj5rE2VjGGnYx55Xnjegb4YVTMn/${item.id}.jpg`}
                        alt=""
                        className="img-fluid DP_img"
                      />
                    </Link>
                    <div className="collection_small_box_bottom_content">
                      <h4>{item.name}</h4>
                      <h4>Zuraverse</h4>
                    </div>
                    <div className="collection_small_boxDetails_button">
                      <button>
                        <Link to={`/product-details/${item.id}`}>
                          {" "}
                          Details{" "}
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
