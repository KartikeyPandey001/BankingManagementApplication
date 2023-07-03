package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.AccountDao;
import com.app.dao.IUserDao;
import com.app.dto.CreateUserAccount;
import com.app.dto.UpdateUserDto;
import com.app.entities.Account;
import com.app.entities.User;
import com.app.service.AccountService;
import com.app.service.IUserService;
import com.app.service.UserServices;

@CrossOrigin
@RestController
@RequestMapping("/user")

public class UserController {
	@Autowired
	IUserService userService;

	@Autowired
	IUserDao userDao;
	 
	@Autowired
	UserServices userS;
	
	@Autowired
	private AccountService accService;
	
	@Autowired
	private AccountDao accountDao;

	// For add user
	@PostMapping("/register")
	public User addUser(@RequestBody User user) {
		System.out.println("hii");
		user.print();
		return userService.addUser(user);

	}

	
	  @PostMapping("/login") public User getUser(@RequestBody User user) {
	  System.out.println(user.getFirstName());
	  
	  return userDao.findByEmailAndPassword(user.getEmail(), user.getPassword());
	  
	  }
	  
	  @PostMapping("/login/{id}") public User getValidatedUserThroughProfilePassword(@RequestBody User user) {
		  System.out.println("Welcome your profile pasword matches");
		  
		  return userDao.findByEmailAndProfilePassword(user.getEmail(), user.getProfilePassword());
		  
		  }
	/*
	 * @PostMapping("/login") public ResponseEntity<?> userLogin(@RequestParam
	 * String email, @RequestParam String password) {
	 * System.out.println("in login user details");
	 * 
	 * return new ResponseEntity<>(userDao.findByEmailAndPassword(email, password),
	 * HttpStatus.OK); }
	 */

	  @PatchMapping("/updatePass")
		public ResponseEntity<?> updatepassword(@RequestBody User user) {
			return new ResponseEntity<>(userService.UpdatePassword(user.getEmail(), user.getPassword()), HttpStatus.CREATED);
		}
	  
	  @PostMapping("/validateSecurityAnswer")
		public String checkIfUserExistByEmailAndSecurity(@RequestBody User useData ){
			Boolean emailExists=userS.checkByEmailAndSecurity(useData);
			return emailExists.toString();
			
		}
	  
	  @GetMapping("/getallUser")
		public List<User> getAllUser(){
			
			return userService.getUsers();
			
		}
	  
	  @DeleteMapping("/{id}") 
	  public void getUserById(@PathVariable long id)
	  {
		  System.out.println(id);
		  //userService.findUserById(id);
		  userDao.deleteById(id);
		  
	  return ;
	  }
	  
	  @GetMapping("/{id}")
	  public User getUserByIdd(@PathVariable long id) {
	      return userDao.findById(id).orElse(null);
	  }
	  
	  @PutMapping("/{id}")
	  public User updateUserById(@PathVariable long id, @RequestBody UpdateUserDto user) {
	      return userService.updateUserById(id, user);
	  }
	  
	  @PostMapping("/createAcc")
		public Account createAcc(@RequestBody CreateUserAccount request) {
			return accService.createNewAccount(request);
		}

	  @GetMapping("/getbalanceByAcNo/{accountNumber}")
	  public double getBalance(@PathVariable int accountNumber) {
		 
		return accountDao.getBalanceByUserId(accountNumber);
		  
	  }
	  @GetMapping("/getAccountByUserId/{id}")
		public ResponseEntity<?> updatepassword(@PathVariable Long id) {
		  User user = userDao.findById(id).get();
			return new ResponseEntity<>(accountDao.findByAccountOwner(user), HttpStatus.CREATED);
		}
	  
	}


	  
	  
