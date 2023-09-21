package com.jordyveermeer.GymLoggerAPI.controllers;

import com.jordyveermeer.GymLoggerAPI.models.Schedule;
import com.jordyveermeer.GymLoggerAPI.models.User;
import com.jordyveermeer.GymLoggerAPI.services.ScheduleService;
import com.jordyveermeer.GymLoggerAPI.services.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("schedules")
public class ScheduleController {

    private final ScheduleService scheduleService;
    private final UserService userService;

    public ScheduleController(ScheduleService scheduleService, UserService userService) {
        this.scheduleService = scheduleService;
        this.userService = userService;
    };

    @GetMapping
    public Schedule schedule(@RequestHeader(HttpHeaders.AUTHORIZATION) String authHeader) {
        String user_id = userService.jwtIdExtractor(authHeader);
        //Schedule s = scheduleService.getSchedule(user_id);

        return null;
    };

}
