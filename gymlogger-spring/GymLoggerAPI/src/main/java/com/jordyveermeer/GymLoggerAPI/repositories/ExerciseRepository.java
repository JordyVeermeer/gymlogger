package com.jordyveermeer.GymLoggerAPI.repositories;

import com.jordyveermeer.GymLoggerAPI.models.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long>, CustomizedGetByName {
    // nog findByName method toevoegen
    // https://docs.spring.io/spring-data/jpa/docs/current/reference/html/
    List<Exercise> findByMuscle(String muscle);
}
