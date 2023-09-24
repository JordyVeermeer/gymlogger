package com.jordyveermeer.GymLoggerAPI.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity(name = "workout_schedule")
public class WorkoutSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonIgnore
    private Long workoutScheduleId;

    @ManyToOne
    @JoinColumn(name = "workout_id")
    private Workout workout;

    @ManyToOne
    @JoinColumn(name = "schedule_id")
    @JsonBackReference
    private Schedule schedule;

    private String weekday;

    protected WorkoutSchedule() {}

    public WorkoutSchedule(Schedule s, Workout w, String weekday) {
        this.schedule = s;
        this.workout = w;
        this.weekday = weekday;
    }

    // Getters & Setters

    public Long getWorkoutScheduleId() {
        return workoutScheduleId;
    }

    private void setWorkoutScheduleId(Long workoutScheduleId) {
        this.workoutScheduleId = workoutScheduleId;
    }

    public Workout getWorkout() {
        return workout;
    }

    private void setWorkout(Workout workout) {
        this.workout = workout;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    private void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }

    public String getWeekday() {
        return weekday;
    }

    public void setWeekday(String weekday) {
        this.weekday = weekday;
    }
}
