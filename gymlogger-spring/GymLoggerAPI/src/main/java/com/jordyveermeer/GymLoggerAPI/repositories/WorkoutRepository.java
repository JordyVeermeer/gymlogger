package com.jordyveermeer.GymLoggerAPI.repositories;

import com.jordyveermeer.GymLoggerAPI.models.User;
import com.jordyveermeer.GymLoggerAPI.models.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Long> {
    @Query("SELECT w FROM Workout w WHERE w.user = ?1")
    List<Workout> findWorkoutsByUser(User user_id);

    @Query(value = "SELECT * FROM Workout WHERE name = ?1 AND user_id = ?2", nativeQuery = true)
    Workout findByName(String name, String user_id);

}
