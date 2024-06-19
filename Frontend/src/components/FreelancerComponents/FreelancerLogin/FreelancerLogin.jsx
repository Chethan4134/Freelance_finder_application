import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FreelancerLogin = () => {
  const gridstyle = {
    minHeight: "100vh",
    backgroundImage: `url(https://images.unsplash.com/photo-1533892743580-890e5b193113?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
    backgroundSize: "cover",
    backgroundPosition: "Container",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const [freelancerEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function navigateSignUp() {
    navigate("/FreelancerRegistration");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    const errors = {};

    if (!freelancerEmail) {
      formIsValid = false;
      errors.email = "Email is required";
    }

    if (!password) {
      formIsValid = false;
      errors.password = "Password is required";
    }

    setErrors(errors);

    if (!formIsValid) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/freelancerLogIn",
        {
          freelancerEmail,
          password,
        }
      );
      console.log(response.data.data);

      if (response.data.data.response !== false) {
        alert("Login Successful");
        window.sessionStorage.setItem(
          "firstName",
          response.data.data.firstName
        );
        window.sessionStorage.setItem(
          "freelancerEmail",
          response.data.data.freelancerEmail
        );
        navigate("/FreelancerHomePage");
      } else {
        setErrors({ message: "Invalid email or password. Please try again" });
        alert("Login Failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login Failed. Please try again.");
      setErrors({ message: "Invalid email or password. Please try again." });
    }
  };

  return (
    <>
      <div style={gridstyle}>
        <Container
          className="border mt-5 bg-white col-6 col-lg-4 rounded py-2 px-4 shadow"
          id="MainLoginContainer"
        >
          <Row>
            <Container className="my-3">
              <h2 className="text-center">Freelancer Login </h2>
            </Container>
            <Col sm={12} md={12} lg={12}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-8" controlId="formGroupEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="example@gmail.com"
                    value={freelancerEmail}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                  <div className="my-3">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Login
                    </Button>
                    <Button
                      onClick={navigateSignUp}
                      variant="primary"
                      className="ms-3"
                    >
                      SignUp
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FreelancerLogin;
