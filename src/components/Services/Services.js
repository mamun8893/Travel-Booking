import React from "react";
import "./service.css";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <div className="tour-package-area p-80">
      <Container>
        <div className="heading text-center">
          <p>Choose Your Package</p>
          <h2>Best Tour Package</h2>
        </div>
        <Row>
          <Col md={4}>
            <div className="tour-package-item">
              <div className="image">
                <img
                  src="https://i.ibb.co/qY60s5n/p-1.png"
                  className="img-fluid"
                  alt="package"
                />
              </div>
              <div className="content">
                <h3>Paris Hill Tour</h3>
                <p>
                  Trip_World select Paris Hill Homes will be offered December 6
                  and 7 on beautiful Paris Hill.
                </p>
                <button className="main-btn">Book Now</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="tour-package-item">
              <div className="image">
                <img
                  src="https://i.ibb.co/qY60s5n/p-1.png"
                  className="img-fluid"
                  alt="package"
                />
              </div>
              <div className="content">
                <h3>Paris Hill Tour</h3>
                <p>
                  Trip_World select Paris Hill Homes will be offered December 6
                  and 7 on beautiful Paris Hill.
                </p>
                <button className="main-btn">Book Now</button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="tour-package-item">
              <div className="image">
                <img
                  src="https://i.ibb.co/qY60s5n/p-1.png"
                  className="img-fluid"
                  alt="package"
                />
              </div>
              <div className="content">
                <h3>Paris Hill Tour</h3>
                <p>
                  Trip_World select Paris Hill Homes will be offered December 6
                  and 7 on beautiful Paris Hill.
                </p>
                <button className="main-btn">Book Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
