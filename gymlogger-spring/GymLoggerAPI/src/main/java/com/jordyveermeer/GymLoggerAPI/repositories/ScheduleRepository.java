package com.jordyveermeer.GymLoggerAPI.repositories;

import com.jordyveermeer.GymLoggerAPI.models.Schedule;
import com.jordyveermeer.GymLoggerAPI.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    /*@Query("SELECT s FROM Schedule s WHERE s.user = ?1")*/
    Schedule findScheduleByUser(User user);
}
