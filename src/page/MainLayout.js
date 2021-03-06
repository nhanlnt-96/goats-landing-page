import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../components/banner/BannerComp";
import AboutComp from "../components/about/AboutComp";
import RoadmapComp from "../components/roadmap/RoadmapComp";
import RarityComp from "../components/rarity/RarityComp";
import FaqsComp from "../components/faqs/FaqsComp";
import TeamComp from "../components/team/TeamComp";
import FooterComp from "../components/footer/FooterComp";
import CollectionComp from "../components/collection/CollectionComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout" style={{overflow: "hidden"}}>
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row id="about">
        <AboutComp/>
      </Row>
      <Row id="collection">
        <CollectionComp/>
      </Row>
      <Row id="rarity">
        <RarityComp/>
      </Row>
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row id="faqs">
        <FaqsComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
      <Row id="footer">
        <FooterComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;