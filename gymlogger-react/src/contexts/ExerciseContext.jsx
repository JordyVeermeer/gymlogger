import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import useExercises from "../api/exercises";
import { useAuth0 } from "@auth0/auth0-react";

export const ExerciseContext = createContext([]);

export const ExerciseProvider = ({ children }) => {

    const [exercises, setExercises] = useState([]);
    const { isAuthenticated } = useAuth0();
    const { getAll } = useExercises();

    const getByName = useCallback((name) => {
        return exercises.find(e => e.name === name);
    }, [exercises]);

    const filterBy = useCallback((filter) => {
        return exercises.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()));
    }, [exercises])

    const fetchExercises = useCallback(async () => {

        //const data = await exerciseAPI.getAll();
        if (isAuthenticated) {
            const data = await getAll();
            setExercises(data);
        }
    }, [getAll, isAuthenticated])

    useEffect(() => {
        fetchExercises();
        console.log("Exercises have been fetched in ExerciseContext!");
    }, [fetchExercises]);

    const value = useMemo(() => ({ 
        exercises, getByName, fetchExercises, filterBy 
    }), [exercises, getByName, fetchExercises, filterBy]);

    return (
        <ExerciseContext.Provider value={value}>
            {children}
        </ExerciseContext.Provider>
    );

}