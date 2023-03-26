import './exercise.css';
import ExerciseShort from './ExerciseShort';

export default function ExerciseList({ exerciseList }) {

    return (
        <div className='exercise-list'>
            {
                exerciseList &&
                exerciseList.map(e => {
                    return <ExerciseShort exercise={e} />
                })
            }
        </div>
    );
};