package com.jordyveermeer.GymLoggerAPI.repositories;

import com.jordyveermeer.GymLoggerAPI.models.Exercise;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

public class CustomizedGetByNameImpl<T> implements CustomizedGetByName {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Exercise getByName(String name) {
        return entityManager.createQuery("SELECT e FROM Exercise e WHERE e.name === :name")
                .setParameter("name", name)
                .unwrap(Exercise.class);
    }
}
