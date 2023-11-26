import { Link } from 'react-router-dom';
import '../dashboard/dashboard.css';
import imgDashboard from '../../assets/dashboard_logo.png';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { ProgressExerciseShort } from '../progress/ProgressExerciseShort';


export const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="dashboard-top-section">
                <div className="top-section-left">
                    <h1>Schedule your workout program now.</h1>
                    <Link className='actionbutton-dashboard' to={'/schedules'} >
                        <span>start now</span>
                        <ArrowCircleRightIcon sx={{ color: '#b3ba45' }} />
                    </Link>
                </div>
                <div className="top-section-right">
                    <img src={imgDashboard} alt="Logo" />
                </div>
            </div>
            <div className="dashboard-progress">
                <h3>Progress</h3>
                <div className="dashboard-progress-grid">
                    <ProgressExerciseShort title={'Benchpress'} weight={70} reps={'3x12'} />
                    <ProgressExerciseShort title={'Squat'} weight={75} reps={'3x10'} />
                    <ProgressExerciseShort title={'Deadlift'} weight={100} reps={'3x10'} />
                    <ProgressExerciseShort title={'Shoulder press'} weight={20} reps={'3x10'} />
                </div>
            </div>
        </div>
    );
};