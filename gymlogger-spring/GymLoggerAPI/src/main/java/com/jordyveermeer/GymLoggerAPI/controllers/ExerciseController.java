package com.jordyveermeer.GymLoggerAPI.controllers;

import com.jordyveermeer.GymLoggerAPI.models.Exercise;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExerciseController {

    @GetMapping("/exercise")
    public Exercise exercise(@RequestParam(value = "name", defaultValue = "TestExercise") String name) {
        return new Exercise(name, "biceps", "This is an example");
    };
}
