import { useContext } from "react"
import { Link } from "react-router-dom";
import { WorkoutContext } from "../../contexts/WorkoutContext"
import WorkoutListItem from "./WorkoutListItem";
import './workoutlist.css';

export default function WorkoutList() {

    const { workouts } = useContext(WorkoutContext);

    return <>
        <div className="workoutList">
            <h1>Dit is de workoutlijst!</h1>
            <Link to={"/workouts/new"}><button>New workout</button></Link>
            {
                workouts && 
                workouts.map(w => (
                    <WorkoutListItem workout={w} />
                ))
            }
        </div>
    </>
};