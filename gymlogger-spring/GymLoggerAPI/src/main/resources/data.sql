-- Database Seeding

-- First delete existing data 

DELETE FROM exercise;

-- Insert data into now empty tables

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
VALUES('1602', 'Pick up barbell', 'Legs, Back', 'Deadlift');