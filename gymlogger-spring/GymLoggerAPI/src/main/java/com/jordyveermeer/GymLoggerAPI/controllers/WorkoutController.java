package com.jordyveermeer.GymLoggerAPI.controllers;

import com.jordyveermeer.GymLoggerAPI.models.Workout;
import com.jordyveermeer.GymLoggerAPI.repositories.WorkoutRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("workouts")
public class WorkoutController {
    private final WorkoutRepository workoutRepo;

    public WorkoutController(WorkoutRepository workoutRepo) { this.workoutRepo = workoutRepo; }

    @GetMapping()
    public List<Workout> workouts() { return workoutRepo.findAll(); }
}
