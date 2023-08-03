import React from 'react'
import { Tabs } from 'antd'
import Hippie_img1 from '../../../assets/images/banner/HACk1.png'
import Hippie_img2 from '../../../images/ZuraGame.png'
import Hippie_img3 from '../../../images/Zurian 1.png'

import { Col, Divider, Row } from 'antd'
import {  Link } from "react-router-dom";
const onChange = (key) => {
  console.log(key)
}

const tab_btns={
  color:'#FFFFFF'
}

const items = [
  {
    key: '1',
    label: <div className="tabs_headings" style={tab_btns}> Zuraverse</div>,
    children: (
      <>
        <Row gutter={16}>
          
          <Col className="gutter-row tabs_small_boxes_main " style={{width:"100%"}}  sm={24} md={12} lg={8}>
          <Link to='#'>
              <div className='tabs_small_boxes'>
                <img src={Hippie_img2} alt="" className="img-fluid" style={{width:"100%"}}/>
                <div className='tabs_conntent  '>
                  <h3>Zura Game Pass</h3>
                  <p>Zuraverse</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col className="gutter-row tabs_small_boxes_main"  sm={24} md={12} lg={8}>
            <Link to='/collection'>
              <div className='tabs_small_boxes'>
                <img src={Hippie_img1} alt="" className="img-fluid" />
                <div className='tabs_conntent'>
                  <h3>Hippie Alien Cosmic Klub</h3>
                  <p>Zuraverse</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col className="gutter-row tabs_small_boxes_main"  sm={24} md={12} lg={8}>
          <Link to='#'>
              <div className='tabs_small_boxes'>
                <img src={Hippie_img3} alt="" className="img-fluid" />
                <div className='tabs_conntent blur_points'>
                  <h3> Zura Land NFT</h3>
                  <p>Zuraverse</p>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </>
    ),
  },
  {
    key: '2',
    label:  <div className="tabs_headings" style={{color:"#4E4E4E", fontSize:"19px" }}> Conzura</div>,
    children: `Content of Tab Pane 2`,
    disabled: true,
  },
]
const TabSection = () => {
  return (
    <>
      <section className="tabs_section_main">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </section>
    </>
  )
}

export default TabSection
