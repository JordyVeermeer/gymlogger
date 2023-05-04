import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as exerciseAPI from "../../api/exercises";
import { ExerciseContext } from "../../contexts/ExerciseContext";

export default function Exercise() {
    const { name } = useParams();
    const { getByName } = useContext(ExerciseContext);
    const [exercise, setExercise] = useState();

    useEffect(() => {
        let ex = getByName(decodeURI(name));
        setExercise(ex);
    }, [getByName, name]);
    
    return (
        <div>
            {
                exercise ? 
                <div>
                    <p>Name: {exercise.name}</p>
                    <p>Primary muscle: {exercise.muscle}</p>
                </div>
                : <p>Loading...</p>
            }
        </div>        
    );
}