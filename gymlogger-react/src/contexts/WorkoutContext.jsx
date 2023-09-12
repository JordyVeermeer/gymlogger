import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect, useMemo, useState, useCallback } from "react";
import useWorkouts from "../api/workouts";

export const WorkoutContext = createContext([]);

export const WorkoutProvider = ({ children }) => {

    const [workouts, setWorkouts] = useState();
    const { isAuthenticated } = useAuth0();
    const { getMyWorkouts, postWorkout, deleteWorkout } = useWorkouts();

    const fetchWorkouts = useCallback(async () => {
        if (isAuthenticated) {
            const data = await getMyWorkouts();
            setWorkouts(data);
        }
    }, [getMyWorkouts, isAuthenticated]);

    const createWorkout = useCallback(async (workout) => {
        if (isAuthenticated) {
            const res = await postWorkout(workout);
            if (res.status === 200) {
                fetchWorkouts();
                console.log("fetched new workouts!");
            }
        }
    }, [isAuthenticated, fetchWorkouts, postWorkout]);

    const removeWorkout = useCallback(async (workoutName) => {
        if (isAuthenticated) {
            const res = await deleteWorkout(workoutName);
            if (res.status === 200) {
                fetchWorkouts();
                console.log('fetched new workouts!');
            }
        }
    }, [isAuthenticated, deleteWorkout, fetchWorkouts]);

    useEffect(() => {
        fetchWorkouts();

    }, [fetchWorkouts]);

    const value = useMemo(() => ({
             workouts, createWorkout, removeWorkout
    }), [workouts, createWorkout, removeWorkout]);

    return (
        <WorkoutContext.Provider value={value}>
            {children}
        </WorkoutContext.Provider>
    );
}