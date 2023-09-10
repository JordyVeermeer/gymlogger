import { useContext, useState } from "react"
import { redirect } from "react-router-dom"; 
import { ExerciseContext } from '../../contexts/ExerciseContext';
import { WorkoutContext } from "../../contexts/WorkoutContext";

export default function NewWorkout() {

    //const [ name, setName ] = useState("");
    const [ selectedExerciseId, setSelectedExerciseId ] = useState(0); // Holds selected exercise as an index for exercises array
    const [ addedExercises, setAddedExercises ] = useState([]);

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
        redirect("/workouts");
    };


    /* TODO: HTML NOG OPSPLITSEN IN KLEINERE COMPONENTEN */

    return (
        <div className="newWorkout">
            <h2>create a new workout</h2>

            <form onSubmit={handleWorkout}>
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
            </form>

        </div>
    )
}