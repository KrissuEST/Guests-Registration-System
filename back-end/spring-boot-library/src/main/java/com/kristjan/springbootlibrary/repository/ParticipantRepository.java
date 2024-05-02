package com.kristjan.springbootlibrary.repository;

import com.kristjan.springbootlibrary.entity.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipantRepository extends JpaRepository<Participant, Long> {

}
