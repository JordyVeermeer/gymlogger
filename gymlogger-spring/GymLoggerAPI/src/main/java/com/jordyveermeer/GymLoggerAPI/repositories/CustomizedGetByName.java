package com.jordyveermeer.GymLoggerAPI.repositories;

import com.jordyveermeer.GymLoggerAPI.models.Exercise;

public interface CustomizedGetByName {
    Exercise getByName(String name);
}
