import { Link, useLocation } from 'react-router-dom';
import 'primeicons/primeicons.css';

const menu = [
  { label: 'Dashboard', path: '/dashboard', icon: 'pi pi-home' },
  { label: 'Register Person', path: '/dashboard/register', icon: 'pi pi-user-plus' },
  { label: 'Payment', path: '/dashboard/payment', icon: 'pi pi-credit-card' },
  { label: 'Inventory', path: '/dashboard/inventory', icon: 'pi pi-box' },
  { label: 'Coaches', path: '/dashboard/coaches', icon: 'pi pi-users' },
  { label: 'View Members', path: '/dashboard/members', icon: 'pi pi-users' },

];

// Replace with actual user data as needed
const user = {
  name: 'Gym Admin',
  email: 'admin@gym.com',
  profilePic: '/assets/profile.png', // Place your profile image in public/assets or adjust the path
};

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="w-64 bg-[#1A1363] min-h-screen text-white flex flex-col py-8">
      <div className="flex flex-col items-center mb-8 px-6">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-16 h-16 rounded-full mb-3 border-2 border-white object-cover"
        />
        <div className="text-2xl font-bold">{user.name}</div>
        <div className="text-sm text-gray-300 mt-1">{user.email}</div>
      </div>
      <nav className="flex-1">
        {menu.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-6 py-3 rounded-l-full mb-2 transition ${
              location.pathname === item.path ? 'bg-white text-[#1A1363] font-semibold' : 'hover:bg-[#332F64]'
            }`}
          >
            <i className={`${item.icon} text-lg`} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <button
        className="mx-6 mt-8 px-4 py-2 flex items-center gap-2 rounded-full text-white font-semibold transition hover:bg-[#332F64]"
        onClick={() => {
          // Add your logout logic here
        }}
      >
        <i className="pi pi-sign-out text-lg" />
        Logout
      </button>
    </aside>
  );
}