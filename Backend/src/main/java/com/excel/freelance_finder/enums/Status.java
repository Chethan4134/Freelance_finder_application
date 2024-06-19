package com.excel.freelance_finder.enums;


import lombok.Getter;
import lombok.RequiredArgsConstructor;


@Getter
@RequiredArgsConstructor
public enum Status {

	
	ACCEPT("ACCEPT"),
	DECLINE("DECLINE");
	
	private final String applicationStatus;
}
