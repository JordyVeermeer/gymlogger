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

    const workoutsApi = useMemo(() => ({
        getMyWorkouts,

    }), [getMyWorkouts]);

    return workoutsApi;
}

export default useWorkouts;