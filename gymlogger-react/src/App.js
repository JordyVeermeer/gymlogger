import Navbar from './components/navbar/Navbar';
import Exercises from './components/exercises/Exercises';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Zie react router docs !!
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "exercises",
        element: <Exercises />,
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
