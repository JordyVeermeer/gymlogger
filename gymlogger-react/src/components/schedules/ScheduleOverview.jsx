import { useCallback, useContext, useEffect, useState } from "react";
import {useSchedules} from "../../api/schedules";
import {WeekSchedule} from "./WeekSchedule";
import { ScheduleContext } from "../../contexts/ScheduleContext";
import '../schedules/schedules.css';

const ScheduleOverview = () => {
    //const [ schedule, setSchedule ] = useState([]);
    const { schedule } = useContext(ScheduleContext);
    
    /* const fetchSchedules = useCallback(async () => {
        const s = await getSchedules();
        console.log(`schedules: ${JSON.stringify(s)}`);
        setSchedule(s);
    }, [getSchedules])

    useEffect(() => {
       fetchSchedules();
    }, [fetchSchedules]);
 */

    return (
        <div className="schedule-overview">
            <h1>Active schedule</h1>
            <WeekSchedule schedule={schedule} />
            {/* <h1>Your schedules</h1>
            {
                schedule && schedule.length > 0 &&
                schedule.map(s => (
                    <div>
                        <p>{s.weekday}</p>
                        <p>{s.workout.name}</p>
                    </div>
                ))
             } */}
        </div>
    )
}

export default ScheduleOverview;