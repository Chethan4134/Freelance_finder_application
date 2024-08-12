import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Form, Button } from "react-bootstrap";
import axios from "axios";
import ClientNavigationBar from "../../reusableComponents/ClientNavigationBar";

function JobPostingPage() {
  const navigate = useNavigate();
  const clientEmail = window.sessionStorage.getItem("clientEmail");

  const [formData, setFormData] = useState({
    email: clientEmail,
    title: "",
    description: "",
    skill: "",
    budget: "",
    created_at: "",
    jobId: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.jobId) {
      newErrors.jobId = "JobId is required";
    }
    if (!formData.title) {
      newErrors.title = "Title is required";
    }
    if (!formData.description) {
      newErrors.description = "Description is required";
    }
    if (formData.skill === "select your skills") {
      newErrors.skill = "Please select a skill";
    }
    if (!formData.budget) {
      newErrors.budget = "Budget is required";
    }
    if (!formData.created_at) {
      newErrors.created_at = "Created at date is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const res = await axios.post("http://localhost:8080/posting", {
          clientEmail: formData.email,
          jobPosting: [
            {
              jobId: formData.jobId,
              title: formData.title,
              description: formData.description,
              skillsRequired: formData.skill,
              budget: formData.budget,
              postingAt: formData.created_at,
            },
          ],
        });

        if (!res.data.isError) {
          alert(res.data.message);
          window.location.reload();
          navigate("/JobPostingPage");
        } else {
          alert("Error occurred: " + res.data.message);
        }
      } catch (error) {
        console.error("Error to post job:", error);
        alert("Failed to post job. Please try again later.");
      }
    }
  };

  return (
    <>
      <ClientNavigationBar />
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url('https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8am9ifGVufDB8fDB8fHww)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <Container className="border bg-white mt-4 col-sm-5 col-lg-5 rounded p-4 shadow">
          <p className="fw-bold fs-4 text-center">Job Posting Portal</p>
          <Row>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="xyz@gmail.com"
                  value={clientEmail}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter your title "
                  value={formData.title}
                  onChange={handleChange}
                />
                {errors.title && (
                  <span className="text-danger">{errors.title}</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Enter your description"
                  value={formData.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <span className="text-danger">{errors.description}</span>
                )}
              </Form.Group>
              <Form.Label>Select your skills</Form.Label>
              <select
                className="form-select mb-3"
                aria-label="skill required"
                name="skill"
                value={formData.skill}
                onChange={handleChange}
              >
                <option value="select your skills">Select your skills</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="React">React</option>
                <option value=".Net">.Net</option>
              </select>
              {errors.skill && (
                <span className="text-danger">{errors.skill}</span>
              )}
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>JobId</Form.Label>
                  <Form.Control
                    type="text"
                    name="jobId"
                    placeholder="Enter your Id"
                    value={formData.jobId}
                    onChange={handleChange}
                  />
                  {errors.jobId && (
                    <span className="text-danger">{errors.jobId}</span>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Budget</Form.Label>
                  <Form.Control
                    type="text"
                    name="budget"
                    placeholder="Enter your budget"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                  {errors.budget && (
                    <span className="text-danger">{errors.budget}</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Created At</Form.Label>
                  <Form.Control
                    type="date"
                    name="created_at"
                    value={formData.created_at}
                    onChange={handleChange}
                  />
                  {errors.created_at && (
                    <span className="text-danger">{errors.created_at}</span>
                  )}
                </Form.Group>
              </Form>
              <Container className="d-flex justify-content-center">
                <Button className="col-6" variant="success" type="submit">
                  Submit
                </Button>
              </Container>
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default JobPostingPage;
