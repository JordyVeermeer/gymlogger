import { useEffect, useState } from "react";
import * as exerciseAPI from "../../api/exercises";
import ExerciseList from "../exercises/ExerciseList";
import './searchpage.css';

export default function SearchPage() {

    const [exerciseList, setExerciseList] = useState();

    useEffect(() => {
        console.log("Search page gerendered!");

        const fetchExercises = async () => {
            const data = await exerciseAPI.getAll();
            setExerciseList(data);
        }

        fetchExercises();

    }, []);

    return (
    <div className="searchpage">
        <h1>Search page!</h1>
        { 
            exerciseList ? 
            <ExerciseList exerciseList={exerciseList} />
            : <p>No exercises found.</p>
        }
    </div>
    );
}