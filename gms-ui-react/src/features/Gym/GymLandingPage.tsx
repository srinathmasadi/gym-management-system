import { useParams } from 'react-router-dom';
import logo from '../../assets/image.png'; // Adjust path as needed

export default function GymLandingPage() {
  // You can fetch gym data using the gymId param or from context/store
  const { gymId } = useParams();

  // Replace with dynamic data as needed
  const gym = {
    name: "FitLife Gym",
    description: "A premium fitness destination for men & women.",
    offers: [
      { icon: "pi pi-comments", label: "24/7 Chat" },
      { icon: "pi pi-user", label: "1-on-1 Coaching" },
      { icon: "pi pi-heart", label: "Nutrition Plan Guide" },
    ],
    plans: [
      { name: "Annual Membership", desc: "Best value for year-round fitness." },
      { name: "7 Days Weekly Rate", desc: "Short-term, flexible access." },
      { name: "Monthly Plan", desc: "Pay as you go, month by month." },
      { name: "Biannual Rate", desc: "Great savings for 6 months." },
      { name: "Annual Rate", desc: "Commit for a year and save more." },
    ],
    coaches: [
      { name: "Jane Smith", photo: "/assets/coach-jane.png", bio: "Certified Personal Trainer" },
      { name: "Mike Lee", photo: "/assets/coach-mike.png", bio: "Strength & Conditioning Coach" }
    ],
    location: "123 Main St, YourCity",
  };

  return (
    <div className="min-h-screen bg-[#ECE9E9] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white shadow">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Gym Logo" className="h-12 w-12 object-contain" />
          <span className="text-2xl font-bold text-[#332F64]">{gym.name}</span>
        </div>
        <nav className="flex gap-6 font-semibold text-[#332F64]">
          <a href="#about" className="hover:underline">About</a>
          <a href="#whyjoin" className="hover:underline">Why Join Us?</a>
          <a href="#plan" className="hover:underline">Plan</a>
          <a href="#coaches" className="hover:underline">Coaches</a>
          <a href="#visit" className="hover:underline">Visit our Gym</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-8 bg-[#ECE9E9]">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1363] mb-4">
            Start a better shape of you!
          </h1>
          <p className="text-lg text-gray-700 mb-6">Come Join us!</p>
        </div>
        <img src={logo} alt="Gym Logo" className="h-40 w-40 object-contain drop-shadow-lg" />
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-8 bg-white">
        <h2 className="text-2xl font-bold text-[#332F64] mb-2">{gym.name} for Men & Women</h2>
        <p className="text-gray-700 mb-6">{gym.description}</p>
        <div className="flex flex-wrap gap-8" id="whyjoin">
          <div className="bg-[#ECE9E9] rounded-lg p-6 shadow flex flex-col items-center w-48">
            <i className="pi pi-comments text-3xl text-[#1A1363] mb-2"></i>
            <span className="font-semibold">24/7 Chat</span>
          </div>
          <div className="bg-[#ECE9E9] rounded-lg p-6 shadow flex flex-col items-center w-48">
            <i className="pi pi-user text-3xl text-[#1A1363] mb-2"></i>
            <span className="font-semibold">1-on-1 Coaching</span>
          </div>
          <div className="bg-[#ECE9E9] rounded-lg p-6 shadow flex flex-col items-center w-48">
            <i className="pi pi-heart text-3xl text-[#1A1363] mb-2"></i>
            <span className="font-semibold">Nutrition Plan Guide</span>
          </div>
        </div>
      </section>

      {/* Plan Section */}
      <section id="plan" className="py-12 px-8">
        <h2 className="text-2xl font-bold text-[#332F64] mb-6">Our Plan - Join our membership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gym.plans.map(plan => (
            <div key={plan.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="text-xl font-semibold text-[#1A1363] mb-2">{plan.name}</div>
              <div className="text-gray-600 text-center">{plan.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-12 px-8 bg-white">
        <h2 className="text-2xl font-bold text-[#332F64] mb-6">Coaches</h2>
        <div className="flex flex-wrap gap-8">
          {gym.coaches.map(coach => (
            <div key={coach.name} className="bg-[#ECE9E9] rounded-lg shadow p-6 flex flex-col items-center w-48">
              <img src={coach.photo} alt={coach.name} className="h-20 w-20 rounded-full mb-2 object-cover" />
              <div className="font-bold">{coach.name}</div>
              <div className="text-sm text-gray-500">{coach.bio}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Visit our Gym Section */}
      <section id="visit" className="py-12 px-8">
        <h2 className="text-2xl font-bold text-[#332F64] mb-4">Visit our Gym</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-2">{gym.location}</div>
          {/* You can embed a Google Map iframe here */}
          <iframe
            title="Gym Location"
            src="https://maps.google.com/maps?q=123%20Main%20St,%20YourCity&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="200"
            className="rounded"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-white">
        &copy; {new Date().getFullYear()} {gym.name}. All rights reserved.
      </footer>
    </div>
  );
}