import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import SearchPage from './components/searchpage/Searchpage';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Exercise from './components/exercises/Exercise';

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
        path: "exercise/:id",
        element: <Exercise />,
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
