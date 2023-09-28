
const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const WeekSchedule = ({schedule}) => {

    return (
        <div>
            {
                weekDays.map((day) => (
                    <div>
                        <span>{day}: </span>
                        {
                            schedule.map((workout) => {
                                if (workout.weekday.toLowerCase() === day.toLowerCase()) {
                                    return <span>{workout.workout.name}</span>
                                } 
                            })
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default WeekSchedule;