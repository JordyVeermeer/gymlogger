import Exercises from './components/exercises/Exercises';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
