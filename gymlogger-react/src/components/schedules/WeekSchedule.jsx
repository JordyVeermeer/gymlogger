import { CustomButton } from '../buttons/CustomButton';
import { useNavigate } from 'react-router-dom';

export const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// function to find if there is a workout scheduled for a certain weekday, otherwise return 'rest'
export const findWorkout = (weekday, schedule) => {
    const workout = schedule.find((workout) => (workout.weekday.toLowerCase() === weekday.toLowerCase()));
    if (workout) {
        return workout.workout.name;
    } else {
        return 'rest';
    }
};

export const WeekSchedule = ({schedule}) => {

    const navigate = useNavigate();

    return (
        <div className="week-schedule">
            {
                weekDays.map((day) => (
                    <div>
                        <div><b>{day}</b></div>
                        {
                            findWorkout(day, schedule)
                        }
                    </div>
                ))
            }
            <CustomButton label={'edit'} onclick={() => navigate('/schedules/edit')} />
        </div>
    )
}