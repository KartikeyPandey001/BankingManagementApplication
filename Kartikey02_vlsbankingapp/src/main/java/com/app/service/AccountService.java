package com.app.service;

import com.app.dto.CreateUserAccount;
import com.app.entities.Account;

public interface AccountService {

	Account createNewAccount(CreateUserAccount request);
//	
//	public double getBalanceByUserId(long userId);
//	public double getBalanceByAccountNo(String accountNo);
}
