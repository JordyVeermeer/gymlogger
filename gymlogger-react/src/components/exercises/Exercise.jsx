import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ExerciseContext } from "../../contexts/ExerciseContext";
import img from '../../assets/Barbell_bench_press.png';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { CssBaseline } from "@mui/material";


export default function Exercise() {
    const { name } = useParams();
    const { getByName } = useContext(ExerciseContext);
    const [exercise, setExercise] = useState();

    useEffect(() => {
        let ex = getByName(decodeURI(name));
        setExercise(ex);
    }, [getByName, name]);
    
    return (
        <div className="exercise-detail">

            {
                exercise ?
                    <div className="exercise-card">
                        <h1>{exercise.name}</h1>
                        <div className="img-record">
                            <img src={img} alt="benchpress" />
                            <div className="record">
                                <h5><i>personal record</i></h5>
                                <div><AssignmentTurnedInIcon sx={{ fontSize:'1.5rem' }} /> 80kg x10</div>
                            </div>
                        </div>
                        <div className="exercise-info">
                            <p><b>Primary muscle: </b>{exercise.muscle}</p>
                            <p><b>Sets/reps: </b>3x10</p>
                            <p><b>Description: </b><i>{exercise.description}</i></p>
                            <p><b>Video: </b>www.youtube.com/filmpje</p>
                        </div>
                    </div>
                    : <p>Loading...</p>
            }
        </div>        
    );
}