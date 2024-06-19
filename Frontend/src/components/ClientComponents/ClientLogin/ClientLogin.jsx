import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ClientLogin = () => {
  const [clientEmail, setClientEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/clientLogIn", {
        clientEmail: clientEmail,
        password: password,
      });
      console.log(response.data.data.message);

      if (response.data.data.response !== false) {
        console.log("Login successful");
        alert(response.data.message);
        setErrors({});

        navigate("/JobPostingPage");
        window.sessionStorage.setItem(
          "firstName",
          response.data.data.firstName
        );
        window.sessionStorage.setItem(
          "clientEmail",
          response.data.data.clientEmail
        );
      } else {
        setErrors({ message: "Invalid email or password. Please try again" });
        alert("Invalid email or password. Please try again");
      }
    } catch (error) {
      console.error("Login unsuccessful:", error);
      setErrors({ message: "Invalid email or password. Please try again." });
    }
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          // minWidth: "93vh",
          backgroundImage: `url('https://images.unsplash.com/photo-1492892132812-a00a8b245c45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <Container className="border mt-5 bg-white col-6 col-lg-4 rounded py-2 px-4 shadow">
          <Row>
            <h2 className="text-center my-3">CLIENT LOGIN</h2>{" "}
            <Col sm={40} md={38} lg={20}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-8" controlId="formGroupEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="example@gmail.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                  {errors.message && (
                    <span className="text-danger">{errors.message}</span>
                  )}
                </Form.Group>
                <Form.Group className="mt-2" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="my-3">
                    <Button variant="primary" type="submit">
                      {" "}
                      Login
                    </Button>{" "}
                    <Link to={"/ClientRegister"}>
                      <Button variant="primary" className="ms-3">
                        {" "}
                        SignUp
                      </Button>{" "}
                    </Link>
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

export default ClientLogin;
