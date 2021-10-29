import React from "react";
import "./login.css";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/UseAuth";
import { useHistory, useLocation } from "react-router";
const Login = () => {
  const { handleGoogleSignin } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  //Handle Google signin
  const handleSignin = () => {
    handleGoogleSignin(navigate);
  };
  const navigate = () => {
    history.push(redirect_uri);
  };

  return (
    <div className="login-area">
      <Container>
        <div className="login-logo">
          <h2>Trip-World</h2>
        </div>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="m-card">
              <div className="login-content">
                <h2>Login With</h2>
                <button className="google-signin" onClick={handleSignin}>
                  <img src="https://i.ibb.co/DghCNR5/Group-573.png" alt="" />
                  Continue with Google
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
