package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "users")



@ToString

public class User extends BaseEntity {
	@NotBlank(message = "First name can't be blank")
	@Length(min=4,max=20,message = "Invalid first name!!!!!!")
	@Column(name = "first_name", length = 20)
	private String firstName;
	@NotBlank(message = "Last  name can't be blank")
	@Column(name = "last_name", length = 20)
	private String lastName;
	@Column(length = 20, unique = true)
	@Email(message = "Invalid email format")
	private String email;
	@Column(length = 20, unique = true)
	private String adhareNumber;
	@Column(length = 20)
//	@JsonIgnore : skipped during ser n de-ser
	@JsonProperty(access = Access.WRITE_ONLY) // skipped during ser(=marshalling) n kept during de-ser (un marshalling)
	//@Pattern(regexp = "((?=.*\\\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Invalid Password !")
	private String password;
	@Column(length = 20)
//	@JsonIgnore : skipped during ser n de-ser
	@JsonProperty(access = Access.WRITE_ONLY) // skipped during ser(=marshalling) n kept during de-ser (un marshalling)
	//@Pattern(regexp = "((?=.*\\\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Invalid Password !")
	private String profilePassword;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	//@NotNull(message = "Role must be supplied")
	private Role role;
	@Column(length = 300)
	private String securityQuestion;
	@Column (length = 20)
	private String securityAnswer;
	@Column(length =20)
	private String city;
	
	public User() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public User(@Email(message = "Invalid email format") String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public User(
			@NotBlank(message = "First name can't be blank") @Length(min = 4, max = 20, message = "Invalid first name!!!!!!") String firstName,
			@NotBlank(message = "Last  name can't be blank") String lastName,
			@Email(message = "Invalid email format") String email, String adhareNumber, String password,
			String profilePassword, Role role, String securityQuestion, String securityAnswer, String city) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.adhareNumber = adhareNumber;
		this.password = password;
		this.profilePassword = profilePassword;
		this.role = role;
		this.securityQuestion = securityQuestion;
		this.securityAnswer = securityAnswer;
		this.city = city;
	}



	public void print() {
		System.out.println(firstName+lastName+email+securityAnswer+profilePassword+securityQuestion+securityAnswer);
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getAdhareNumber() {
		return adhareNumber;
	}



	public void setAdhareNumber(String adhareNumber) {
		this.adhareNumber = adhareNumber;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getProfilePassword() {
		return profilePassword;
	}



	public void setProfilePassword(String profilePassword) {
		this.profilePassword = profilePassword;
	}



	public Role getRole() {
		return role;
	}



	public void setRole(Role role) {
		this.role = role;
	}



	public String getSecurityQuestion() {
		return securityQuestion;
	}



	public void setSecurityQuestion(String securityQuestion) {
		this.securityQuestion = securityQuestion;
	}



	public String getSecurityAnswer() {
		return securityAnswer;
	}



	public void setSecurityAnswer(String securityAnswer) {
		this.securityAnswer = securityAnswer;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public User(
			@NotBlank(message = "First name can't be blank") @Length(min = 4, max = 20, message = "Invalid first name!!!!!!") String firstName,
			@NotBlank(message = "Last  name can't be blank") String lastName, String adhareNumber,
			String securityQuestion, String securityAnswer, String city) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.adhareNumber = adhareNumber;
		this.securityQuestion = securityQuestion;
		this.securityAnswer = securityAnswer;
		this.city = city;
	}
	
	
}