package com.excel.freelance_finder.listdto;



import java.util.List;

import com.excel.freelance_finder.dto.JobPostingDto;

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
public class JobPostingList {
	
	private String clientEmail;
	private List<JobPostingDto> jobPosting;

}
