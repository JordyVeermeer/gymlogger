package com.jordyveermeer.GymLoggerAPI.controllers;

import com.jordyveermeer.GymLoggerAPI.models.Exercise;
import com.jordyveermeer.GymLoggerAPI.repositories.ExerciseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("exercises")
public class ExerciseController {
    private final ExerciseRepository exerciseRepo;

    public ExerciseController(ExerciseRepository exerciseRepo) {
        this.exerciseRepo = exerciseRepo;
    };

    @GetMapping()
    public List<Exercise> exercises() {
        return exerciseRepo.findAll();
    };

    @GetMapping("/{name}")
    public Exercise exerciseByName(@PathVariable String name) { return exerciseRepo.findByName(name); };

    @GetMapping("/muscle/{muscle}")
    public List<Exercise> exercisesByMuscle(@PathVariable String muscle) { return exerciseRepo.findByMuscle(muscle); };
}