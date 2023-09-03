package com.jordyveermeer.GymLoggerAPI.repositories;

import com.jordyveermeer.GymLoggerAPI.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

}
