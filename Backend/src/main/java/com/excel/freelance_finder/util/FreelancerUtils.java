package com.excel.freelance_finder.util;

import java.util.List;
import java.util.stream.Collectors;

import com.excel.freelance_finder.dto.ClientDto;
import com.excel.freelance_finder.dto.FreelancerDto;
import com.excel.freelance_finder.dto.JobApplicationDto;
import com.excel.freelance_finder.dto.JobPostingDto;
import com.excel.freelance_finder.entity.ClientUser;
import com.excel.freelance_finder.entity.Freelancer;
import com.excel.freelance_finder.entity.JobApplication;
import com.excel.freelance_finder.entity.JobPosting;

public class FreelancerUtils {

	public static ClientUser dtoToClientUser(ClientDto dto) {
		return ClientUser.builder().firstName(dto.getFirstName()).lastName(dto.getLastName()).phone(dto.getPhone())
				.clientEmail(dto.getClientEmail()).gender(dto.getGender()).dateOfBirth(dto.getDateOfBirth())
				.password(dto.getPassword()).build();
	}

	public static List<JobPosting> dtoToJobPosting(List<JobPostingDto> dto) {
		return dto.stream()
				.map(e -> JobPosting.builder().jobId(e.getJobId()).titel(e.getTitel()).description(e.getDescription())
						.skillsRequired(e.getSkillsRequired()).budget(e.getBudget()).postingAt(e.getPostingAt())

						.build())
				.collect(Collectors.toList());
	}

	public static Freelancer dtoToFreelancer(FreelancerDto dto) {
		return Freelancer.builder().firstName(dto.getFirstName()).lastName(dto.getLastName()).phone(dto.getPhone())
				.freelancerEmail(dto.getFreelancerEmail()).gender(dto.getGender()).dateOfBirth(dto.getDateOfBirth())
				.password(dto.getPassword()).build();
	}

	public static JobApplication dtoToJobApplication(JobApplicationDto dto) {
		return JobApplication.builder().applicationStatus(dto.getApplicationStatus()).appliedAt(dto.getAppliedAt())
				.skills(dto.getSkills()).skillExperience(dto.getSkillExperience()).skillRating(dto.getSkillRating())
				.skillDescription(dto.getSkillDescription()).build();
	}

	public static ClientDto clientEntityToDto(ClientUser dto) {
		return ClientDto.builder().firstName(dto.getFirstName()).lastName(dto.getLastName())
				.clientEmail(dto.getClientEmail()).phone(dto.getPhone()).gender(dto.getGender())
				.dateOfBirth(dto.getDateOfBirth()).response(true).build();
	}

	public static FreelancerDto freelancerLoginEntityToDto(Freelancer user) {

		return FreelancerDto.builder().firstName(user.getFirstName()).lastName(user.getLastName())
				.freelancerEmail(user.getFreelancerEmail()).phone(user.getPhone()).gender(user.getGender())
				.dateOfBirth(user.getDateOfBirth()).build();
	}

	public static JobPostingDto JobPostingToDto(JobPosting jobPosting) {
		return JobPostingDto.builder().clientEmail(jobPosting.getClientUser().getClientEmail())
				.jobId(jobPosting.getJobId()).titel(jobPosting.getTitel()).description(jobPosting.getDescription())
				.skillsRequired(jobPosting.getSkillsRequired()).build();
	}

}
