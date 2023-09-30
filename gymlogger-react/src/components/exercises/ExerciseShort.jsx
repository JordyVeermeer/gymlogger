import './exercise.css';
import img from '../../assets/Barbell_bench_press.png';
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function ExerciseShort({ exercise }) {

    const encodedName = encodeURI(exercise.name);

    return (
        <div className='exercise-short' >
            <Link to={`/exercise/${encodedName}`}>
                <div className="exercise-short-card">
                    <div className="exercise-short-photo">
                        <img src={img} alt='exercise' />
                    </div>
                    <div className="exercise-short-content">
                        <p>
                            {exercise.name}<br />
                            <small>Primary muscle: {exercise.muscle}</small>
                        </p>
                    </div>
                    <div className="exercise-card-action-btn">
                        <ArrowCircleRightIcon sx={{ color: '#b3ba45' }} />
                    </div>
                </div>
            </Link>
        </div>
    );
}