import { useEffect, useState } from "react";
import ExerciseList from "../exercises/ExerciseList";
import './searchpage.css';

export default function SearchPage() {

    useEffect(() => {
        console.log("Search page gerendered!");
    }, []);

    return (
    <div className="searchpage">
        <div className="searchfilters">
            
        </div>
        <div className="result">
            <h1>Search page!</h1>
            { 
                <ExerciseList />
            }
        </div>
    </div>
    );
}