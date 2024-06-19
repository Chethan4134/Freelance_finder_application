package com.excel.freelance_finder.exeption;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class FreelanceExceptionHandler  {
	
	@ExceptionHandler(FreelanceException.class)
	public ResponseEntity<String> employeeNotFound(RuntimeException exp){
		return ResponseEntity.ok(exp.getMessage());
	}
}
