package com.jordyveermeer.GymLoggerAPI.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String muscle;
    private String description;

    protected Exercise() {}

    public Exercise(Long id, String name, String muscle, String description) {
        this.id = id;
        this.name = name;
        this.muscle = muscle;
        this.description = description;
    }

    /* public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    } */

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMuscle() {
        return muscle;
    }

    public void setMuscle(String muscle) {
        this.muscle = muscle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
