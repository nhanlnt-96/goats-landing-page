import React from 'react';
import {Container, Row} from "react-bootstrap";
import ScrollDown from "../../assets/gifs/scrollDown.gif";
import Arrow from '../../assets/gifs/animateArrow.gif';

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp comp-height">
      <Container className="roadmap-comp-container">
        <Row data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             className="roadmap-comp-title d-flex justify-content-center align-items-center">
          <h6 className="comp-primary-title">Roadmap</h6>
        </Row>
        <Row className="roadmap-comp-content">
          <div className="item-container">
            <div className="item d-flex flex-row justify-content-center align-items-center">
              <div className="box message-body d-flex justify-content-center align-items-center text-center">
                <p className="content">Launch DopeGoats</p>
              </div>
              <div className="circle-percent">
                <div className="arrow d-flex align-items-end">
                  <img src={Arrow} alt="dope-goats-arrow"/>
                </div>
                <div className="circle-border">
                  <div className="circle-border-container d-flex justify-content-center align-items-center">
                    <p className="percent">33%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row data-aos="fade-down"
             className="roadmap-comp-scroll d-flex flex-column justify-content-center align-items-center">
          <div className="scroll-img">
            <img src={ScrollDown} alt="dope-goats-scroll-down"/>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default RoadmapComp;