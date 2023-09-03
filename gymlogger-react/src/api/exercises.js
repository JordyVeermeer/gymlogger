import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useMemo, useCallback } from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/exercises`;

const useExercises = () => {
    const { getAccessTokenSilently } = useAuth0();

    // Get all exercises
    const getAll = useCallback(async () => {
        const token = await getAccessTokenSilently();
        console.log(`access token: ${token}`);
        const { data } = await axios.get(baseUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(`exercises after api call: ${data}`);
        return data;
    }, [getAccessTokenSilently]);

    // Get exercise by name
    const getByName = useCallback(async (name) => {
        const token = getAccessTokenSilently();
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/exercise?name=${name}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('in api call: ' + data);
        return data;
    }, [getAccessTokenSilently]);

    const exercisesApi = useMemo(() => ({
        getAll,
        getByName,

    }), [getAll, getByName])

    return exercisesApi;
}

export default useExercises;
