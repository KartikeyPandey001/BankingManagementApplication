package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "transactions")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Transaction extends BaseEntity {
	
	//Add 3 data members : regDate , regAmount , desc (about user) for more practice on Spring data JPA
	//@Column(name="reg_Date") : will be auto added by Spring Data

	private LocalDate dateOfTransaction=LocalDate.now();
	
	private double debit;
	private double credit;
	@Column(length = 300)
	private String transactionDescription;
	private String refNumber;
	@ManyToOne
	@JsonIgnore // to tell Jackson(=vendor for marshalling n un marshalling) , to ignore this
				// property during ser n de-ser
	@JoinColumn(name = "user_id")
	private User accountOwner;
	
}
