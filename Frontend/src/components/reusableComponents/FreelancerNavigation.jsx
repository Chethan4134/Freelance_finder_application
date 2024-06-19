import React from "react";
import { Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

const FreelancerNavigation = () => {
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
          <button
            className="btn btn-primary shadow me-2"
            onClick={logout}
            type="button"
          >
            Logout
          </button>
        </Container>
      </Navbar>
    </>
  );
};

export default FreelancerNavigation;
