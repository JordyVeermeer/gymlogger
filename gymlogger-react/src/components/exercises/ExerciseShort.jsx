import './exercise.css';
import img from '../../assets/benchpress.jpg';
import { useNavigate } from 'react-router-dom';

export default function ExerciseShort({ exercise }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/exercise/${exercise.id}`);
    }

    return (
        <div className="exercise-short" onClick={handleClick}>
            <img src={img} alt='Bench press' className='image' />
            <h1>{exercise.name}</h1>
            <p>Primary muscle: {exercise.muscle}</p>
        </div>
    );
}