import React from "react";
import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const Header = () => {
  const { user, handleSignout } = useAuth();
  return (
    <Navbar className="navbar-warper" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">TRIP-WORLD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto m-navbar">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/my-order">
              My Orders
            </Nav.Link>
            <Nav.Link as={NavLink} to="/manage-order">
              Manage All Orders
            </Nav.Link>
            <Nav.Link as={NavLink} to="add-service">
              Add A New Service
            </Nav.Link>

            {user.email ? (
              <Nav.Link onClick={handleSignout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link>
              {user?.displayName && `Signed in as: ${user?.displayName}`}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
