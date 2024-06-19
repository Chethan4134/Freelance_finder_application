package com.excel.freelance_finder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excel.freelance_finder.dto.ClientDto;
import com.excel.freelance_finder.dto.FreelancerDto;
import com.excel.freelance_finder.dto.JobApplicationDto;
import com.excel.freelance_finder.dto.JobPostingDto;
import com.excel.freelance_finder.listdto.JobPostingList;
import com.excel.freelance_finder.responce.CommonResponce;
import com.excel.freelance_finder.service.FreelanceFinderService;

import static com.excel.freelance_finder.constant.FreelancerConstant.CLIENT_DETAILS;
import static com.excel.freelance_finder.constant.FreelancerConstant.FREELANCER_DETAILS;;

@RestController
@CrossOrigin
public class FetchController {

	@Autowired
	private FreelanceFinderService finderService;

	@GetMapping("/getClient")
	public ResponseEntity<CommonResponce<ClientDto>> getClientInfo(@RequestBody ClientDto dto) {
		ClientDto clientDto = finderService.getClientBy(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponce.<ClientDto>builder()
				.data(clientDto)
				.message(CLIENT_DETAILS)
				.isError(false)
				.build());
	}
	
//------------------------------------------------------------------------------------------------------------------
	@GetMapping("/getFreelancer")
	public ResponseEntity<CommonResponce<FreelancerDto>> getFreelancerInfo(@RequestBody FreelancerDto dto) {
		FreelancerDto freelancerDto = finderService.getFreelancerByEmail(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponce.<FreelancerDto>builder()
				.data(freelancerDto)
				.message(FREELANCER_DETAILS)
				.isError(false)
				.build());
	}
	
//-------------------------------------------------------------------------------------------------------------------
	
	@GetMapping("/getJobPosting")
	public ResponseEntity<CommonResponce<List<JobPostingDto>>> getJobPostingInfo(@RequestBody JobPostingList dto) {
		List<JobPostingDto> potingJob = finderService.getJobPostByEmail(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponce.<List<JobPostingDto>>builder()
				.data(potingJob)
				.message("Fetching the JobPosting Details")
				.isError(false)
				.build());
	}
//---------------------------------------------------------------------------------------------------------------------

	@GetMapping("/getJobPostingFromFreelancer")
	public ResponseEntity<CommonResponce<List<JobPostingDto>>> getJobPostingFormFreelancer(@RequestBody FreelancerDto dto) {
		List<JobPostingDto> potingJob = finderService.getJobFromFreelancerByEmail(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponce.<List<JobPostingDto>>builder()
				.data(potingJob)
				.message("Fetching the JobPosting Details From Freelancer")
				.isError(false)
				.build());
	}
//-----------------------------------------------------------------------------------------------------------------------
	@GetMapping("/findAllJobPost")
	public ResponseEntity<CommonResponce<List<JobPostingDto>>>getAllJob() {
		List<JobPostingDto> jobPostingDto = finderService.getAllJobPosting();
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponce.<List<JobPostingDto>>builder()
				.data(jobPostingDto)
				.message("Fetching all the job Details")
				.isError(false)
				.build());
	}
//------------------------------------------------------------------------------------------------------------------------
	@GetMapping("/getApplication")
	public ResponseEntity<CommonResponce<List<JobApplicationDto>>> getJobPostingInfo
	(@RequestParam(name = "jobId") String jobId ) {
		List<JobApplicationDto> jobApplication = finderService.getJobAppliatonByJobId(jobId);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(CommonResponce.<List<JobApplicationDto>>builder()
				.data(jobApplication)
				.message("Fetching the JobPosting Details")
				.isError(false)
				.build());
	}
//-------------------------------------------------------------------------------------------------------------------------------
	
	@GetMapping(path = "/jobPostingByTitle")
	public ResponseEntity<CommonResponce<List<JobPostingDto>>> getJobPostingBySearch(
			@RequestParam(name = "titel",required = false) String titel){
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(CommonResponce.<List<JobPostingDto>>builder().
						data(finderService.getJobPostingByTitle(titel))
				.isError(false).message("GET_USER").build());
	}	
	
}


