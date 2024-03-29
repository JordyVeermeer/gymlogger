import ErrorPage from './components/ErrorPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exercise from './components/exercises/Exercise';
import { ExerciseProvider } from './contexts/ExerciseContext';
import { Homepage } from './components/Homepage';
import WorkoutList from './components/workouts/WorkoutList.jsx';
import { WorkoutProvider } from './contexts/WorkoutContext';
import AppRoot from './components/AppRoot';
import { Dashboard } from './components/dashboard/Dashboard';
import { LoginCallback } from './components/authentication/LoginCallback';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthenticationGuard } from './components/authentication/AuthenticationGuard';
import { WorkoutForm } from './components/workouts/WorkoutForm';
import ScheduleOverview from './components/schedules/ScheduleOverview';
import ExercisesOverview from './components/exercises/ExercisesOverview';
import { EditSchedule } from './components/schedules/EditSchedule.jsx';
import { ScheduleProvider } from './contexts/ScheduleContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain='dev-dwjylcygmkes8a40.eu.auth0.com'
        clientId='8c7K8y5cO1wtMvMxSZv3Tg1fBL2PmYjR'
        authorizationParams={{
          redirect_uri: 'http://localhost:3000/dashboard',
          audience: `${process.env.REACT_APP_AUTH0_API_AUDIENCE}`,
          scope: "read:current_user update:current_user_metadata offline_access",
        }}
        cacheLocation='localstorage'
        useRefreshTokens
      >
        <ExerciseProvider>
          <WorkoutProvider>
            <ScheduleProvider>
            <Routes>
              <Route path='/' element={<Homepage />} />
              {/* <Route path='/login/callback' element={<LoginCallback />} /> */}

              <Route path='/' element={<AppRoot />} >
                <Route path='/login/callback' element={<LoginCallback />} />
                <Route path='/dashboard' element={<AuthenticationGuard component={Dashboard} />} />
                <Route path='/exercises' element={<AuthenticationGuard component={ExercisesOverview} />} />
                <Route path='/exercise/:name' element={<AuthenticationGuard component={Exercise} />} />
                <Route path='/workouts' element={<AuthenticationGuard component={WorkoutList} />} />
                <Route path='/workouts/new' element={<AuthenticationGuard component={WorkoutForm} />} />
                <Route path='/schedules' element={<AuthenticationGuard component={ScheduleOverview} />} />
                <Route path='/schedules/edit' element={<AuthenticationGuard component={EditSchedule} />} />


              </Route>

              <Route path='*' element={<ErrorPage />} />

              
            </Routes>
            </ScheduleProvider>
          </WorkoutProvider>
        </ExerciseProvider>
      </Auth0Provider>
    </BrowserRouter>
    
  );
}

export default App;
