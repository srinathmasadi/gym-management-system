import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import DashboardHome from './DashboardHome';
import RegisterPersonCard from './RegisterPerson';
import { Outlet } from 'react-router-dom';
import CoachesTable from './Coaches';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-[#ECE9E9]">
        <DashboardHeader />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
            <Route path="/register" element={<RegisterPersonCard />} />
            <Route path="/coaches" element={<CoachesTable />} />

          {/* Add other routes for Register Person, Payment, etc. */}
        </Routes>
        <Outlet />
      </main>
    </div>
  );
}