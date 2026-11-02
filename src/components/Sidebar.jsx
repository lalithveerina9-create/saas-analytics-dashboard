import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const subscriptionData = [
  { name: "Basic", value: 300 },
  { name: "Pro", value: 350 },
  { name: "Enterprise", value: 190 },
];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b"];

function SubscriptionChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h2>Subscription Analytics</h2>
          <p>Distribution of subscription plans</p>
        </div>
      </div>

      <div className="pie-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={subscriptionData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={4}
            >
              {subscriptionData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend verticalAlign="bottom" height={30} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SubscriptionChart;