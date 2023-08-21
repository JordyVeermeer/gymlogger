package com.jordyveermeer.GymLoggerAPI.repositories;

import com.jordyveermeer.GymLoggerAPI.models.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    // nog findByName method toevoegen
    // https://docs.spring.io/spring-data/jpa/docs/current/reference/html/
    List<Exercise> findByMuscle(String muscle);

    @Query("SELECT e FROM Exercise e WHERE e.name = ?1")
    Exercise findByName(String name);
}
