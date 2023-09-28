import { useCallback, useMemo } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}/workouts`;

const useWorkouts = () => {
    const { getAccessTokenSilently } = useAuth0();


    // GET workouts
    const getMyWorkouts = useCallback(async () => {
        const token = await getAccessTokenSilently();
        const { data } = await axios.get(baseUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log('Error', err.message);
            }
        });
        console.log("Workout data: " + JSON.stringify(data));
        return data;
    }, [getAccessTokenSilently]);

    // POST workout
    const postWorkout = useCallback(async (workout) => {
        const token = await getAccessTokenSilently();
        const res = await axios.post(baseUrl, workout, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log('Error', err.message);
            }
        });
        return res;
    }, [getAccessTokenSilently]);

    // DELETE workout
    const deleteWorkout = useCallback(async (workoutName) => {
        const token = await getAccessTokenSilently();
        const res = await axios.delete(`${baseUrl}/${workoutName}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log('Error', err.message);
            }
        });
        console.log(`Deleted ${workoutName}`);
        return res;
    }, [getAccessTokenSilently]);

    const workoutsApi = useMemo(() => ({
        getMyWorkouts,
        postWorkout,
        deleteWorkout,

    }), [getMyWorkouts, postWorkout, deleteWorkout]);

    return workoutsApi;
}

export default useWorkouts;