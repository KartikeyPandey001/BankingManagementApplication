package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Account;
import com.app.entities.User;

public interface AccountDao extends JpaRepository<Account, Long>{
	Optional<Account> findByAccountNumber(int accNumber);
	@Query(value="SELECT SUM(balance) FROM accounts",nativeQuery = true)
    long getTotalFund();
	@Query(value = "SELECT balance FROM accounts WHERE acc_number = ?1", nativeQuery = true)
	double getBalanceByUserId(Integer accNumber);
	List<Account> findByAccountOwner(User id);
}
