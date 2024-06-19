import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import FooterPartUi from "../../components/reusableComponents/FooterPartUi";
import "./AboutInfo.css";
import HomeNavigation from "../../components/reusableComponents/HomeNavigation";

const AboutInfo = () => {
  return (
    <>
      <HomeNavigation />
      <Container className="">
        <Row>
          <Col sm={10} md={6} lg={6}>
            <br />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOxbp3JOa9FSbYJaGimOKlICmQbkq9GgP6s3rKMFx8Q&s"
              alt=""
              height={350}
              width={550}
              id="page-img"
            />
          </Col>
          <Col sm={12} md={6} lg={6} className="p-5">
            <p id="main-name" className="ms-5 ps-3">
              About us
            </p>
            <p className="mt-4 ms-3" id="paragraph">
              A website where people who need jobs can find jobs and companies
              looking for job seekers can find the perfect employees. It serves
              as a medium where job seekers can create profiles and search for
              job openings across various industries and locations
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6} className="p-5">
            <p id="main-name" className="ms-5 ps-3"></p>
            <p className="mt-4 ms-3" id="paragraph">
              A website where people who need jobs can find jobs and companies
              looking for job seekers can find the perfect employees. It serves
              as a medium where job seekers can create profiles and search for
              job openings across various industries and locations
            </p>
            <p id="main-name" className="ms-5 ps-3"></p>
            <p className="mt-4 ms-3" id="paragraph">
              Freelancers are typically considered to be independent
              contractors. They may do their work full-time or as a side job to
              supplement full-time employment. As independent contractors,
              freelancers typically require signed contracts for the job to be
              done. They'll agree to a predetermined fee based on the time,
              skill, and effort required to complete the task. This may be a
              flat fee, a per-hour fee, a per-day fee, a per-project fee, or
              some other similar measure. Freelancers tend to work in the
              creative, skilled, or service sectors.
            </p>
          </Col>

          <Col sm={12} md={6} lg={6} className="p-5">
            <img
              src="https://wallpaperaccess.com/full/1691722.jpg"
              alt=""
              height={350}
              width={550}
              id="page-img"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={10} md={6} lg={6}>
            <img
              src="https://images.unsplash.com/photo-1683803063663-3b1f28d97297?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              height={350}
              width={550}
              id="page-img"
            />
          </Col>
          <Col sm={12} md={6} lg={6} className="p-5">
            <p id="main-name" className="ms-5 ps-3"></p>
            <p className="mt-4 ms-3" id="paragraph">
              Freelancers handle contract work on a part-time or full-time basis
              and often sign agreements before starting projects.With
              freelancing, the client pays per project, per task, or per hour,
              depending on the agreement. Freelance projects typically involve
              short-term assignments,although satisfied clients often request
              follow-on work. Most freelance jobs are available in the skills,
              service, and creative sectors, such as copywriting, programming,
              engineering, and marketing.
            </p>
          </Col>
        </Row>
      </Container>
      <FooterPartUi />
    </>
  );
};

export default AboutInfo;
