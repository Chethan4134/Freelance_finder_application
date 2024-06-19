import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const HomeNavigation = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-secondary"
        variant="dark"
        style={{ width: "100%" }}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
            <img
              src="https://cdn2.f-cdn.com/contestentries/388419/9981356/570e669d0928f_thumb900.jpg"
              alt="Freelancer.com"
              style={{ height: "40px", width: "110px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" style={{ color: "white" }}>
                HomePage
              </Nav.Link>
              <Nav.Link as={Link} to="/AboutInfo" style={{ color: "white" }}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact" style={{ color: "white" }}>
                Contact
              </Nav.Link>
            </Nav>
            <form className="d-flex">
              <Link to="/ClientLogin" className="me-2">
                <button className="btn btn-primary shadow" type="button">
                  User Login
                </button>
              </Link>
              <Link to="/FreelancerLogin">
                <button className="btn btn-primary shadow" type="button">
                  Freelancer Login
                </button>
              </Link>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeNavigation;
