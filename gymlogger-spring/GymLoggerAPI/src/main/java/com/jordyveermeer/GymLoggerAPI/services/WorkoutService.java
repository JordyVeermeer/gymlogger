package com.jordyveermeer.GymLoggerAPI.services;

import com.jordyveermeer.GymLoggerAPI.models.User;
import com.jordyveermeer.GymLoggerAPI.models.Workout;
import com.jordyveermeer.GymLoggerAPI.repositories.WorkoutRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutService {
    private final WorkoutRepository workoutRepo;
    private final UserService userService;

    public WorkoutService(WorkoutRepository workoutRepo, UserService userService) {
        this.workoutRepo = workoutRepo;
        this.userService = userService;
    }

    public List<Workout> getAllWorkoutsOfUser(String user_id) {
        //return workoutRepo.findById(Long.valueOf(1600)).get();
        return workoutRepo.findWorkoutsByUser(new User(user_id));
    }

    public void createNewWorkout(String workout_name, User user) {
        workoutRepo.saveAndFlush(new Workout(workout_name, user));
    }
}
