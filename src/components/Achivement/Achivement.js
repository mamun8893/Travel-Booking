import React from "react";
import "./avhievment.css";
import { Col, Container, Row } from "react-bootstrap";
import acheiveBg from "../../images/achiv-shape.png";
import { GrUser, GrUserExpert } from "react-icons/gr";
import { GiShakingHands } from "react-icons/gi";

const Achivement = () => {
  return (
    <div
      className="achivement-area p-80"
      style={{ background: `url(${acheiveBg})` }}
    >
      <Container>
        <div className="heading text-center">
          <p>Why Trip-World</p>
          <h2>Why You Are Travel With Trip-World</h2>
        </div>
        <Row>
          {/* Item 1 */}
          <Col md={3} sm={6} xs={6}>
            <div className="achievment-item text-center">
              <GrUser />
              <h4>2000+ Our worldwide guide</h4>
            </div>
          </Col>
          {/* Item 2 */}
          <Col md={3} sm={6} xs={6}>
            <div className="achievment-item text-center">
              <GiShakingHands />
              <h4>100% trusted travel agency</h4>
            </div>
          </Col>
          {/* Item 3 */}
          <Col md={3} sm={6} xs={6}>
            <div className="achievment-item text-center">
              <GrUserExpert />
              <h4>10+ year of travel experience</h4>
            </div>
          </Col>
          {/* Item 4 */}
          <Col md={3} sm={6} xs={6}>
            <div className="achievment-item text-center">
              <GrUser />
              <h4>90% of our traveller happy</h4>
            </div>
          </Col>
          {/* Item End */}
        </Row>
      </Container>
    </div>
  );
};

export default Achivement;
