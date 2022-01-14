import React from 'react';
import {Container, Row} from "react-bootstrap";
import ScrollDown from "../../assets/gifs/scrollDown.gif";
import Img1 from '../../assets/imgs/collectionImg1.png';
import Img2 from '../../assets/imgs/collectionImg2.png';
import Img3 from '../../assets/imgs/collectionImg3.png';

import './AboutComp.scss';

const imgCollection = [Img1, Img2, Img3];

const AboutComp = () => {
  return (
    <Container className="about-comp">
      <Container className="about-comp-container">
        <Row data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             className="about-comp-title d-flex justify-content-center align-items-center">
          <h6 className="comp-primary-title">ABOUT</h6>
        </Row>
        <Row className="about-comp-items">
          <div className="about-content-container">
            <div data-aos="fade-right" className="first-paragraph content-item">
              <p className="content">Dope Goats Club are a dope collection of 2,222 goats designed by upcoming artist
                SipTee.</p>
            </div>
            <div data-aos="fade-left" className="second-paragraph content-item">
              <p className="content">Not only do these cuddly goats have special abilities that can only be unlocked if
                you are in the club, but all holders who mint two goats will receive a free baby goat on drop day.</p>
            </div>
            <div className="first-img">
              <img data-aos="zoom-in" src={Img2} alt="dope-goats"/>
            </div>
            <div className="img-collection">
              {
                imgCollection.map((val, index) => (
                  <img data-aos="fade-up" src={val} alt="dope-goats"/>
                ))
              }
            </div>
            <div data-aos="fade-left" className="third-paragraph content-item">
              <p className="content">These will be the rarest of our collection. Stay tuned for giveaways and early.</p>
            </div>
          </div>
        </Row>
        <Row data-aos="fade-up"
             className="about-comp-scroll d-flex flex-column justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="dope-goats-scroll-down"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutComp;