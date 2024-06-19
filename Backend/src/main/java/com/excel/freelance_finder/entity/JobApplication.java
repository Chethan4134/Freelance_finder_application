package com.excel.freelance_finder.entity;

import java.time.LocalDate;


import com.excel.freelance_finder.enums.Status;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class JobApplication {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer applicationId;
	@Enumerated
	private Status applicationStatus;
	private LocalDate appliedAt;
	private String skills;
	private String skillExperience;
	private Double skillRating;
	private String skillDescription;
	
	
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private Freelancer freelancer;
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private JobPosting jobPosting;
	
}
