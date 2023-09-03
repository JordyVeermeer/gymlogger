package com.jordyveermeer.GymLoggerAPI.services;

import com.jordyveermeer.GymLoggerAPI.models.User;
import com.jordyveermeer.GymLoggerAPI.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public void createUserIfNotExists(String id) {
        if (!userRepo.existsById(id)) {
            userRepo.saveAndFlush(new User(id));
        }
    }
}
