package com.app.dto;

import com.app.entities.Type;


public class CreateUserAccount {
	private Long userId;
	private double balance;
	private Type type;
	
	public CreateUserAccount() {
		// TODO Auto-generated constructor stub
	}

	public CreateUserAccount(Long userId, double balance, Type type) {
		super();
		this.userId = userId;
		
		this.balance = balance;
		this.type = type;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public Integer getAccountNumber() {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
