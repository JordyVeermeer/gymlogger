import './exercise.css';
import img from '../../assets/benchpress.jpg';
import { Link } from 'react-router-dom';

export default function ExerciseShort({ exercise }) {

    const encodedName = encodeURI(exercise.name);

    return (
        <Link to={`/exercise/${encodedName}`} className="exercise-short">
            <div className='card-header'>
                <img src={img} alt='Bench press' className='image' />
            </div>
            <div className='card-content'>
                <h1>{exercise.name}</h1>
                <p>Primary muscle: {exercise.muscle}</p>
            </div>
        </Link>
    );
}