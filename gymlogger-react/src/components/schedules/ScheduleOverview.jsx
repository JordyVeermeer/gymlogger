import { useCallback, useEffect, useState } from "react";
import useSchedules from "../../api/schedules";
import WeekSchedule from "./WeekSchedule";

const ScheduleOverview = () => {
    const { getSchedules } = useSchedules();
    const [ schedule, setSchedule ] = useState([]);
    
    const fetchSchedules = useCallback(async () => {
        const s = await getSchedules();
        console.log(`schedules: ${JSON.stringify(s.workouts)}`);
        setSchedule(s.workouts);
    }, [getSchedules])

    useEffect(() => {
       fetchSchedules();
    }, [fetchSchedules]);


    return (
        <div className="schedule_overview">
            <h1>Active schedule</h1>
            <WeekSchedule schedule={schedule} />
            <h1>Your schedules</h1>
            {
                schedule && schedule.length > 0 &&
                schedule.map(s => (
                    <div>
                        <p>{s.weekday}</p>
                        <p>{s.workout.name}</p>
                    </div>
                ))
             }
        </div>
    )
}

export default ScheduleOverview;