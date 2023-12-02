import { weekDays, findWorkout } from "./WeekSchedule"
import { ScheduleContext } from "../../contexts/ScheduleContext"
import { WorkoutContext } from "../../contexts/WorkoutContext";
import { useContext } from "react"
import { CustomSelect } from "../buttons/CustomSelect";
import { CustomButton } from "../buttons/CustomButton";

export const EditSchedule = () => {

    const { schedule } = useContext(ScheduleContext);
    const { workouts } = useContext(WorkoutContext);


    return <div className="edit-schedule">
        <h1>Edit your schedule</h1>
        {weekDays.map((day) => (
            <div>
                <div>{day}</div>
                {/* { findWorkout(day, schedule) } */}
                <CustomSelect options={[...workouts.map((w) => w.name), 'Rest']} />
                {/* load all workouts of user into options of select element, put current selected workout as default */}
            </div>
        ))}
        <CustomButton label={'Save schedule'} />
    </div>
}