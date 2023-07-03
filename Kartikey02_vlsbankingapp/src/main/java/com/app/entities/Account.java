package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "accounts")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Account extends BaseEntity {
	
	
	@Column(name = "acc_number", unique = true, length = 20)
	private Integer accountNumber;

	private double balance;
	

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	@NotNull(message = "Role must be supplied")
	private Type type;
	@ManyToOne
	@JsonIgnore // to tell Jackson(=vendor for marshalling n un marshalling) , to ignore this
				// property during ser n de-ser
	@JoinColumn(name = "user_id")
	private User accountOwner;
	public Account(Integer accountNumber, double balance, @NotNull(message = "Role must be supplied") Type type) {
		super();
		this.accountNumber = accountNumber;
		this.balance = balance;
		this.type = type;
	}
	public Integer getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(Integer accountNumber) {
		this.accountNumber = accountNumber;
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
	public User getAccountOwner() {
		return accountOwner;
	}
	public void setAccountOwner(User accountOwner) {
		this.accountOwner = accountOwner;
	}
	
	
	

}