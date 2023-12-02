import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { useSchedules } from "../api/schedules";


export const ScheduleContext = createContext([]);

export const ScheduleProvider = ({ children }) => {

    const [schedule, setSchedule] = useState();
    const { isAuthenticated } = useAuth0();
    const { getSchedules } = useSchedules();

    // Fetch schedule(s) from API
    const fetchSchedules = useCallback(async () => {
        if (isAuthenticated) {
            const data = await getSchedules();
            setSchedule(data);
            console.log("Schedules have been fetched! res: " + JSON.stringify(data));

        }
    }, [isAuthenticated, getSchedules]);

    useEffect(() => {
        fetchSchedules();
    }, [fetchSchedules]);

    const value = useMemo(() => ({
        schedule
    }), [schedule])

    return (
        <ScheduleContext.Provider value={value}>
            {children}
        </ScheduleContext.Provider>
    )
}