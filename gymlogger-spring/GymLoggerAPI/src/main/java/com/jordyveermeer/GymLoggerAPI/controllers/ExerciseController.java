package com.jordyveermeer.GymLoggerAPI.controllers;

import com.jordyveermeer.GymLoggerAPI.models.Exercise;
import com.jordyveermeer.GymLoggerAPI.repositories.ExerciseRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ExerciseController {
    private final ExerciseRepository exerciseRepo;

    public ExerciseController(ExerciseRepository exerciseRepo) {
        this.exerciseRepo = exerciseRepo;
    };

    @GetMapping("/exercises")
    public List<Exercise> exercises() {
        return exerciseRepo.findAll();
    };

    /* findByName methode moet nog aangemaakt worden
    @GetMapping("/exercise")
    public Exercise exerciseById(@RequestParam String name) { return exerciseRepo.findByName(name); };
    */
}