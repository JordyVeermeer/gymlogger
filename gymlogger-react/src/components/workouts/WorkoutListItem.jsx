import { useContext } from "react"
import { WorkoutContext } from "../../contexts/WorkoutContext"

export default function WorkoutListItem({workout}) {
    const { removeWorkout } = useContext(WorkoutContext);

    return (
        <div className="workoutListItem">
            <h2>{workout.name}</h2>
            {
                workout.exercises && 
                workout.exercises.map(e => (
                        <p> - {e.name}</p>
                ))
            }
            <button type="button" onClick={() => removeWorkout(workout.name)}>delete</button>
        </div>
    )
};