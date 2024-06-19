import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import HomeNavigation from "../../components/reusableComponents/HomeNavigation";

const Contact = () => {
  return (
    <>
      <HomeNavigation />
      <div className="contact-background">
        <p id="header-text" className="text-center mt-5 pt-5">
          Contact Us
        </p>
        <p className="text-center">
          {" "}
          If you are having any concerns, Please feel free to get in touch.{" "}
        </p>
        <Container className="mt-5 pt-5">
          <Row>
            <Col></Col>
            <Col xs={7} className="ms-5">
              <Container>
                <Row>
                  <Col>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="120"
                      fill="currentColor"
                      className="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                    <p className="ms-2">EXCELSOFT</p>
                    <p className="ms-4"> Mysore</p>
                  </Col>
                  <Col>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="120"
                      fill="currentColor"
                      className="bi bi-phone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                    <p className="ms-2">7406823124</p>
                  </Col>
                  <Col>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="120"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                    <p>xyz@gamil.com</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
