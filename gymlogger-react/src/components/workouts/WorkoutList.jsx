import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import { WorkoutContext } from "../../contexts/WorkoutContext"
import { WorkoutListItem } from "./WorkoutListItem";
import { CustomButton } from "../buttons/CustomButton";
import './workoutlist.css';

export default function WorkoutList() {

    const { workouts } = useContext(WorkoutContext);
    const navigate = useNavigate();

    const newWorkout = () => {
        navigate('/workouts/new');
    }

    return <>
        <div className="workout-list">
            <h1>Workout list</h1>
            {/* <Link to={"/workouts/new"}><button>New workout</button></Link> */}
            <CustomButton label={"new workout"} onclick={newWorkout} />
            {
                workouts && 
                workouts.map(w => (
                    <WorkoutListItem workout={w} />
                ))
            }
        </div>
    </>
};