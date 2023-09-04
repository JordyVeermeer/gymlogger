import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect, useMemo, useState } from "react";
import useWorkouts from "../api/workouts";


export const WorkoutContext = createContext([]);

export const WorkoutProvider = ({ children }) => {

    const [workouts, setWorkouts] = useState();
    const { isAuthenticated } = useAuth0();
    const { getMyWorkouts } = useWorkouts();

    useEffect(() => {
        const fetchWorkouts = async () => {
            if (isAuthenticated) {
                const data = await getMyWorkouts();
                setWorkouts(data);
            }
        }

        fetchWorkouts();

    }, [getMyWorkouts, isAuthenticated]);

    const value = useMemo(() => ({
             workouts, 
    }), [workouts]);

    return (
        <WorkoutContext.Provider value={value}>
            {children}
        </WorkoutContext.Provider>
    );
}