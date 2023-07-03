package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@Builder
public class MonyTransfer {
	
	private int senderAccountNo;
	private double sentAmount;
	private int reciverAccountNo;
	private String desc;
	
	
	
	
	public double getSentAmount() {
		return sentAmount;
	}
	public void setSentAmount(double sentAmount) {
		this.sentAmount = sentAmount;
	}
	
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	
	
	
}
