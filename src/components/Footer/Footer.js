import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { GrPhone, GrMail, GrMap } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <div className="footer-top-area">
          <Row>
            <Col md={4} sm={6}>
              <div className="footer-link">
                <h4>Trip-World</h4>
                <p>
                  We aim to ensure that you never miss an opportunity to travel.
                </p>
              </div>
            </Col>
            <Col md={8}>
              <Row>
                <Col md={5} sm={6}>
                  <div className="footer-link">
                    <h4>Contact Us</h4>
                    <div className="contact-box">
                      <span>
                        <GrPhone />
                      </span>
                      <div>
                        <a href="tel:+01852-1265122">+01852-1265122</a>
                        <a href="tel:+01852-1265122">+01852-1265122</a>
                      </div>
                    </div>
                    <div className="contact-box">
                      <span>
                        <GrMail />
                      </span>
                      <div>
                        <a href="mailto:info@example.com">info@example.com</a>
                        <a href="mailto:support@example.com">
                          support@example.com
                        </a>
                      </div>
                    </div>
                    <div className="contact-box">
                      <span>
                        <GrMap />
                      </span>
                      <div>
                        <a href="#address">
                          2752 Willison Street <br /> Eagan, United State
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="footer-link">
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <a href="#contact">Contact Us</a>
                      </li>
                      <li>
                        <a href="#about">About Us</a>
                      </li>
                      <li>
                        <a href="#services">Services</a>
                      </li>
                      <li>
                        <a href="#blog">Our Blogs</a>
                      </li>
                      <li>
                        <a href="#terms">Terms And Conditions</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="footer-link">
                    <h4>We Accept</h4>
                    <div className="payment-cards">
                      <img
                        src="https://i.ibb.co/c82dz8s/payment-card-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <img
                        src="https://i.ibb.co/YtnHPsP/payment-card-2.png"
                        alt=""
                        className="img-fluid"
                      />
                      <img
                        src="https://i.ibb.co/NyLtwnS/payment-card-3.png"
                        alt=""
                        className="img-fluid"
                      />
                      <img
                        src="https://i.ibb.co/wC2rX3b/payment-card-4.png"
                        alt=""
                        className="img-fluid"
                      />
                      <img
                        src="https://i.ibb.co/31PRyrR/payment-card-5.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="footer-copyright">
          <p>© 2021 Trip-World Care. All Rights Reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
