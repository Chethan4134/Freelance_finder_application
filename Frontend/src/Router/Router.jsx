import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import ClientLogin from "../components/ClientComponents/ClientLogin/ClientLogin";
import FreelancerLogin from "../components/FreelancerComponents/FreelancerLogin/FreelancerLogin";
import FreelancerRegistration from "../components/FreelancerComponents/FreelancerRegistration/FreelancerRegistration";
import ClientRegister from "../components/ClientComponents/ClientRegister/ClientRegister";
import FreelancerHomePage from "../components/FreelancerComponents/FreelancerHome/FreelancerHomePage";
import JobPostingPage from "../components/ClientComponents/JobPosting/JobPostingPage";
import AboutInfo from "../Pages/AboutPage/AboutInfo";
import Contact from "../Pages/ContactPage/Contact";
import JobApplication from "../components/FreelancerComponents/JobApplication/JobApplication";
import ApplicationsDetails from "../components/ClientComponents/ApplicationDetails/ApplicationDetails";
import LogOut from "../components/reusableComponents/LogOut";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ClientRegister" element={<ClientRegister />} />
          <Route path="/ClientLogin" element={<ClientLogin />} />
          <Route
            path="/FreelancerRegistration"
            element={<FreelancerRegistration />}
          />
          <Route path="/FreelancerLogin" element={<FreelancerLogin />} />
          <Route path="/FreelancerHomePage" element={<FreelancerHomePage />} />
          <Route path="/JobPostingPage" element={<JobPostingPage />} />
          <Route path="/AboutInfo" element={<AboutInfo />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/jobApplication" element={<JobApplication />} />
          <Route path="/ApplicationDetails" element={<ApplicationsDetails />} />

          <Route path="/LogOut" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
