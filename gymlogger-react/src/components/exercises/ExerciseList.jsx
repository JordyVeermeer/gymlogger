import { useContext, useEffect } from 'react';
import { ExerciseContext } from '../../contexts/ExerciseContext';
import './exercise.css';
import ExerciseShort from './ExerciseShort';

export default function ExerciseList() {

    const { exercises } = useContext(ExerciseContext);

    useEffect(() => {
        console.log(exercises);
    }, [exercises]);

    return (
        <div className='exercise-list'>
            {
                exercises != null && exercises.length > 0 ?
                exercises.map(e => {
                    return <ExerciseShort exercise={e} />
                })
                : <p>No exercises found.</p>
            }
        </div>
    );
};