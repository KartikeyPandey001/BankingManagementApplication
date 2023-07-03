package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.IUserDao;
import com.app.dto.UpdateUserDto;
import com.app.entities.User;


@Service
@Transactional
public class UserServices implements IUserService {
	@Autowired
	IUserDao userDao;

	public User addUser(User user) {
		return userDao.save(user);

	}

	@Override
	public User authenticate(String email, String password) {
		System.out.println(email);
		User u = userDao.findByEmail(email);
		
		System.out.println("hii 2");
		if (u != null) {
			System.out.println("notnull");
			User user = u;
			if (password.equals(user.getPassword())) {
				System.out.println("authe succesfull");
				return user;

			}
		}

		return null;
	}
	@Override
	public User UpdatePassword(String email, String password) {
		Optional<User> optional = userDao.findUserByEmail(email);
		if (!optional.isPresent()) {
			throw new ResourceNotFoundException("We didn't find an account for that e-mail address.");
		} else {

			optional.get().setPassword(password);
			return userDao.save(optional.get());

		}
	}


	 
	 public Boolean checkByEmailAndSecurity(User useData) {
			User user=userDao.findByEmail(useData.getEmail());
			if(user.getSecurityAnswer().equals(useData.getSecurityAnswer())) {
				return true;
			}else {
				return false;
			}
		}

	@Override
	public List<User> getUsers() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}
	@Override
    public User findUserByIdd(long id) {
        return userDao.findById(id).orElse(null);
    }

	@Override
	public User updateUserById(long id, UpdateUserDto user) {
		  Optional<User> optionalUser = userDao.findById(id);
		        if (optionalUser.isPresent()) {
		            User existingUser = optionalUser.get();
		            existingUser.setFirstName(user.getFirstName());
		            existingUser.setLastName(user.getLastName());
		            existingUser.setAdhareNumber(user.getAdhareNumber());
		            existingUser.setCity(user.getCity());
		            existingUser.setSecurityQuestion(user.getSecurityQuestion());
		            existingUser.setSecurityAnswer(user.getSecurityAnswer());
		            return userDao.save(existingUser);
		        } else {
		            return null;
		        }
		    }
		
	

//	@Override
//	public Object getUserById(Integer userId) {
//		User user=this.userDao.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User", " Id ", userId));
//		return user;
//	}
	

}
