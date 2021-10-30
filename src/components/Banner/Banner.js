import React from "react";
import "./banner.css";
import bannerBg from "../../images/banner-bg.jpg";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div
      className="banner-area"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="banner-content text-center">
              <h1>Enjoy the tour with Trip-World</h1>
              <p>
                We provide travelers with an authentic Jordanian experience that
                they can remember for the rest of their lives
              </p>
              <button className="main-btn">Sel All Tours</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
