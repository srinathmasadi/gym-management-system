import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import Dashboard from '../features/Dashboard/Dashboard';
import DashboardHome from '../features/Dashboard/DashboardHome';
import RegisterPersonCard from '../features/Dashboard/RegisterPerson';
import CoachesTable from '../features/Dashboard/Coaches';
import GymLandingPage from '../features/Gym/GymLandingPage';
import LandingPage from '../pages/LandingPage';


const ProtectedRoutes = () => {
  // You can add authentication logic here if needed
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="register" element={<RegisterPersonCard />} />
        <Route path="coaches" element={<CoachesTable />} />
        {/* ...other dashboard routes */}
      </Route>
      {/* Public gym landing page route */}
      <Route path="/gym/:gymId" element={<GymLandingPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default ProtectedRoutes;