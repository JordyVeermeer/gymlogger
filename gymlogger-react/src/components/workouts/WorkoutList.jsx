import { useContext } from "react"
import { Link } from "react-router-dom";
import { WorkoutContext } from "../../contexts/WorkoutContext"
import { WorkoutListItem } from "./WorkoutListItem";
import { CustomButton } from "../buttons/CustomButton";
import './workoutlist.css';

export default function WorkoutList() {

    const { workouts } = useContext(WorkoutContext);

    return <>
        <div className="workout-list">
            <h1>Workout list</h1>
            {/* <Link to={"/workouts/new"}><button>New workout</button></Link> */}
            <CustomButton label={"New workout"} />
            {
                workouts && 
                workouts.map(w => (
                    <WorkoutListItem workout={w} />
                ))
            }
        </div>
    </>
};