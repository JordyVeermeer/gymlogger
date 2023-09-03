package com.jordyveermeer.GymLoggerAPI.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
    @Id
    private Long user_id;
    private String username;

    protected User() {};

    public User(Long id, String username) {
        this.user_id = id;
        this.username = username;
    }

    public String getUsername() { return this.username; };
    public void setUsername(String username) { this.username = username; };
}
