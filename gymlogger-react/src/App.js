import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import SearchPage from './components/searchpage/Searchpage';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Exercise from './components/exercises/Exercise';
import { ExerciseProvider } from './contexts/ExerciseContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "exercise/:name",
        element: <Exercise />,
      }
    ]
  },
]);

function App() {
  return (
    <ExerciseProvider>
      <RouterProvider router={router}/>
    </ExerciseProvider>
  );
}

export default App;
