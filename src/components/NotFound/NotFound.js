import React from "react";
import "./notfound.css";
import breadcumbBg from "../../images/breadcrumb-bg.png";
import errorImg from "../../images/404.png";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-area">
      <div
        className="breadcumb-area"
        style={{ backgroundImage: `url(${breadcumbBg})` }}
      >
        <Container>
          <div className="breadcumb-content">
            <h2>404</h2>
            <div className="m-page-link">
              <NavLink to="/home" className="link first-link">
                Home
              </NavLink>
              <p className="link">404</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="error-content-warper p-80">
        <Container>
          <div className="content-image text-center">
            <h1>Oops!</h1>
            <img src={errorImg} className="img-fluid" alt="" />
            <h2>That Page Is Not Found.</h2>
            <NavLink to="/home">
              <button className="main-btn">Go To Home</button>
            </NavLink>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NotFound;
