package com.jordyveermeer.GymLoggerAPI.repositories;

import com.jordyveermeer.GymLoggerAPI.models.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Long> {

}
