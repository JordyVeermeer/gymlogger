import { useEffect, useState } from "react";
import * as exerciseAPI from "../../api/exercises";
import './searchpage.css';
import { COLORS } from "../../values/colors";

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
            exerciseList ? exerciseList.map(i => {
                return <p>{i.name}</p>;
            })
            : <p>No exercises found.</p>
        }
    </div>
    );
}