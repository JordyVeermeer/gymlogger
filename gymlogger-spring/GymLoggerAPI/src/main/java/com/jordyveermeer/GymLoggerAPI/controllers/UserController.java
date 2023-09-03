package com.jordyveermeer.GymLoggerAPI.controllers;

import com.jordyveermeer.GymLoggerAPI.models.User;
import com.jordyveermeer.GymLoggerAPI.repositories.UserRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("users")
public class UserController {
    private final UserRepository userRepo;

    public UserController(UserRepository userRepo) { this.userRepo = userRepo; }

    @PostMapping()
    public void registerUser(@RequestBody User user) {
        userRepo.saveAndFlush(user);
    }
}
