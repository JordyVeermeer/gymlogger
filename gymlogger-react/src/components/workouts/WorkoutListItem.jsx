import { useContext } from "react"
import { WorkoutContext } from "../../contexts/WorkoutContext"
import { CustomButton } from "../buttons/CustomButton";

export function WorkoutListItem({workout}) {
    const { removeWorkout } = useContext(WorkoutContext);

    return (
        <div className="workout-list-item">
            <h2>{workout.name}</h2>
            {
                workout.exercises && 
                workout.exercises.slice(0,3).map(e => (
                        <p> - {e.name}</p>
                ))
            }
            <div className="workout-list-item-buttons">
                <CustomButton label={"edit"}  />
                <CustomButton label={"delete"} onclick={() => removeWorkout(workout.name)} />
            </div>
        </div>
    )
};