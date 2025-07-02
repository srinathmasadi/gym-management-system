import { Link } from 'react-router-dom';
import logo from '../assets/image.png'; // Adjust path if needed

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#ECE9E9] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white shadow">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Gym Management Logo" className="h-12 w-12 object-contain" />
          <span className="text-2xl font-bold text-[#332F64]">Gym Management System</span>
        </div>
        <nav className="flex gap-6">
          <Link to="/login" className="text-[#332F64] font-semibold hover:underline">Login</Link>
          <Link to="/signup" className="text-[#332F64] font-semibold hover:underline">Sign Up</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 py-12 gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1363] mb-6">
            Manage Your Gym Effortlessly
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Register your gym, manage memberships, track payments, monitor inventory, and empower your coaches—all in one powerful platform. 
            <span className="block mt-2">Perfect for fitness centers, yoga studios, and all types of gyms!</span>
          </p>
          <Link
            to="/signup"
            className="inline-block bg-[#1A1363] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#332F64] transition"
          >
            Get Started
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src={logo}
            alt="Gym Illustration"
            className="w-80 h-80 object-contain drop-shadow-lg"
          />
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ECE9E9] rounded-lg p-6 shadow text-center">
            <i className="pi pi-users text-3xl text-[#1A1363] mb-3"></i>
            <h3 className="font-bold text-lg mb-2">Membership Management</h3>
            <p className="text-gray-600">Easily register, renew, and track your gym members and their plans.</p>
          </div>
          <div className="bg-[#ECE9E9] rounded-lg p-6 shadow text-center">
            <i className="pi pi-credit-card text-3xl text-[#1A1363] mb-3"></i>
            <h3 className="font-bold text-lg mb-2">Payments & Billing</h3>
            <p className="text-gray-600">Automate payment tracking and get notified about expiring memberships.</p>
          </div>
          <div className="bg-[#ECE9E9] rounded-lg p-6 shadow text-center">
            <i className="pi pi-box text-3xl text-[#1A1363] mb-3"></i>
            <h3 className="font-bold text-lg mb-2">Inventory & Staff</h3>
            <p className="text-gray-600">Manage gym equipment, inventory, and coach assignments with ease.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Gym Management System. All rights reserved.
      </footer>
    </div>
  );
}