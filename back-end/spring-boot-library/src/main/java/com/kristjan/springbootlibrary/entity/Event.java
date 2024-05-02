package com.kristjan.springbootlibrary.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

//@NoArgsConstructor
//@AllArgsConstructor
@Entity
@Data  //for lombok to generate getters and setters
@Table(name = "event")  //same table name at MYSQL database
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //automatically incrementing primary key
    @Column(name = "event_id")
    private Long id;

    @Column(name = "event_name")
    private String eventName;

    @Column(name="occurrence_time")
    private Instant occurrenceTime;  //we use instance bcs we need time too

    @Column(name="location")
    private String location;

    @Column(name = "additional_info")
    private String additionalInfo;

    @ManyToOne    //Many participants can be connected to one event.
    private Participant participant;
}
