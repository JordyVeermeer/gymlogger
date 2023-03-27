import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as exerciseAPI from "../../api/exercises";

export default function Exercise() {
    const { id } = useParams();
    const [exercise, setExercise] = useState();

    useEffect(() => {
        const fetchExercise = () => {
            //const res = exerciseAPI.getByName(exercise.name);
            //setExercise(res);
            //console.log(res);
        }

        fetchExercise();
    }, [id]);
    
    return (
        <div>
            {
                exercise ? 
                <div>
                    <p>ID: {exercise.id}</p>
                    <p>Name: {exercise.name}</p>
                    <p>Primary muscle: {exercise.muscle}</p>
                </div>
                : <p>Loading...</p>
            }
        </div>        
    );
}