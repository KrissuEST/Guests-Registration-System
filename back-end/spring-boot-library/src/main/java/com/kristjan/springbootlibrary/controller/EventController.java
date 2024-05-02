package com.kristjan.springbootlibrary.controller;

import com.kristjan.springbootlibrary.entity.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kristjan.springbootlibrary.repository.EventRepository;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EventController {

    @Autowired   //It's constructor
    private EventRepository eventRepository;

    //GetMapping - get all the records from DB
    @GetMapping("/events")
    public List<Event> getEvents() {
        return eventRepository.findAll();
    }

}
