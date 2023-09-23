-- Database Seeding

-- First delete existing data 

DELETE FROM workout_exercise;
DELETE FROM workout_schedule;
DELETE FROM workout;
DELETE FROM exercise;
DELETE FROM schedule;
DELETE FROM users;




-- Insert data into now empty tables

-- USERS

INSERT INTO users (user_id)
VALUES ('101023222758474542773');

-- EXERCISES

INSERT INTO exercise (id, description, muscle, name) 
VALUES('1598', 'Press barbell straight up', 'Chest', 'Barbell Bench Press');

INSERT INTO exercise (id, description, muscle, name) 
VALUES('1599', 'Press dumbbell straight up', 'Chest', 'Dumbbell Bench Press');

INSERT INTO exercise (id, description, muscle, name) 
VALUES('1600', 'Curl dumbbell towards shoulder', 'Bicep', 'Dumbbell Bicep Curl');

INSERT INTO exercise (id, description, muscle, name) 
VALUES('1601', 'Curl barbell towards shoulders', 'Bicep', 'Barbell Bicep Curl');

INSERT INTO exercise (id, description, muscle, name) 
VALUES('1602', 'Lift dumbbell to shoulder height in a lateral motion', 'Shoulders', 'Shoulder Lateral Raises');

INSERT INTO exercise (id, description, muscle, name)
VALUES('1603', 'Squat down while keeping barbell upright', 'Legs', 'Barbell Squat');

INSERT INTO exercise (id, description, muscle, name)
VALUES('1604', 'Pick up barbell', 'Legs, Back', 'Deadlift');

INSERT INTO exercise (id, description, muscle, name)
VALUES('1605', 'Hammer curl dumbbell', 'Bicep', 'Dumbbell Hammer Curl');

INSERT INTO exercise (id, description, muscle, name)
VALUES('1606', 'Press dumbbells upwards', 'Shoulders', 'Shoulder Dumbbell Press');

INSERT INTO exercise (id, description, muscle, name)
VALUES('1607', 'Pull arms towards each-other with straight arms', 'Chest', 'Cable Fly');

-- WORKOUTS

INSERT INTO workout (workout_id, name, user_id)
VALUES('1600', 'Chest & Back', '101023222758474542773');

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES('1600', '1598');

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES('1600', '1599');

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES('1600', '1604');

INSERT INTO workout (workout_id, name, user_id)
VALUES('1601', 'Arms', '101023222758474542773');

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES('1601', '1600');

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES('1601', '1601');

INSERT INTO workout_exercise (workout_id, exercise_id)
VALUES('1601', '1605');

-- SCHEDULES

INSERT INTO schedule (schedule_id, user_id)
VALUES('1600', '101023222758474542773');

INSERT INTO workout_schedule (workout_schedule_id, weekday, schedule_id, workout_id)
VALUES('991', 'MONDAY', '1600', '1600')
