import { Card } from 'primereact/card';

export default function DashboardHome() {
  return (
    <div className="p-8 space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Welcome" className="shadow">
          <p>Welcome to the Gym Dashboard!</p>
        </Card>
        <Card title="Calendar" className="shadow">
          <p>Calendar content here</p>
        </Card>
        <Card title="Coaches" className="shadow">
          <p>Coaches content here</p>
        </Card>
        <Card title="Active Members" className="shadow">
          <p>Active members content here</p>
        </Card>
        <Card title="Expired Members" className="shadow">
          <p>Expired members content here</p>
        </Card>
        <Card title="Expiring in 3 Days" className="shadow">
          <p>Members expiring in 3 days content here</p>
        </Card>
      </div>
    </div>
  );
}