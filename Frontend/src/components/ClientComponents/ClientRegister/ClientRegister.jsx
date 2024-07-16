// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const ClientRegister = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [clientEmail, setClientEmail] = useState("");
//   const [gender, setGender] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let isValid = true;
//     const errors = {};

//     if (!firstName.trim()) {
//       errors.firstName = "First Name is required";
//       isValid = false;
//     }

//     if (!lastName.trim()) {
//       errors.lastName = "Last Name is required";
//       isValid = false;
//     }

//     if (!phone.trim()) {
//       errors.phone = "Phone is required";
//       isValid = false;
//     }

//     if (!clientEmail.trim()) {
//       errors.clientEmail = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(clientEmail)) {
//       errors.clientEmail = "Email is invalid";
//       isValid = false;
//     }

//     if (!gender) {
//       errors.gender = "Gender is required";
//       isValid = false;
//     }

//     if (!dateOfBirth) {
//       errors.dateOfBirth = "Date of Birth is required";
//       isValid = false;
//     }

//     if (!password) {
//       errors.password = "Password is required";
//       isValid = false;
//     }

//     if (password !== confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//       isValid = false;
//     }

//     setError(errors);
//     return isValid;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:8080/client", {
//         firstName,
//         lastName,
//         phone,
//         clientEmail,
//         gender,
//         dateOfBirth,
//         password,
//       });

//       if (!res.data.isError) {
//         setError("");
//         alert(res.data.message);
//         navigate("/ClientLogin");
//       } else {
//         setError(res.data.message);
//         alert(res.data.message);
//         navigate("/RegisterPage");
//       }
//     } catch (error) {
//       console.error("Error to register:", error);
//       setError("Failed to register. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <div
//         style={{
//           minHeight: "100vh",
//           // minWidth: "93vh",
//           backgroundImage: `url('https://images.unsplash.com/photo-1492892132812-a00a8b245c45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "black",
//         }}
//       >
//         <Container className="mt-5 bg-white col-sm-6 col-lg-5 rounded p-4 shadow">
//           <p className="fw-bold text-center fs-4 py-2">Client Registration</p>
//           <Form>
//             <Row>
//               <Col sm={12} md={12} lg={12}>
//                 <Row>
//                   <Col sm={6} md={6} lg={6}>
//                     <Form.Group className="mb-3" controlId="firstName">
//                       <Form.Label>First Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter your First name"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                       />
//                       {error.firstName && (
//                         <Form.Text className="text-danger">
//                           {error.firstName}
//                         </Form.Text>
//                       )}
//                     </Form.Group>
//                   </Col>
//                   <Col sm={6} md={6} lg={6}>
//                     <Form.Group className="mb-3" controlId="lastName">
//                       <Form.Label>Last Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter your Last name"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       />
//                       {error.lastName && (
//                         <Form.Text className="text-danger">
//                           {error.lastName}
//                         </Form.Text>
//                       )}
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col>
//                     <Form.Group className="mb-3" controlId="phone">
//                       <Form.Label>Phone</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter your phone number"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                       />
//                       {error.phone && (
//                         <Form.Text className="text-danger">
//                           {error.phone}
//                         </Form.Text>
//                       )}
//                     </Form.Group>
//                   </Col>
//                   <Col>
//                     <Form.Group className="mb-1" controlId="gender">
//                       <Form.Label>Gender</Form.Label>
//                       <Form.Control
//                         as="select"
//                         value={gender}
//                         onChange={(e) => setGender(e.target.value)}
//                       >
//                         <option value="">Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                       </Form.Control>
//                       {error.gender && (
//                         <Form.Text className="text-danger">
//                           {error.gender}
//                         </Form.Text>
//                       )}
//                     </Form.Group>
//                   </Col>
//                 </Row>
//               </Col>

//               <Col sm={12} md={12} lg={12}>
//                 <Form.Group className="mb-3" controlId="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="example@gmail.com"
//                     value={clientEmail}
//                     onChange={(e) => setClientEmail(e.target.value)}
//                   />
//                   {error.clientEmail && (
//                     <Form.Text className="text-danger">
//                       {error.clientEmail}
//                     </Form.Text>
//                   )}
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="birthDate">
//                   <Form.Label>Birth Date</Form.Label>
//                   <Form.Control
//                     type="date"
//                     placeholder="Enter your birth date"
//                     value={dateOfBirth}
//                     onChange={(e) => setDateOfBirth(e.target.value)}
//                   />
//                   {error.dateOfBirth && (
//                     <Form.Text className="text-danger">
//                       {error.dateOfBirth}
//                     </Form.Text>
//                   )}
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="password">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Enter Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   {error.password && (
//                     <Form.Text className="text-danger">
//                       {error.password}
//                     </Form.Text>
//                   )}
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="confirmPassword">
//                   <Form.Label>Confirm Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Re-enter Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                   />
//                   {error.confirmPassword && (
//                     <Form.Text className="text-danger">
//                       {error.confirmPassword}
//                     </Form.Text>
//                   )}
//                 </Form.Group>
//               </Col>
//             </Row>

//             {error.common && (
//               <div className="mb-3 text-danger">{error.common}</div>
//             )}
//           </Form>
//           <Container className="d-flex justify-content-center">
//             <Button
//               className="col-6 mt-1"
//               variant="success"
//               onClick={handleSubmit}
//             >
//               Register
//             </Button>
//           </Container>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default ClientRegister;

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ClientRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const gridstyle = {
    minHeight: "100vh",
    backgroundImage: `url(https://images.unsplash.com/photo-1533892743580-890e5b193113?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
    backgroundSize: "cover",
    backgroundPosition: "Container",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const validateForm = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!phone.trim()) {
      errors.phone = "Phone is required";
    }
    if (!clientEmail.trim()) {
      errors.freelancerEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(clientEmail)) {
      errors.freelancerEmail = "Email is invalid";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!birthDate) {
      errors.birthDate = "Birth Date is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const res = await axios.post("http://localhost:8080/client", {
          firstName,
          lastName,
          phone,
          clientEmail,
          gender,
          dateOfBirth: birthDate,
          password,
        });
        if (res.data.error) {
          setErrors({ common: res.data.message });
        } else {
          setErrors({});
          if (res.data.message === "Client registration Successfull") {
            alert(res.data.message);
            navigate("/ClientLogin");
          } else {
            alert("freelancer registration Successfull");
            navigate("/ClientRegister");
            setErrors({
              common: "Username is not unique. Please choose another.",
            });
          }
        }
      } catch (error) {
        console.error("Error to register:", error);
        setErrors({ common: "Failed to register. Please try again later." });
      }
    }
  };

  return (
    <>
      <div style={gridstyle}>
        <Container className="border mt-5 bg-white col-sm-5 col-lg-5 rounded p-4 shadow">
          <p className="fw-bold fs-4 text-center">Client Registration</p>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {errors.firstName && (
                        <Form.Text className="text-danger">
                          {errors.firstName}
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      {errors.lastName && (
                        <Form.Text className="text-danger">
                          {errors.lastName}
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      {errors.phone && (
                        <Form.Text className="text-danger">
                          {errors.phone}
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-1" controlId="gender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        as="select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Form.Control>
                      {errors.gender && (
                        <Form.Text className="text-danger">
                          {errors.gender}
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col sm={12} md={12} lg={12}>
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                  {errors.freelancerEmail && (
                    <Form.Text className="text-danger">
                      {errors.freelancerEmail}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="birthDate">
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Enter your birth date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                  {errors.birthDate && (
                    <Form.Text className="text-danger">
                      {errors.birthDate}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <Form.Text className="text-danger">
                      {errors.password}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && (
                    <Form.Text className="text-danger">
                      {errors.confirmPassword}
                    </Form.Text>
                  )}
                </Form.Group>
              </Form>
            </Col>
          </Row>
          {errors.common && <p className="text-danger">{errors.common}</p>}
          <Container className="d-flex justify-content-center mt-2">
            <Button className="col-5" variant="success" onClick={handleSubmit}>
              Register
            </Button>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default ClientRegister;
