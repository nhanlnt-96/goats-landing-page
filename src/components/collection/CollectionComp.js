import React from 'react';
import {Container, Row} from "react-bootstrap";
import CollectionImg1 from '../../assets/imgs/collectionImg1.png';
import CollectionImg2 from '../../assets/imgs/collectionImg2.png';
import CollectionImg3 from '../../assets/imgs/collectionImg3.png';

import './CollectionComp.scss';
import ScrollDown from "../../assets/gifs/scrollDown.gif";
import {BiRightArrowAlt} from "react-icons/all";

const CollectionComp = () => {
  return (
    <Container fluid className="collection-comp">
      <Container className="collection-comp-container">
        <Row data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             className="collection-comp-title d-flex justify-content-center align-items-center">
          <h6 className="comp-primary-title">Collection</h6>
        </Row>
        <Row className="collection-comp-content">
          <div className="img-container">
            <div className="item">
              <img src={CollectionImg1} alt="dope-goats-collections"/>
            </div>
          </div>
          <div className="img-container">
            <div className="item">
              <img src={CollectionImg2} alt="dope-goats-collections"/>
            </div>
            <div className="item">
              <img src={CollectionImg3} alt="dope-goats-collections"/>
            </div>
          </div>
          <div className="img-container">
            <div className="item">
              <img src={CollectionImg1} alt="dope-goats-collections"/>
            </div>
            <div className="item">
              <img src={CollectionImg3} alt="dope-goats-collections"/>
            </div>
            <div className="item">
              <img src={CollectionImg2} alt="dope-goats-collections"/>
            </div>
          </div>
        </Row>
        <Row className="collection-comp-btn">
          <div data-aos="fade-down"
               className="banner-comp-btn d-flex flex-column justify-content-center align-items-center">
            <button className="comp-primary-btn">SHOP MORE
              <BiRightArrowAlt className="comp-primary-btn-icon"/>
            </button>
          </div>
        </Row>
        <Row data-aos="fade-down"
             className="collection-comp-scroll d-flex flex-column justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="metavs-scroll-down"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default CollectionComp;