package com.app.service;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AccountDao;
import com.app.dao.IUserDao;
import com.app.dto.CreateUserAccount;
import com.app.entities.Account;
import com.app.entities.User;


@Service
@Transactional
public class AccountServiceImpl implements AccountService {
	LocalDateTime dt=LocalDateTime.now();
	@Autowired
	private IUserDao userDao;
	@Autowired
	private AccountDao accDao;

	@Override
	public Account createNewAccount(CreateUserAccount request) {
		User user = userDao.getById(request.getUserId());
		Account acc = new Account(request.getAccountNumber(), request.getBalance(), request.getType());
		acc.setAccountOwner(user);
		
		int year=dt.getYear();
		
		int second=dt.getMinute();
		String s=""+year+second+request.getUserId();
		
		int a=Integer.parseInt(s);
		
		acc.setAccountNumber(a);
		return accDao.save(acc);
	}

//	@Override
//	public double getUserBalanceById(long accountNumber) {
//		accDao.getBalanceByAccountNumber(accountNumber);
//		return 0;
//	}

}
