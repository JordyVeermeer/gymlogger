package com.jordyveermeer.GymLoggerAPI.repositories;

import com.jordyveermeer.GymLoggerAPI.models.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {

}
