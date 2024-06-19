import React, { useState, useEffect } from "react";
import axios from "axios";
import FreelancerNavigation from "../../reusableComponents/FreelancerNavigation";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

function FreelancerHomePage() {
  const name = window.sessionStorage.getItem("firstName");
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/findAllJobPost");
      setJobs(response.data.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      (job.titel &&
        job.titel.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (job.description &&
        job.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (job.jobId && job.jobId.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <FreelancerNavigation />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url('https://cdn6.f-cdn.com/contestentries/1562160/33331481/5d4ed0c6cacac_thumb900.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            sx={{
              fontFamily: "Baufra",
              color: "#32012F",
              textShadow: "2px 2px 5px #C0A4DC",
            }}
          >
            <h3> Welcome {name}</h3>
            FIND YOUR DREAM JOB
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#A57ECE", fontFamily: "inherit" }}
          >
            Browse jobs posted on Upwork, or jump right in and create a free
            profile to find the work that you love to do.
          </Typography>
          <Box
            sx={{
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
              marginLeft: "170px",
            }}
          >
            <TextField
              id="outlined-search"
              label="Search jobs"
              type="search"
              variant="outlined"
              fullWidth
              style={{ borderRadius: "20px" }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button
              variant="contained"
              style={{ borderRadius: "20px", marginLeft: "10px" }}
            >
              Search
            </Button>
          </Box>
          <Box mt={4}>
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{ color: "#601AA9" }}
            >
              Latest Jobs
            </Typography>
            {filteredJobs.map((job, index) => (
              <Card
                key={index}
                sx={{
                  marginBottom: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "#F1EAFF",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {job.titel || "Untitled Job"}{" "}
                  </Typography>
                  <Typography variant="body1" component="div" gutterBottom>
                    {job.description}
                  </Typography>
                  <Typography variant="body2" component="div" gutterBottom>
                    <p> JobId : {job.jobId}</p>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                  >
                    Created: {job.postingAt}
                  </Typography>
                  <Link to={"/jobApplication"}>
                    <Button
                      variant="contained"
                      style={{ borderRadius: "20px", marginTop: "10px" }}
                    >
                      Apply Job
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default FreelancerHomePage;
