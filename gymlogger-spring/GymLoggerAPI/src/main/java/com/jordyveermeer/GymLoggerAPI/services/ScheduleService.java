package com.jordyveermeer.GymLoggerAPI.services;

import com.jordyveermeer.GymLoggerAPI.models.Schedule;
import com.jordyveermeer.GymLoggerAPI.models.User;
import com.jordyveermeer.GymLoggerAPI.repositories.ScheduleRepository;

import org.springframework.stereotype.Service;

@Service
public class ScheduleService {

    private final ScheduleRepository scheduleRepo;
    private final UserService userService;


    public ScheduleService(ScheduleRepository scheduleRepo, UserService userService) {
        this.scheduleRepo = scheduleRepo;
        this.userService = userService;
    };

    public Schedule getSchedule(String userId) {
        User user = userService.findUser(userId);
        Schedule s = scheduleRepo.findScheduleByUser(user);
        return s;
    };
}
