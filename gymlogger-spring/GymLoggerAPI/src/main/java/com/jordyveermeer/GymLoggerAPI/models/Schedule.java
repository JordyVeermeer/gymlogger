package com.jordyveermeer.GymLoggerAPI.models;

import jakarta.persistence.*;

import java.util.Map;

@Entity
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long scheduleId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToMany()
    @JoinTable(
            name = "weekday_workout",
            joinColumns = @JoinColumn(name = "schedule_id"),
            inverseJoinColumns = @JoinColumn(name = "workout_id")
    )
    @MapKeyEnumerated(EnumType.STRING)
    @MapKeyColumn(name = "weekday")
    private Map<Weekday, Workout> workouts;

    protected Schedule() {};

    public Schedule(Long id, User user, Map<Weekday, Workout> workouts) {
        this.scheduleId = id;
        this.user = user;
        this.workouts = workouts;
    };

    public void addWorkout(Workout workout, Weekday weekday) {
        if (!workouts.containsKey(weekday)) {
            workouts.put(weekday, workout);
        };
    }

    public void removeWorkoutOnDay(Weekday weekday) {
        if (workouts.containsKey(weekday)) {
            workouts.remove(weekday);
        }
    }

    // Getters & Setters
    public User getUser() {
        return user;
    }

    private void setUser(User user) {
        this.user = user;
    }

    public Map<Weekday, Workout> getWorkouts() {
        return workouts;
    }

    private void setWorkouts(Map<Weekday, Workout> workouts) {
        this.workouts = workouts;
    }
}
