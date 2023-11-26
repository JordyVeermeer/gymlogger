import '../progress/progress.css';

export const ProgressExerciseShort = ({title, weight, reps}) => {

    return (
        <div className="progress-exercise-short">
            <div>{title}</div>
            <div className='progress-exercise-short-weight'>
                <span className='accentuated-weight'>{weight}</span>
                <span>kg</span>
            </div>
            <div>{reps}</div>
        </div>
    )
}