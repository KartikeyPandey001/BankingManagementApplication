package com.app.controller;

import static java.time.LocalDate.parse;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.AccountDao;
import com.app.dao.IUserDao;
import com.app.dao.TransactionDao;
import com.app.dto.MonyTransfer;
import com.app.entities.Account;
import com.app.entities.Transaction;
import com.app.entities.User;

@RestController

@CrossOrigin

@RequestMapping("/transaction")
public class TransactionController {
	@Autowired
	IUserDao userdao;
	@Autowired
	TransactionDao tdao;
	@Autowired
	AccountDao adao;
	LocalDate dd=LocalDate.now();
	DateTimeFormatter df=DateTimeFormatter.ofPattern("yyyy/MM/dd");
	
	@PostMapping("/addFund")
	 public String addFund(@RequestBody MonyTransfer transferdetails ) {
		
		
		//********************************************gatting details from usres
		int senderaccountNo=transferdetails.getSenderAccountNo();
		int reciverAccountNo=transferdetails.getReciverAccountNo();
		String desc=transferdetails.getDesc();
		double sentAmount=transferdetails.getSentAmount();
		
		
		
	
		
		
		
		//************************************update transcation related to reciver**********************************
		
	
	
		Transaction t=new Transaction();
		t.setCredit(sentAmount);
		t.setDateOfTransaction(parse(LocalDate.now().toString()));
		t.setTransactionDescription(transferdetails.getDesc());
		Account a=adao.findByAccountNumber(reciverAccountNo).orElse(null);
		User u=a.getAccountOwner();
		t.setAccountOwner(u);
		String temp=String.valueOf(Math.floor(Math.random()*170000));
		t.setRefNumber(temp);
		tdao.save(t);
		
		
		//************************************************************************update transcation related to sender**********
		Transaction t1=new Transaction();
		t1.setDebit(sentAmount);
		t1.setDateOfTransaction(parse(LocalDate.now().toString()));
		t1.setTransactionDescription(transferdetails.getDesc());
		Account a2=adao.findByAccountNumber(senderaccountNo).orElse(null);
		User u1=a2.getAccountOwner();
		t1.setAccountOwner(u1);
		t1.setRefNumber(temp);
		tdao.save(t1);
		//****************************************************************************************update account status of reciver
		Account aa=adao.findByAccountNumber(reciverAccountNo).orElse(null);
		aa.setBalance(aa.getBalance()+sentAmount);
		adao.save(aa);
		//*********************************************************************************update account satus of recover
		
		
		Account aaa=adao.findByAccountNumber(senderaccountNo).orElse(null);
		aaa.setBalance(aaa.getBalance()-sentAmount);
		adao.save(aaa);
		
	
		
		return null;
		
	}

	@GetMapping("/gettotalfund")
	public Long getTotalBalance()
	
	{
		return  adao.getTotalFund();
	}
	
	@GetMapping("/user/history/{userId}")
	public List<Transaction> getUserTransactionHistory(@PathVariable Long userId) {
	    return tdao.findTop10ByAccountOwner_IdOrderByDateOfTransactionDesc(userId);
	}
	@GetMapping("/admin/history")
	public List<Transaction> getAdminTransactionHistory() {
	    return tdao.findTop10ByOrderByDateOfTransactionDesc();
	}

}
