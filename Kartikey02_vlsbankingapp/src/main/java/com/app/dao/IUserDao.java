package com.app.dao;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.User;
@Repository
@Transactional
public interface IUserDao extends JpaRepository<User, Long>
{
	

	User findByEmail(String em);
	User findByEmailAndPassword(String email,String password);
	User findByEmailAndProfilePassword(String email,String profilePassword);
	Optional<User> findUserByEmail(String email);
	
	 

}
