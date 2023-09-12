import { useContext, useState } from "react"
import { redirect } from "react-router-dom"; 
import { ExerciseContext } from '../../contexts/ExerciseContext';
import { WorkoutContext } from "../../contexts/WorkoutContext";
import { WorkoutForm } from "./WorkoutForm";
import './new_workout.css'

export default function NewWorkout() {

    //const [ name, setName ] = useState("");


    /* TODO: HTML NOG OPSPLITSEN IN KLEINERE COMPONENTEN */

    return (
        <div className="newWorkout">
            <h2>create a new workout</h2>
            <WorkoutForm />

            {/* <form onSubmit={handleWorkout}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="workoutName" />
                    </label>
                </div>
                
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
                
                    <button type="button" onClick={e => addExercise()} >Add exercise</button>
                </div>
                
                {
                   addedExercises.length >= 1 ?
                   addedExercises.map(e => (
                    <div>
                        <span>{e.name}</span>
                        <button type="button" onClick={() => removeExercise(e.name)}>-</button>
                    </div>
                   ))
                    : <p>Je hebt nog geen exercises toegevoegd.</p>
                }
                
                <div>
                    <button type="submit">Add workout</button>
                </div>
            </form> */}

        </div>
    )
}