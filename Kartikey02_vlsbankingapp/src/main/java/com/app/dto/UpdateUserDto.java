package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateUserDto {
	private String firstName;
	private String lastName;
	private String adhareNumber;
	private String securityQuestion;
	private String securityAnswer;
	private String city;
}
