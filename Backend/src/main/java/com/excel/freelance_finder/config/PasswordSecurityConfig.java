package com.excel.freelance_finder.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordSecurityConfig {
	
	@Bean
	PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}
}
