import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import SearchPage from './components/searchpage/Searchpage';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Exercise from './components/exercises/Exercise';
import { ExerciseProvider } from './contexts/ExerciseContext';
import { Homepage } from './components/Homepage';
import WorkoutList from './components/workouts/WorkoutList.jsx';
import { WorkoutProvider } from './contexts/WorkoutContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "exercise/:name",
        element: <Exercise />,
      },
      {
        path: "myworkouts",
        element: <WorkoutList />,
      }
    ]
  },
]);

function App() {
  return (
    <ExerciseProvider>
      <WorkoutProvider>
      <RouterProvider router={router}/>
      </WorkoutProvider>
    </ExerciseProvider>
  );
}

export default App;
