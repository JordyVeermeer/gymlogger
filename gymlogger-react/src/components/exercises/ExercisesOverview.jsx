import '../exercises/exercise.css';
import { useContext, useEffect, useState } from "react";
import { ExerciseContext } from '../../contexts/ExerciseContext';
import ExerciseShort from './ExerciseShort';
import AddIcon from '@mui/icons-material/Add';


const ExercisesOverview = () => {

    const { exercises, filterBy } = useContext(ExerciseContext);
    const [filteredExercises, setFilteredExercises] = useState([]);

    const filterExercises = (event) => {
        // filters exercise list on every keystroke, maybe find better alternative
        const newExercises = filterBy(event.target.value);
        setFilteredExercises(newExercises);
    }

    useEffect(() => {
        if (filteredExercises.length === 0) {
            setFilteredExercises(exercises);
        }
    }, [exercises, filteredExercises]);

    return (
        <div className="exercises-overview">
            <h1>Exercises list</h1>
            <div className="exercises-overview-util">
                <input 
                    type='text' 
                    onChange={filterExercises} 
                    placeholder='search'
                />
                <AddIcon className='add-exercise-btn' />
            </div>
            <div className="exercises-list">
                {
                    filteredExercises && 
                    filteredExercises.map(e => (
                        <ExerciseShort exercise={e} />
                    ))
                }
            </div>
        </div>
    )
}

export default ExercisesOverview;