import { useCallback, useMemo } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}/workouts`;

const useWorkouts = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getMyWorkouts = useCallback(async () => {
        const token = await getAccessTokenSilently();
        const { data } = await axios.get(baseUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Workout data: " + JSON.stringify(data));
        return data;
    }, [getAccessTokenSilently]);

    const postWorkout = useCallback(async (workout) => {
        const token = await getAccessTokenSilently();
        const res = await axios.post(baseUrl, workout, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res;
        
    }, [getAccessTokenSilently]);

    const workoutsApi = useMemo(() => ({
        getMyWorkouts,
        postWorkout,

    }), [getMyWorkouts, postWorkout]);

    return workoutsApi;
}

export default useWorkouts;