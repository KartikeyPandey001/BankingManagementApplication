package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.TransactionDao;
import com.app.entities.Transaction;

@Service
@Transactional


public class TransctionalService implements ITransctionalService {
	@Autowired
	TransactionDao tdao;

	@Override
	public void makeTransction(Transaction t) {
		tdao.save(t);
		
		
	}
	
	

}
