package com.jordyveermeer.GymLoggerAPI.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    private String user_id;
    private String username;

    @OneToMany(mappedBy = "user")
    @Cascade(CascadeType.ALL)
    private List<Workout> workouts;

    protected User() {};

    public User(String id) {
        this.user_id = id;
    }

    public User(String id, String username) {
        this.user_id = id;
        this.username = username;
    }

    public String getUsername() { return this.username; };
    public void setUsername(String username) { this.username = username; };
    public String getUser_id() { return this.user_id; }
}
