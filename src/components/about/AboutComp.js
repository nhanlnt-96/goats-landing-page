import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {aboutUseData} from "../../configs/aboutUseData";
import AboutUsImg from '../../assets/imgs/aboutUs.png';
import ScrollDown from "../../assets/gifs/scrollDown.gif";

import './AboutComp.scss';

const AboutComp = () => {
    return (
        <Container className="about-comp">
            <Container className="about-comp-container">
                <Row className="about-comp-items">
                    <Col data-aos="fade-right" xxl={7} lg={8} md={12} sm={12}
                         className="content-item d-flex flex-column justify-content-center align-items-center">
                        <h6 className="comp-primary-title">ABOUT</h6>
                        <div className="content-desc comp-border-neon-shadow">
                            {
                                aboutUseData.map((val, index) => (
                                    <p key={index} className="content comp-content-box">{val}</p>
                                ))
                            }
                        </div>
                    </Col>
                    <Col data-aos="zoom-in" xxl={5} lg={4} md={12} sm={12}
                         className="content-img d-flex justify-content-center align-items-center">
                        <img src={AboutUsImg} alt="dope-goats-about-us"/>
                    </Col>
                </Row>
                <Row data-aos="fade-up" className="about-comp-scroll d-flex flex-column justify-content-center align-items-center">
                    <div className="scroll-img">
                        <img src={ScrollDown} alt="dope-goats-scroll-down"/>
                    </div>
                </Row>
            </Container>
        </Container>
    );
};

export default AboutComp;