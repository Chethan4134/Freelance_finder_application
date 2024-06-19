package com.excel.freelance_finder.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.freelance_finder.entity.JobApplication;

public interface ApplicationRepository extends JpaRepository<JobApplication, Integer> {

	Optional<JobApplication> findByFreelancerFreelancerEmail(String freelancerEmail);

	Optional<JobApplication> findByFreelancerFreelancerEmailAndJobPostingJobId(String freelancerEmail, String jobId);
}
