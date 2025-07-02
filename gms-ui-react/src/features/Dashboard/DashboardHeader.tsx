import logo from '../../assets/image.png';

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-4 p-8 pb-0">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Gym Logo" className="h-12 w-12 object-contain" />
        <span className="text-2xl font-bold text-[#332F64]">My Gym Name</span>
      </div>
      <div className="flex items-center space-x-3">
        <button className="flex items-center px-4 py-2 bg-[#332F64] text-white rounded-full hover:bg-[#1A1363] transition">
          Feedback
          <i className="pi pi-bell ml-2 text-xl" />
        </button>
      </div>
    </div>
  );
}