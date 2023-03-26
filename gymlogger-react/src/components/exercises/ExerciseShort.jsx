import './exercise.css';
import img from '../../assets/benchpress.jpg';

export default function ExerciseShort({ exercise }) {

    return (
        <div className="exercise-short">
            <img src={img} alt='Bench press' className='image' />
            <h1>{exercise.name}</h1>
            <p>Primary muscle: {exercise.muscle}</p>
        </div>
    );
}