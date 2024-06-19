import React, { useState } from "react";
import ClientNavigationBar from "../../reusableComponents/ClientNavigationBar";
import axios from "axios";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  TextField,
} from "@mui/material";

export default function ApplicationsDetails() {
  const [jobId, setJobId] = useState("");
  const [formData, setFormData] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const findApplication = () => {
    axios
      .get(`http://localhost:8080/getApplication?jobId=${jobId}`)
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setFormData(response.data.data);
        setSelectedRowIndex(null);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  };

  const applicationStatus = (freelancerEmail, index) => {
    const status = "ACCEPT";
    console.log(freelancerEmail, jobId, status);
    axios
      .put("http://localhost:8080/applicationStatus", {
        freelancerEmail: freelancerEmail,
        jobId: jobId,
        applicationStatus: status,
      })
      .then((response) => {
        console.log("Status Updated", response);
        console.log(response.data.data);
        if (response.data.data === "updated") {
          alert("Accepted the application");
          setSelectedRowIndex(index);
        }
      })
      .catch((error) => {
        console.log("Error while updating", error);
      });
  };

  const declineApplicationStatus = (freelancerEmail, index) => {
    const status = "DECLINE";
    console.log(freelancerEmail, jobId, status);
    axios
      .put("http://localhost:8080/applicationStatus", {
        freelancerEmail: freelancerEmail,
        jobId: jobId,
        applicationStatus: status,
      })
      .then((response) => {
        console.log("Status Updated", response);
        console.log(response.data.data);
        if (response.data.data === "updated") {
          alert("Declined the application");
          setSelectedRowIndex(index);
        }
      })
      .catch((error) => {
        console.log("Error while updating", error);
      });
  };

  return (
    <>
      <ClientNavigationBar />
      <div>
        <Container className="d-flex justify-content-center pt-5">
          <TextField
            id="jobId"
            placeholder="JobId"
            variant="outlined"
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            sx={{ "& > :not(style)": { m: 2, height: "5vh", width: "25vh" } }}
          />
          <Button variant="contained" sx={{ m: 2 }} onClick={findApplication}>
            Search
          </Button>
        </Container>
        <Container className="p-5">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>JobID</TableCell>
                  <TableCell>Skills</TableCell>
                  <TableCell>Skill Experience</TableCell>
                  <TableCell>Skill Rating</TableCell>
                  <TableCell>Applied_At</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.freelancerEmail}</TableCell>
                    <TableCell>{row.jobId}</TableCell>
                    <TableCell>{row.skills}</TableCell>
                    <TableCell>{row.skillExperience}</TableCell>
                    <TableCell>{row.skillRating}</TableCell>
                    <TableCell>{row.appliedAt}</TableCell>
                    <TableCell>{row.skillDescription}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={selectedRowIndex === index} // Disable if row is selected
                          onClick={() => {
                            applicationStatus(row.freelancerEmail, index);
                          }}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={selectedRowIndex === index} // Disable if row is selected
                          onClick={() => {
                            declineApplicationStatus(
                              row.freelancerEmail,
                              index
                            );
                          }}
                        >
                          Decline
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
}
