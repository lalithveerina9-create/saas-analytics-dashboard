import StatCard from "../components/StatCard";
import RevenueChart from "../components/RevenueChart";
import SubscriptionChart from "../components/SubscriptionChart";
import CustomerTable from "../components/CustomerTable";
import { dashboardStats } from "../data/mockData";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Welcome back! Here's what's happening with your business.
          </p>
        </div>

        <div className="date-filter">
          <select>
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            description={stat.description}
            type={stat.type}
          />
        ))}
      </div>

      {/* Analytics Charts */}
      <div className="charts-grid">
        <RevenueChart />
        <SubscriptionChart />
      </div>

      {/* Recent Customers Table */}
      <CustomerTable />

    </div>
  );
}

export default Dashboard;