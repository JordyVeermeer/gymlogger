package com.jordyveermeer.GymLoggerAPI.services;

import com.jordyveermeer.GymLoggerAPI.models.Exercise;
import com.jordyveermeer.GymLoggerAPI.repositories.ExerciseRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExerciseService {
    private final ExerciseRepository exerciseRepo;

    public ExerciseService(ExerciseRepository exerciseRepo) {
        this.exerciseRepo = exerciseRepo;
    }

    public List<Exercise> getAllExercises() {
        return exerciseRepo.findAll();
    }

    public Exercise getExercise(String name) {
        return exerciseRepo.findByName(name);
    }

    public List<Exercise> getExercisesByName(List<String> names) {
        List<Exercise> exercises = new ArrayList<>();

        for (String name : names) {
            Exercise e = exerciseRepo.findByName(name);
            exercises.add(e);
        }

        return exercises;
    }
}
