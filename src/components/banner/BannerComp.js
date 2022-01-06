import React from 'react';
import {Container, Row} from "react-bootstrap";
import HeaderComp from "../header/HeaderComp";
import {BiRightArrowAlt} from "react-icons/all";
import ScrollDown from '../../assets/gifs/scrollDown.gif';

import './BannerComp.scss';

const BannerComp = () => {
  return (
    <Container fluid className="banner-comp">
      <div className="banner-comp-blur-bg"/>
      <Row className="banner-comp-header">
        <HeaderComp/>
      </Row>
      <Container className="banner-comp-container d-flex flex-column justify-content-center align-items-center">
        <h1 data-aos="fade-down" className="banner-comp-title">WELCOME TO<br/>"dope goats"<br/>COLLECTION</h1>
        <Row className="banner-comp-content">
          <div data-aos="fade-left"
               className="banner-comp-btn d-flex flex-column justify-content-center align-items-center">
            <button className="comp-primary-btn">SHOP NOW
              <BiRightArrowAlt className="comp-primary-btn-icon"/>
            </button>
          </div>
        </Row>
        <Row className="banner-comp-scroll">
          <img src={ScrollDown} alt="dope-goats-scroll-down"/>
        </Row>
      </Container>
    </Container>
  );
};

export default BannerComp;