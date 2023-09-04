import { useContext } from "react"
import { WorkoutContext } from "../../contexts/WorkoutContext"

export default function WorkoutList() {

    const { workouts } = useContext(WorkoutContext);

    return <>
        <h1>Dit is de workoutlijst!</h1>
        {
           workouts.map(w => (
            <div>
                <h2>{w.name}</h2>
                { w.exercises.map(e => (
                    <p> - {e.name}</p>
                ))}
            </div>
           ))
        }
    </>
};