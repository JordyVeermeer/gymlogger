package com.jordyveermeer.GymLoggerAPI.services;

import com.jordyveermeer.GymLoggerAPI.models.Exercise;
import com.jordyveermeer.GymLoggerAPI.models.User;
import com.jordyveermeer.GymLoggerAPI.models.Workout;
import com.jordyveermeer.GymLoggerAPI.repositories.WorkoutRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WorkoutService {
    private final WorkoutRepository workoutRepo;
    private final UserService userService;
    private final ExerciseService exerciseService;

    public WorkoutService(WorkoutRepository workoutRepo, UserService userService, ExerciseService exerciseService) {
        this.workoutRepo = workoutRepo;
        this.userService = userService;
        this.exerciseService = exerciseService;
    }

    public List<Workout> getAllWorkoutsOfUser(String user_id) {
        User u = userService.findUser(user_id);
        return workoutRepo.findWorkoutsByUser(u);
    }

    public void deleteWorkout(String workoutName, String user_id) {
        Workout w = workoutRepo.findByName(workoutName, user_id);
        workoutRepo.delete(w);
    }

    public void createNewWorkout(String userId, Workout workout) {
        // NOTE: this is a temporary workaround
        // dont read further thanks
        // TO-DO: FIX
        User u = userService.findUser(userId);
        workout.setUser(u);
        List<Exercise> list = workout.getExercises();
        List<String> namesList = list.stream().map(Exercise::getName).toList();
        List<Exercise> exList = exerciseService.getExercisesByName(namesList);
        workout.setExercises(exList);

        workoutRepo.saveAndFlush(workout);
    }
}
