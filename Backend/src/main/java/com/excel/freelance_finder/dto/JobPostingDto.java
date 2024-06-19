package com.excel.freelance_finder.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class JobPostingDto {

	private String clientEmail;
	private String jobId;
	private String titel;
	private String description;
	private String skillsRequired;
	private String budget;
	private LocalDate postingAt;
	
}
