package com.excel.freelance_finder.service.Implimentation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excel.freelance_finder.Repository.ApplicationRepository;
import com.excel.freelance_finder.Repository.ClientRepository;
import com.excel.freelance_finder.Repository.FreelancerRepository;
import com.excel.freelance_finder.Repository.JobPostingRepository;
import com.excel.freelance_finder.constant.FreelancerConstant;
import com.excel.freelance_finder.dto.ClientDto;
import com.excel.freelance_finder.dto.FreelancerDto;
import com.excel.freelance_finder.dto.JobApplicationDto;
import com.excel.freelance_finder.dto.JobPostingDto;
import com.excel.freelance_finder.entity.ClientUser;
import com.excel.freelance_finder.entity.Freelancer;
import com.excel.freelance_finder.entity.JobApplication;
import com.excel.freelance_finder.entity.JobPosting;
import com.excel.freelance_finder.exeption.FreelanceException;
import com.excel.freelance_finder.listdto.JobPostingList;
import com.excel.freelance_finder.service.FreelanceFinderService;
import com.excel.freelance_finder.util.FreelancerUtils;

@Service
public class FreelanceFinderImplentation implements FreelanceFinderService {

	@Autowired
	private ClientRepository clientRepository;

	@Autowired
	private FreelancerRepository freelancerRepository;

	@Autowired
	private JobPostingRepository postingRepository;

	@Autowired
	private ApplicationRepository applicationRepository;

//-------------------------------------------------------------------------------------------------------------	
	@Override
	public String insertClientInfo(ClientDto dto) {
		Optional<ClientUser> optional = clientRepository.findByClientEmail(dto.getClientEmail());
		if (optional.isEmpty()) {
			ClientUser clientUser = FreelancerUtils.dtoToClientUser(dto);
			ClientUser user = clientRepository.save(clientUser);
			return user.getClientEmail();
		}
		throw new FreelanceException(FreelancerConstant.ID_ALREADY_EXIST);
	}

//-------------------------------------------------------------------------------------------------------------

	@Override
	public String insertFreelancerInfo(FreelancerDto dto) {
		Optional<Freelancer> optional = freelancerRepository.findByFreelancerEmail(dto.getFreelancerEmail());
		if (optional.isEmpty()) {
			Freelancer freelancer = FreelancerUtils.dtoToFreelancer(dto);
			Freelancer freelancerUser = freelancerRepository.save(freelancer);
			return freelancerUser.getFreelancerEmail();
		}

		throw new FreelanceException(FreelancerConstant.FREELANCER_ID_ALREADY_EXIST);
	}

//--------------------------------------------------------------------------------------------------------------
	@Override
	public String jobPosting(JobPostingList dto) {
		Optional<ClientUser> optional = clientRepository.findByClientEmail(dto.getClientEmail());
		if (optional.isPresent()) {
			ClientUser clientUser = optional.get();
			List<JobPosting> jobPosting = FreelancerUtils.dtoToJobPosting(dto.getJobPosting());

			jobPosting.stream().forEach(e -> e.setClientUser(clientUser));
			clientUser.setJobPosting(jobPosting);
			clientRepository.save(clientUser);
			return clientUser.getClientEmail();
		}
		throw new FreelanceException(FreelancerConstant.ID_IS_NOT_EXIST);
	}

//---------------------------------------------------------------------------------------------------------------	

	@Override
	public String jobApplication(JobApplicationDto dto) {
//		Optional<JobApplication> optionalApplication = applicationRepository
//				.findByFreelancerFreelancerEmail(dto.getFreelancerEmail());
//		if (optionalApplication.isPresent())
//			throw new FreelanceException(FreelancerConstant.FREELANCER_ALREADY_APLLIED);
	Optional<JobApplication> optional = applicationRepository
			.findByFreelancerFreelancerEmailAndJobPostingJobId(dto.getFreelancerEmail(),dto.getJobId());
		if (!optional.isPresent()) {
			Optional<Freelancer> freelancerOptional = freelancerRepository.findByFreelancerEmail(dto.getFreelancerEmail());
			Optional<JobPosting> jobOptional = postingRepository.findByJobId(dto.getJobId());
			if (freelancerOptional.isPresent() && jobOptional.isPresent()) {
				Freelancer freelancer = freelancerOptional.get();
				JobPosting jobPosting = jobOptional.get();
				JobApplication application = FreelancerUtils.dtoToJobApplication(dto);
				if (freelancer.getJobAppliers() != null) {
					if (!freelancer.getJobAppliers().contains(application))
						freelancer.getJobAppliers().add(application);
				} else {
					freelancer.setJobAppliers(new ArrayList<>(Arrays.asList(application)));

				}
				if (jobPosting.getApplications() != null) {
					if (!jobPosting.getApplications().contains(application))
						jobPosting.getApplications().add(application);
				} else {
					jobPosting.setApplications(new ArrayList<>(Arrays.asList(application)));
				}

				application.setFreelancer(freelancer);
				application.setJobPosting(jobPosting);
				return freelancerRepository.save(freelancer).getFreelancerEmail();
			}
			throw new FreelanceException(FreelancerConstant.FREELANCER_ID_IS_NOT_EXIST);
		}
		throw new FreelanceException(FreelancerConstant.FREELANCER_ALREADY_APLLIED);
		
	}

//-----------------------------------------------------------------------------------------------------------------

	@Override
	public ClientDto getClientBy(ClientDto dto) {
		Optional<ClientUser> optional = clientRepository.findByClientEmail(dto.getClientEmail());
		if (optional.isPresent()) {
			ClientUser user = optional.get();

			ClientDto clientEntityToDto = FreelancerUtils.clientEntityToDto(user);

			return clientEntityToDto;
		}
		throw new FreelanceException(FreelancerConstant.ID_IS_NOT_EXIST);
	}
//------------------------------------------------------------------------------------------------------------------

	@Override
	public FreelancerDto getFreelancerByEmail(FreelancerDto dto) {
		Optional<Freelancer> optional = freelancerRepository.findByFreelancerEmail(dto.getFreelancerEmail());
		if (optional.isPresent()) {
			Freelancer user = optional.get();

			FreelancerDto freelancer = FreelancerUtils.freelancerLoginEntityToDto(user);

			return freelancer;
		}
		throw new FreelanceException(FreelancerConstant.FREELANCER_ID_IS_NOT_EXIST);

	}
//--------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------	

	@Override
	public List<JobPostingDto> getJobPostByEmail(JobPostingList dto) {
		Optional<ClientUser> optional = clientRepository.findByClientEmail(dto.getClientEmail());
		if (optional.isPresent()) {
			ClientUser clientUser = optional.get();
			return clientUser.getJobPosting().stream()
					.map(e -> JobPostingDto.builder().titel(e.getTitel())
							.clientEmail(e.getClientUser().getClientEmail()).jobId(e.getJobId())
							.description(e.getDescription()).budget(e.getBudget()).postingAt(e.getPostingAt())
							.skillsRequired(e.getSkillsRequired()).build())
					.collect(Collectors.toList());
		}
		throw new FreelanceException(FreelancerConstant.ID_IS_NOT_EXIST);
	}
//-----------------------------------------------------------------------------------------------------------------------		

	@Override
	public List<JobPostingDto> getJobFromFreelancerByEmail(FreelancerDto dto) {
		Optional<Freelancer> optional = freelancerRepository.findByFreelancerEmail(dto.getFreelancerEmail());
		if (optional.isPresent()) {
			Freelancer freelancer = optional.get();
			return freelancer.getJobAppliers().stream()
					.map(e -> JobPostingDto.builder().titel(e.getJobPosting().getTitel())
							.jobId(e.getJobPosting().getJobId()).description(e.getJobPosting().getDescription())
							.budget(e.getJobPosting().getBudget()).postingAt(e.getJobPosting().getPostingAt())
							.skillsRequired(e.getJobPosting().getSkillsRequired()).build())
					.collect(Collectors.toList());
		}
		throw new FreelanceException(FreelancerConstant.FREELANCER_ID_IS_NOT_EXIST);
	}
//--------------------------------------------------------------------------------------------------------------------------		

	@Override
	public void deleteClient(ClientDto dto) {
		Optional<ClientUser> optional = clientRepository.findByClientEmail(dto.getClientEmail());
		if (optional.isPresent()) {
			clientRepository.delete(optional.get());
		} else {
			throw new FreelanceException(FreelancerConstant.ID_IS_NOT_EXIST);
		}
	}
//----------------------------------------------------------------------------------------------------------------------------

	@Override
	public void deleteFreelancer(FreelancerDto dto) {
		Optional<Freelancer> optional = freelancerRepository.findByFreelancerEmail(dto.getFreelancerEmail());
		if (optional.isPresent()) {
			freelancerRepository.delete(optional.get());
		} else {
			throw new FreelanceException(FreelancerConstant.ID_IS_NOT_EXIST);
		}
	}
//----------------------------------------------------------------------------------------------------------------------------

	@Override
	public void updateClientInfo(ClientDto dto) {
		Optional<ClientUser> optional = clientRepository.findByClientEmail(dto.getClientEmail());
		if (optional.isPresent()) {
			ClientUser clientUser = optional.get();
			clientUser.setLastName(dto.getLastName());
			clientUser.setPhone(dto.getPhone());
			clientUser.setPassword(dto.getPassword());

			clientRepository.save(clientUser);
		} else {
			throw new FreelanceException(FreelancerConstant.ID_IS_NOT_EXIST);
		}
	}
//----------------------------------------------------------------------------------------------------------------------------

	@Override
	public void updateFreelancerInfo(FreelancerDto dto) {
		Optional<Freelancer> optional = freelancerRepository.findByFreelancerEmail(dto.getFreelancerEmail());
		if (optional.isPresent()) {
			Freelancer freelancer = optional.get();
			freelancer.setLastName(dto.getLastName());
			freelancer.setPassword(dto.getPassword());
			freelancer.setPhone(dto.getPhone());
			freelancerRepository.save(freelancer);
		} else {
			throw new FreelanceException(FreelancerConstant.FREELANCER_ID_ALREADY_EXIST);
		}
	}
//-----------------------------------------------------------------------------------------------------------------------------

	@Override
	public ClientDto loginSignIn(ClientDto dto) {
		Optional<ClientUser> email = clientRepository.findByClientEmail(dto.getClientEmail());
		if (email.isPresent()) {
			ClientUser clientUser = email.get();
			if (clientUser.getPassword().equals(dto.getPassword())) {
				return ClientDto.builder()
						.firstName(clientUser.getFirstName())
						.clientEmail(clientUser.getClientEmail())
						.response(true)
						.build();
			} else {
				return ClientDto.builder()
						.response(false)
						.build();
			}
		}
		 throw new FreelanceException(FreelancerConstant.ID_IS_NOT_EXIST);
		
	}
//-----------------------------------------------------------------------------------------------------------------------------

	@Override
	public FreelancerDto freelancerLogin(FreelancerDto dto) {
		Optional<Freelancer> loginFreelance = freelancerRepository.findByFreelancerEmail(dto.getFreelancerEmail());
		if (loginFreelance.isPresent()) {
			Freelancer freelancer = loginFreelance.get();
			if (freelancer.getPassword().equals(dto.getPassword())) {
				return FreelancerDto.builder()
						.firstName(freelancer.getFirstName())
						.freelancerEmail(freelancer.getFreelancerEmail())
						.response(true)
						.build();
			} else {
				return FreelancerDto.builder()
						.response(false)
						.build();
			}
		}
		throw new FreelanceException(FreelancerConstant.FREELANCER_ID_IS_NOT_EXIST);
	}
//---------------------------------------------------------------------------------------------------------------------------------

	@Override
	public List<JobPostingDto> getAllJobPosting() {

		return postingRepository.findAll().stream()
				.map(e -> JobPostingDto.builder().clientEmail(e
						.getClientUser()
						.getClientEmail())
						.jobId(e.getJobId())
						.titel(e.getTitel())
						.description(e
								.getDescription())
								.skillsRequired(e
										.getSkillsRequired())
						.budget(e
								.getBudget())
						.postingAt(e
								.getPostingAt())
						.build())
				.collect(Collectors.toList());
	}
//------------------------------------------------------------------------------------------------------------------------------------

	@Override
	public List<JobApplicationDto> getJobAppliatonByJobId(String jobId) {
		Optional<JobPosting> optional = postingRepository.findByJobId(jobId);
		if (optional.isPresent()) {
			JobPosting jobPosting = optional.get();
			return jobPosting.getApplications().stream()
					.map(e -> JobApplicationDto.builder().jobId(e.getJobPosting().getJobId())
							.freelancerEmail(e.getFreelancer().getFreelancerEmail()).appliedAt(e.getAppliedAt())
							.skillDescription(e.getSkillDescription()).skills(e.getSkills())
							.skillExperience(e.getSkillExperience()).skillRating(e.getSkillRating()).build())
					.collect(Collectors.toList());
		}
		return null;

	}

	@Override
	public String jobApplicationStatus(JobApplicationDto dto) {
		Optional<JobApplication> optional = applicationRepository
				.findByFreelancerFreelancerEmailAndJobPostingJobId(dto.getFreelancerEmail(), dto.getJobId());
		if (optional.isPresent()) {
			JobApplication application = optional.get();
			application.setApplicationStatus(dto.getApplicationStatus());
			applicationRepository.save(application);
			return "updated";
		}
		return null;
	}
//---------------------------------------------------------------------------------------------------------------------------------------

	@Override
	public List<JobPostingDto> getJobPostingByTitle(String titel) {
		List<JobPostingDto> getting = postingRepository.findAll()
				.stream().map(FreelancerUtils::JobPostingToDto)
				.sorted(Comparator.comparing(JobPostingDto::getPostingAt)
				.reversed()).collect(Collectors.toList());

		if (titel != null) {
			return getting.stream().filter(b -> b.getTitel().toLowerCase().contains(titel.toLowerCase()))
					.collect(Collectors.toList());
		} else
			return getting;
	}

}
