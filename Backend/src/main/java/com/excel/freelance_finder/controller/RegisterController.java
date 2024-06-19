package com.excel.freelance_finder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excel.freelance_finder.dto.ClientDto;
import com.excel.freelance_finder.dto.FreelancerDto;
import com.excel.freelance_finder.dto.JobApplicationDto;
import com.excel.freelance_finder.listdto.JobPostingList;
import com.excel.freelance_finder.responce.CommonResponce;
import com.excel.freelance_finder.service.FreelanceFinderService;

import static com.excel.freelance_finder.constant.FreelancerConstant.CLIENT_REGISTRATION_SUCCESSFULLY;
import static com.excel.freelance_finder.constant.FreelancerConstant.FREELANCER_REGISTRATION_SUCCESSFULLY;
import static com.excel.freelance_finder.constant.FreelancerConstant.CLIENT_LOGIN_SUCCESSFULLY;
import static com.excel.freelance_finder.constant.FreelancerConstant.FREELANCER_LOGIN_SUCCESSFULLY;
import static com.excel.freelance_finder.constant.FreelancerConstant.CLIENT_JOB_POSTING;
import static com.excel.freelance_finder.constant.FreelancerConstant.FREELANCER_JOB_APPLICATION;

@RestController
@CrossOrigin
public class RegisterController {

	@Autowired
	private FreelanceFinderService finderService;

	@PostMapping("/client")
	public ResponseEntity<CommonResponce<String>> postClientInfo(@RequestBody ClientDto dto) {
		String clientEmail = finderService.insertClientInfo(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponce.<String>builder()
						.data(clientEmail)
						.message(CLIENT_REGISTRATION_SUCCESSFULLY)
						.isError(false).build());
	}

//-------------------------------------------------------------------------------------------------------	
	@PostMapping("/freelancer")
	public ResponseEntity<CommonResponce<String>> postFreelancerInfo(@RequestBody FreelancerDto dto) {
		String freelancerEmail = finderService.insertFreelancerInfo(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(
				CommonResponce.<String>builder()
				.data(freelancerEmail).message(FREELANCER_REGISTRATION_SUCCESSFULLY).isError(false).build());
	}

//------------------------------------------------------------------------------------------------------
	@PostMapping("/posting")
	public ResponseEntity<CommonResponce<String>> postJobPosting(@RequestBody JobPostingList dto) {
		String clientEmail = finderService.jobPosting(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(CommonResponce.<String>builder().data(clientEmail).message(CLIENT_JOB_POSTING).isError(false).build());
	}

//-------------------------------------------------------------------------------------------------------	
	@PostMapping("/application")
	public ResponseEntity<CommonResponce<String>> postJobApplication(@RequestBody JobApplicationDto dto) {
		String freelancerEmail = finderService.jobApplication(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(
				CommonResponce.<String>builder().data(freelancerEmail).message(FREELANCER_JOB_APPLICATION).isError(false).build());
	}
//---------------------------------------------------------------------------------------------------------	

	@PostMapping("/clientLogIn")
	public ResponseEntity<CommonResponce<ClientDto>> clientLogIn(@RequestBody ClientDto dto) {
		ClientDto signIn = finderService.loginSignIn(dto);
		return ResponseEntity.status(HttpStatus.OK).body(CommonResponce.<ClientDto>builder().data(signIn).isError(false)
				.message(CLIENT_LOGIN_SUCCESSFULLY).build());
	}
//------------------------------------------------------------------------------------------------------------
	@PostMapping("/freelancerLogIn")
	public ResponseEntity<CommonResponce<FreelancerDto>> freelancerLogIn(@RequestBody FreelancerDto dto){
		FreelancerDto login = finderService.freelancerLogin(dto);
	return ResponseEntity.status(HttpStatus.OK).body(CommonResponce.<FreelancerDto>builder().data(login).isError(false)
			.message(FREELANCER_LOGIN_SUCCESSFULLY).build());
	}
//------------------------------------------------------------------------------------------------------------
}
