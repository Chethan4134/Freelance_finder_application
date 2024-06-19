package com.excel.freelance_finder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.excel.freelance_finder.dto.ClientDto;
import com.excel.freelance_finder.dto.FreelancerDto;
import com.excel.freelance_finder.dto.JobApplicationDto;
import com.excel.freelance_finder.responce.CommonResponce;
import com.excel.freelance_finder.service.FreelanceFinderService;
import static com.excel.freelance_finder.constant.FreelancerConstant.JOB_APPLICATION_STATUS;


@RestController
@CrossOrigin
public class PutController {

	
	@Autowired
	private FreelanceFinderService finderService;

	@DeleteMapping("/deleteClient")
	public ResponseEntity<String> deleteClientRecord(@RequestBody ClientDto dto) {
		finderService.deleteClient(dto);
		return ResponseEntity.ok("Client Data Successfully Deleted");
	}
//-------------------------------------------------------------------------------------------------------
	

	@DeleteMapping("/deleteFreelancer")
	public ResponseEntity<String> deleteFreelancerRecord(@RequestBody FreelancerDto dto) {
		finderService.deleteFreelancer(dto);
		return ResponseEntity.ok("Freelancer Data Successfully Deleted");
	}
//--------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------
	@PutMapping("/updateClientInfo")
	public ResponseEntity<String> updateClientInfo(@RequestBody ClientDto dto){
		finderService.updateClientInfo(dto);
		return ResponseEntity.ok("client Data update Successfully");
	}
//----------------------------------------------------------------------------------------------------------
	@PutMapping("/updateFreelancerInfo")
	public ResponseEntity<String> updateFreelancerInfo(@RequestBody FreelancerDto dto){
		finderService.updateFreelancerInfo(dto);
		return ResponseEntity.ok("Freelancer Data update Successfully");
	}
	
//---------------------------------------------------------------------------------------------------------------------	
	
	@PutMapping("/applicationStatus")
	public ResponseEntity<CommonResponce<String>> postJobApplicationStatus(@RequestBody JobApplicationDto dto) {
		String applicationStatus = finderService.jobApplicationStatus(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(
				CommonResponce.<String>builder().data(applicationStatus).message(JOB_APPLICATION_STATUS).isError(false).build());
	}
	
	
	
	
}





