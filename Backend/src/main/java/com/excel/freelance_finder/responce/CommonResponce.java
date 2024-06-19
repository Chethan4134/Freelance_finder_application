package com.excel.freelance_finder.responce;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CommonResponce<T> {

	private T data;
	private String message;
	private Boolean isError;
}
