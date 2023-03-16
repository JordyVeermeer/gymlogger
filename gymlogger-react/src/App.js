import Exercises from './components/exercises/Exercises';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import SearchPage from './components/searchpage/Searchpage';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "search",
        element: <SearchPage />,
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
