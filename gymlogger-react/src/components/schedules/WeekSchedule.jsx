
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WeekSchedule = ({schedule}) => {

    const findWorkout = (day) => {
        const workout = schedule.find((workout) => (workout.weekday.toLowerCase() === day.toLowerCase()));
        if (workout) {
            return workout.workout.name;
        } else {
            return 'rest';
        }
    };

    return (
        <div className="week-schedule">
            {
                weekDays.map((day) => (
                    <div>
                        <div><b>{day}</b></div>
                        {
                            findWorkout(day)
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default WeekSchedule;