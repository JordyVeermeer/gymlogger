package com.jordyveermeer.GymLoggerAPI.models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long workoutId;
    private String name;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    @ManyToMany
    @JoinTable(
            name = "workout_exercise",
            joinColumns = @JoinColumn(name = "workout_id"),
            inverseJoinColumns = @JoinColumn(name = "exercise_id")
    )
    private List<Exercise> exercises;

    @OneToMany(mappedBy = "workout")
    private List<WorkoutSchedule> schedules;

    protected Workout() {}

    public Workout(Long id, String name, List<Exercise> exercises, User user) {
        this.workoutId = id;
        this.name = name;
        this.exercises = exercises;
        this.user = user;
    }

    public Workout(String name, User user) {
        this.name = name;
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

    public void addExercise(Exercise ex) { this.exercises.add(ex); }
    public User getUser() { return this.user; };

    public void setUser(User u) { this.user = u; };
}
