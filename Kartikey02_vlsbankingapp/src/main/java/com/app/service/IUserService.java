package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.dto.UpdateUserDto;
import com.app.entities.Account;
import com.app.entities.User;
public interface IUserService {
	 public User addUser(User user);
	 public User authenticate(String email, String password);
	 User UpdatePassword(String email,String password);
	public List<User> getUsers();
	User findUserByIdd(long id);
	
	User updateUserById(long id, UpdateUserDto user);
	
//	public Object getUserById(Integer userId);
}
