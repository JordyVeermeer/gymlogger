package com.jordyveermeer.GymLoggerAPI.controllers;

import com.jordyveermeer.GymLoggerAPI.models.Workout;
import com.jordyveermeer.GymLoggerAPI.services.UserService;
import com.jordyveermeer.GymLoggerAPI.services.WorkoutService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;

import java.util.List;

@RestController
@RequestMapping("workouts")
public class WorkoutController {
    private final WorkoutService workoutService;
    private final UserService userService;

    public WorkoutController(WorkoutService workoutService, UserService userService) {
        this.workoutService = workoutService;
        this.userService = userService;
    }

    @GetMapping()
    public List<Workout> getWorkoutsByUserId(@RequestHeader(HttpHeaders.AUTHORIZATION) String authHeader) {
        String user_id = userService.jwtIdExtractor(authHeader);

        return workoutService.getAllWorkoutsOfUser(user_id);
    }

    @PostMapping()
    public void createWorkout(@RequestHeader(HttpHeaders.AUTHORIZATION) String authHeader, @RequestBody Workout workout) {

    }
}
