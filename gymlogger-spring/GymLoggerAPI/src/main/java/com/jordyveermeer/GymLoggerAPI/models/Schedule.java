package com.jordyveermeer.GymLoggerAPI.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long scheduleId;

    @ManyToOne()
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "schedule")
    @JsonManagedReference
    private List<WorkoutSchedule> workouts;

    //private boolean isActive;

    protected Schedule() {};

    public Schedule(Long id, User user, List<WorkoutSchedule> workouts) {
        this.scheduleId = id;
        this.user = user;
        this.workouts = workouts;
    };

    public void addWorkout(Workout workout, String weekday) {
        //WorkoutSchedule ws = new WorkoutSchedule(this, workout, weekday);
        //workouts.add(ws);
    }

    public void removeWorkoutOnDay(String weekday) {
        // TO-DO
    }

    // Getters & Setters
    public User getUser() {
        return user;
    }

    private void setUser(User user) {
        this.user = user;
    }

    public List<WorkoutSchedule> getWorkouts() {
        return workouts;
    }

    private void setWorkouts(List<WorkoutSchedule> workouts) {
        this.workouts = workouts;
    }
}
