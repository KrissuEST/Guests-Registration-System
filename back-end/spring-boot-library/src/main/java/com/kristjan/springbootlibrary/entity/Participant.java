package com.kristjan.springbootlibrary.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;

//@NoArgsConstructor
//@AllArgsConstructor
@Entity
@Data
@Table(name = "participant")
public class Participant {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "participant_id")
	private Long id;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;

	@Column(name = "personal_id_nr")
	private Long personalIdNr;
	
	@Column(name = "payment_method")
	private String paymentMethod;

	@Column(name = "additional_info")
	private String additionalInfo;

}
