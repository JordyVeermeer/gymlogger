package com.jordyveermeer.GymLoggerAPI.models;

import jakarta.persistence.*;

@Entity(name = "workout_schedule")
public class WorkoutSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long workoutScheduleId;

    @ManyToOne
    @JoinColumn(name = "workout_id")
    private Workout workout;

    @ManyToOne
    @JoinColumn(name = "schedule_id")
    private Schedule schedule;

    private String weekday;

    protected WorkoutSchedule() {}




}
