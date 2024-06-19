package com.excel.freelance_finder.service;

import java.util.List;

import com.excel.freelance_finder.dto.ClientDto;
import com.excel.freelance_finder.dto.FreelancerDto;
import com.excel.freelance_finder.dto.JobApplicationDto;
import com.excel.freelance_finder.dto.JobPostingDto;
import com.excel.freelance_finder.listdto.JobPostingList;

public interface FreelanceFinderService {

	String insertClientInfo(ClientDto dto);

	String jobPosting(JobPostingList dto);

	String insertFreelancerInfo(FreelancerDto dto);

	String jobApplication(JobApplicationDto dto);


	ClientDto getClientBy(ClientDto dto);

	FreelancerDto getFreelancerByEmail(FreelancerDto dto);


	List<JobPostingDto> getJobPostByEmail(JobPostingList dto);

	List<JobPostingDto> getJobFromFreelancerByEmail(FreelancerDto dto);

	void deleteClient(ClientDto dto);

	void deleteFreelancer(FreelancerDto dto);

	void updateClientInfo(ClientDto dto);

	void updateFreelancerInfo(FreelancerDto dto);

	ClientDto loginSignIn(ClientDto dto);

	FreelancerDto freelancerLogin(FreelancerDto dto);

	List<JobPostingDto> getAllJobPosting();

	List<JobApplicationDto> getJobAppliatonByJobId(String jobId);
	
	String jobApplicationStatus(JobApplicationDto dto);

	List<JobPostingDto> getJobPostingByTitle(String titel);



//	void updateApplicationStatus(JobApplicationDto dto);


//	void deleteJobPosting(JobPostingDto dto);
}
