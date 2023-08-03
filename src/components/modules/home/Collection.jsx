import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DP from "../../../assets/images/banner/DP1.png";
import { FiFilter, FiRefreshCcw } from "react-icons/fi";
import { BsFillGrid3X3GapFill, BsGridFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import {useAccount } from "wagmi";
import HeaderCommon from "./HeaderCommon";
import { mintAddress } from "../../../blockchain/contractDetails";
import { getAllNftData } from "../../../slices/ipfsData";
import {getBalance,getBlockChainName} from "../../../slices/utilsSilce";
import WagmiUtils from "../../../blockchain/wagmiUtils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import YourApp from "./MyApp";
import { handleMintNft } from "../../../slices/contractSetterSlice";
import { getMerkleRoot } from "../../../slices/contractGetterSlice";



const Collection = () => {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  const [mintAllowed, setMintAllowed] = useState(false);
  // const [merkleRoot1, setMerkleRoot1] = useState("");
  const mintedMan = mintAddress.filter((obj) => obj.address1 === address);

  const {merkleRoot} = useSelector((state) => state.getterFunc);

  const [activeButton, setActiveButton] = useState("button1");
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const { allNftData } = useSelector((state) => state.custom);
  const { currentBlockChainName } = useSelector((state) => state.utils);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = allNftData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  

  useEffect(() => {
    dispatch(getAllNftData());
    if(isConnected){
      dispatch(getBlockChainName());
      dispatch(getBalance(address));
      dispatch(getMerkleRoot());
    }
    if (isConnected && mintedMan.length > 0) {
      setMintAllowed(true);
    }
  }, [dispatch]);

  




  return (
    <>
      <div className="other_page_header">
        <section className="haeder_main_section ">
          <HeaderCommon />
        </section>
      </div>
      <section>
        <div className="collection_page_bg_banner"></div>
        <div className="container collection_page_bg_banner_content_main">
          <div className="row collection_page_bg_banner_row_bg">
            <div className="col-lg-2 col-md-2 col-sm-2 col-3">
              <div>
                <img src={DP} alt="" className="img-fluid DP_img DP_img_main" />
              </div>
            </div>
            <div className="col-lg-9 col-md-10 col-sm-10 col-9">
              <div className="collection_DP_content">
                <h3>Hippie Alien Cosmic Klub </h3>
                <div
                  className="collection_DP_flex_box"
                  style={{ flexWrap: "wrap" }}
                >
                  <div className="collection_DP_flex_box_inner">
                    <h4>
                      by <span style={{ color: "#8B15C3" }}> Zuraverse</span>
                    </h4>
                  </div>
                  <div className="collection_DP_flex_box_inner">
                    <h4>
                      Items{" "}
                      <span style={{ color: "#8B15C3" }}>
                        {filteredData.length}
                      </span>
                    </h4>
                  </div>
                  <div className="collection_DP_flex_box_inner">
                    <h4>
                      Chain{" "}
                      <span style={{ color: "#8B15C3" }}>
                        {" "}
                        {currentBlockChainName}
                      </span>
                    </h4>
                  </div>
                  <div className="collection_DP_flex_box_inner">
                    <h4 style={{ whiteSpace: "nowrap" }}>
                      Floor{" "}
                      <span style={{ color: "#8B15C3", whiteSpace: "nowrap" }}>
                        1.21 ETH
                      </span>
                    </h4>
                  </div>
                  <div className="collection_DP_flex_box_inner">
                    <h4 style={{ whiteSpace: "nowrap" }}>
                      Total Volume{" "}
                      <span style={{ color: "#8B15C3", whiteSpace: "nowrap" }}>
                        {" "}
                        25 ETH
                      </span>
                    </h4>
                  </div>
                  <div className="collection_DP_flex_box_inner">
                    <h4 style={{ whiteSpace: "nowrap" }}>
                      Owners{" "}
                      <span style={{ color: "#8B15C3", whiteSpace: "nowrap" }}>
                        234
                      </span>
                    </h4>
                  </div>
                </div>

                <div className="collection_content_mobile">
                  <p>
                    H.A.C.K. NFTs are the creators and OG Collection of
                    Zuraverse. Owning them gives you acess to exclusive games,
                    experiences, and also entry to our Metaverse in a special
                    role.
                  </p>
                  <button className="see_more_btn">See More</button>
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
                <div className="filter_row_side_search_grid_btn ">
                  <div className="items_btns ">
                    <button
                      className={activeButton === "button1" ? "active" : ""}
                      onClick={() => handleClick("button1")}
                    >
                      Items
                    </button>
                    <button
                      className={activeButton === "button2" ? "active" : ""}
                      onClick={() => handleClick("button2")}
                    >
                      Activity
                    </button>
                    <button
                      className={activeButton === "button3" ? "active" : ""}
                      onClick={() => handleClick("button3")}
                    >
                      Analytics
                    </button>
                  </div>
                  {/* <div className="items_border_bottom"></div> */}

                  <div className="search_box">
                    <form className="collection_search">
                      <input
                        type="search"
                        value={searchTerm}
                        placeholder="Search Items by name, attribute"
                        onChange={handleChange}
                      />
                      <span className="collection_search_icons">
                        <AiOutlineSearch className="icons" />
                      </span>
                    </form>
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
            {filteredData.length > 0 &&
              filteredData.map((item, index) => (
                <div key={index} className="col-md-4 col-lg-3 col-sm-6 ">
                  <div className="collection_small_box">
                    <div className="collection_small_box_connect_wallet">
                      {!isConnected ? (
                        <WagmiUtils compo={<YourApp classes="button"/>}/>
                      ) : mintAllowed ? (
                        <button className="button" onClick={()=>handleMintNft(merkleRoot)}>Mint Now</button>
                      ) : (
                        <button className="button No_Whitelist">
                          No Whitelist
                        </button>
                      )}
                    </div>
                    <Link to={`/product-details/${item.edition}`}>
                      <img
                        src={`https://ipfs.io/ipfs/bafybeibjgjp45yynomskvrfd3dsvphdmvtx6ssajnqigvinz2xuqmy4c4e/${item.edition}.jpg`}
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
                        <Link to={`/product-details/${item.edition}`}>
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

export default Collection;