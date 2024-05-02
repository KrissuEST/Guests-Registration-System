package com.kristjan.springbootlibrary.repository;

import com.kristjan.springbootlibrary.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Database connection, mapping Person class to database table.
//The art of Jpa, Hiberante, converting Java class to Database table and vice versa.
//@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    // Page<Participant> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);

    // Page<Participant> findByCategory(@RequestParam("category") String category, Pageable pageable);
}
