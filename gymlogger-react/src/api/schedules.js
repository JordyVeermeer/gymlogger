import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useCallback, useMemo } from "react";

const baseUrl = `${process.env.REACT_APP_API_URL}/schedules`;

export const useSchedules = () => {
    const { getAccessTokenSilently } = useAuth0();

    // GET schedules
    const getSchedules = useCallback(async () => {
        const token = await getAccessTokenSilently();
        const res = await axios.get(baseUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => {
            console.log(err);
        });

        console.log("schedules result:" + JSON.stringify(res.data.workouts));
        return res.data.workouts;
        
    }, [getAccessTokenSilently])

    const scheduleApi = useMemo(() => ({
        getSchedules
    }), [getSchedules])

    return scheduleApi;
}