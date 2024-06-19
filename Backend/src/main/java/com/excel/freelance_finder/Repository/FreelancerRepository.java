package com.excel.freelance_finder.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.freelance_finder.entity.Freelancer;

public interface FreelancerRepository extends JpaRepository<Freelancer, Integer> {

	Optional<Freelancer> findByFreelancerEmail(String freelancerEmail);

}
