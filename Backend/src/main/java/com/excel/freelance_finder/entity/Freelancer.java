package com.excel.freelance_finder.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
public class Freelancer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer freelancertId;
	private String firstName;
	private String lastName;
	private Long phone;
	private String freelancerEmail;
	private String gender;
	private LocalDate dateOfBirth;
	private String password;
	
	

	@OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,mappedBy = "freelancer")
	private List<JobApplication> jobAppliers;
	
}
