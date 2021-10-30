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
        <Navbar.Brand>
          <NavLink to="/home">TRIP-WORLD</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto m-navbar">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>

            {user.email && (
              <Nav.Link as={NavLink} to="/my-booking">
                My Booking
              </Nav.Link>
            )}

            {user.email && (
              <Nav.Link as={NavLink} to="/manage-booking">
                Manage All Booking
              </Nav.Link>
            )}

            {user.email && (
              <Nav.Link as={NavLink} to="/add-package">
                Add Tour Package
              </Nav.Link>
            )}

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
