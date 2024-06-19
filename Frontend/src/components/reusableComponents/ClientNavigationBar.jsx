import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

const ClientNavigationBar = () => {
  const name = window.sessionStorage.getItem("firstName");

  const navigate = useNavigate();

  function logout() {
    navigate("/LogOut");
  }

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
            <h3>Welcome {name}</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/JobPostingPage"
                style={{ color: "white" }}
              >
                JobPostingPortal
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/ApplicationDetails"
                style={{ color: "white" }}
              >
                Applicants
              </Nav.Link>
            </Nav>

            <button
              className="btn btn-primary shadow"
              onClick={logout}
              type="button"
            >
              Logout
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ClientNavigationBar;
