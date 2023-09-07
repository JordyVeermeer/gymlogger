
export default function WorkoutListItem({workout}) {

    return (
        <div className="workoutListItem">
            <h2>{workout.name}</h2>
            {
                workout.exercises && 
                workout.exercises.map(e => (
                    <p> - {e.name}</p>
                ))
            }
        </div>
    )
};