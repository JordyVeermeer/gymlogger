import { Input } from '@mui/base/Input';
import '../exercises/exercise.css';
import { useContext } from "react";
import { ExerciseContext } from '../../contexts/ExerciseContext';
import ExerciseShort from './ExerciseShort';
import AddIcon from '@mui/icons-material/Add';


const ExercisesOverview = () => {

    const { exercises } = useContext(ExerciseContext);

    return (
        <div className="exercises-overview">
            <h1>Exercises list</h1>
            <div className="exercises-overview-util">
                <Input />
                <AddIcon className='add-exercise-btn' />
            </div>
            <div className="exercises-list">
                {
                    exercises &&
                    exercises.map(e => (
                        <ExerciseShort exercise={e} />
                    ))
                }
            </div>
        </div>
    )
}

export default ExercisesOverview;