import ProtectedRoute from "@/components/auth/ProtectedRoute";
import OccupancyChart from "@/components/charts/OccupancyChart";
import Card3D from "@/components/ui/Card3D";

export default function SuperAdminDashboard() {
  return (
    <ProtectedRoute role="super-admin">
      <div className="p-8 space-y-6">
        <h1 className="text-3xl font-semibold">Super Admin Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card3D>
            <h2 className="text-xl mb-4">Occupancy</h2>
            <OccupancyChart />
          </Card3D>

          <Card3D>
            <h2 className="text-xl mb-2">Revenue</h2>
            <p className="text-textSecondary">
              ₹4,80,000 this month
            </p>
          </Card3D>
        </div>
      </div>
    </ProtectedRoute>
  );
}
