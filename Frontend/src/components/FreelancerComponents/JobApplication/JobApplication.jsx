import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FreelancerNavigation from "../../reusableComponents/FreelancerNavigation";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import axios from "axios";

function JobApplication() {
  const freelancerEmail = window.sessionStorage.getItem("freelancerEmail");
  const [formData, setFormData] = useState({
    freelancerEmail: freelancerEmail || "",
    jobId: "",
    skills: [],
    skillExperience: "",
    skillRating: "",
    appliedAt: "",
    skillDescription: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "skills") {
      let updatedSkills = [...formData.skills];
      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter((skill) => skill !== value);
      }
      setFormData({ ...formData, skills: updatedSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/application", {
        freelancerEmail: formData.freelancerEmail,
        jobId: formData.jobId,
        appliedAt: formData.appliedAt,
        skillDescription: formData.skillDescription,
        skillExperience: formData.skillExperience,
        skills: formData.skills.join(),
        skillRating: formData.skillRating,
      });

      if (!res.data.isError) {
        alert(res.data.message);
        navigate("/FreelancerHomePage");
      } else {
        alert("Error occurred: " + res.data.message);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again later.");
    }
  };

  return (
    <>
      <FreelancerNavigation />
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGpvYnxlbnwwfHwwfHx8MA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <Container className="border bg-white col-sm-5 col-lg-5 rounded p-4 shadow">
          <p className="fw-bold fs-4 text-center">Job Application Portal</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="freelancerEmail"
                placeholder="xyz@gmail.com"
                value={formData.freelancerEmail}
                required
                onChange={handleChange}
                disabled // Assuming this is retrieved from session storage and should not be changed
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupJobId">
              <Form.Label>Job ID</Form.Label>
              <Form.Control
                type="text"
                name="jobId"
                placeholder="Enter jobId"
                value={formData.jobId}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Label>Skills</Form.Label>
            <FormGroup>
              <Row sm={12}>
                <Col sm={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="skills"
                        value="Java"
                        checked={formData.skills.includes("Java")}
                        onChange={handleChange}
                      />
                    }
                    label="Java"
                  />
                </Col>
                <Col sm={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="skills"
                        value="Python"
                        checked={formData.skills.includes("Python")}
                        onChange={handleChange}
                      />
                    }
                    label="Python"
                  />
                </Col>
                <Col sm={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="skills"
                        value="React"
                        checked={formData.skills.includes("React")}
                        onChange={handleChange}
                      />
                    }
                    label="React"
                  />
                </Col>
                <Col sm={3}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="skills"
                        value=".Net"
                        checked={formData.skills.includes(".Net")}
                        onChange={handleChange}
                      />
                    }
                    label=".Net"
                  />
                </Col>
              </Row>
            </FormGroup>
            <Form.Group className="mb-3 mt-2" controlId="formGroupSkillExperience">
              <Form.Label>Enter Your Skill Experience</Form.Label>
              <Form.Control
                type="text"
                name="skillExperience"
                placeholder="Enter your experience"
                value={formData.skillExperience}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupSkillRating">
              <Form.Label>Skill Rating</Form.Label>
              <Form.Control
                type="text"
                name="skillRating"
                placeholder="Your Rating"
                value={formData.skillRating}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAppliedAt">
              <Form.Label>Applied At</Form.Label>
              <Form.Control
                type="date"
                name="appliedAt"
                value={formData.appliedAt}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupSkillDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="skillDescription"
                placeholder="Write description"
                value={formData.skillDescription}
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Container className="d-flex justify-content-center mt-4">
              <Button className="col-5" variant="success" type="submit">
                Submit
              </Button>
            </Container>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default JobApplication;
