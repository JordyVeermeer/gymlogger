import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import * as exerciseAPI from "../api/exercises";

export const ExerciseContext = createContext([]);

export const ExerciseProvider = ({ children }) => {

    const [exercises, setExercises] = useState();

    const getByName = useCallback((name) => {
        return exercises.find(e => e.name === name);
    }, [exercises]);

    useEffect(() => {
        const fetchExercises = async () => {
            const data = await exerciseAPI.getAll();
            setExercises(data);
        }

        fetchExercises();
        console.log("Exercises have been fetched in ExerciseContext!");

    }, []);

    const value = useMemo(() => ({ exercises, getByName }), [exercises, getByName]);

    return (
        <ExerciseContext.Provider value={value}>
            {children}
        </ExerciseContext.Provider>
    );

}