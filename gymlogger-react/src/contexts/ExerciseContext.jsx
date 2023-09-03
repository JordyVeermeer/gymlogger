import { createContext, useCallback, useEffect, useMemo, useState } from "react"
//import useExercises, * as exerciseAPI from "../api/exercises";
import useExercises from "../api/exercises";
import { useAuth0 } from "@auth0/auth0-react";

export const ExerciseContext = createContext([]);

export const ExerciseProvider = ({ children }) => {

    const [exercises, setExercises] = useState();
    const { isAuthenticated } = useAuth0();
    const { getAll } = useExercises();

    const getByName = useCallback((name) => {
        return exercises.find(e => e.name === name);
    }, [exercises]);

    useEffect(() => {
        const fetchExercises = async () => {

            //const data = await exerciseAPI.getAll();
            if (isAuthenticated) {
                const data = await getAll();
                setExercises(data);
            }
        }

        fetchExercises();
        console.log("Exercises have been fetched in ExerciseContext!");
        //console.log(`exercises: ${exercises}`);

    }, [getAll, isAuthenticated]);

    const value = useMemo(() => ({ exercises, getByName }), [exercises, getByName]);

    return (
        <ExerciseContext.Provider value={value}>
            {children}
        </ExerciseContext.Provider>
    );

}