import './new_workout.css';
import { ExerciseContext } from '../../contexts/ExerciseContext';
import { WorkoutContext } from '../../contexts/WorkoutContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeleteButton } from '../buttons/DeleteButton';
import { Button } from '@mui/material';

export const WorkoutForm = () => {
    const [ selectedExerciseId, setSelectedExerciseId ] = useState(0); // Holds selected exercise as an index for exercises array
    const [ addedExercises, setAddedExercises ] = useState([]);

    const navigate = useNavigate();

    const { exercises } = useContext(ExerciseContext);
    const { createWorkout } = useContext(WorkoutContext);

    // Add selected exercise to list
    const addExercise = () => {
        const ex = exercises[selectedExerciseId];
        // check if exercise already in list
        const checkIfExists = (e => e.name === ex.name)
        if (!addedExercises.some(checkIfExists)) {
            console.log(`Adding ${ex.name} to the list!`);
            setAddedExercises([...addedExercises, ex]);
        } else {
            console.log(`${ex.name} zit al in de lijst`);
        }
    };

    // Remove selected exercise from list
    const removeExercise = (exName) => {
        const newExercises = addedExercises.filter(e => e.name !== exName);

        setAddedExercises(newExercises);

        console.log("Removed exercise");
    };

    // handle workout form
    const handleWorkout = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const workout = {
            name: formData.get("workoutName"),
            exercises: addedExercises
        };
        console.log(JSON.stringify(workout));
        createWorkout(workout);
        navigate("/workouts");
    };

    return <div className="workout-form">
        Dit is de workoutform!
        <form onSubmit={handleWorkout}>
            <label>
                Name:
                <input type='text' name='workoutName'/>
            </label>
            <div>
                <label>
                    Choose exercise:
                    <select value={selectedExerciseId} onChange={e => setSelectedExerciseId(e.target.value)} >
                        {
                            exercises && exercises.length > 1 &&
                            exercises.map((e, index) => (
                                <option value={index}>{e.name}</option>
                            ))
                        }
                    </select>
                </label>

                <button type="button" onClick={addExercise} >Add exercise</button>
            </div>
            {
                addedExercises.length >= 1 ?
                    addedExercises.map(e => (
                        <div>
                            <span>{e.name}</span>
                            {/* <button type="button" onClick={() => removeExercise(e.name)}>-</button> */}
                            <DeleteButton onclick={() => removeExercise(e.name)} />
                        </div>
                    ))
                    : <p>Je hebt nog geen exercises toegevoegd.</p>
            }
            <div>
                {/* <button type="submit">Add workout</button> */}
                <Button type='submit' variant='contained' size='small'>Add Workout</Button>
            </div>
        </form>
    </div>
}