import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';


import DisplayAllSch from './pages/DisplayAllSch';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Scholarships from './components/Scholarships';
import SingleScholarPage, { scholarshipLoader } from './pages/SingleScholarPage';
import Login from './components/Login'; // Import Login component
import Register from './components/Register'; // Import Register component
import Logout from './components/Logout';
import PrivateGuidanceForm from './components/PrivateGuidanceForm';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/dispall" element={<DisplayAllSch />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/scholarships/:id" element={<SingleScholarPage />} loader={scholarshipLoader} />
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route path="/register" element={<Register />} /> {/* Add Register route */}
        <Route path="/logout" element={<Logout />} /> {/* Add Logout route */}
        <Route path="/privateguide" element={<PrivateGuidanceForm/>}/>
      </Route>
    )
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
