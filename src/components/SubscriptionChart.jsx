
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const subscriptionData = [
  { name: "Basic", value: 300 },
  { name: "Enterprise", value: 190 },
  { name: "Pro", value: 350 },
];

const COLORS = ["#6366f1", "#f59e0b", "#22c55e"];

function SubscriptionChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h2>Subscription Analytics</h2>
          <p>Distribution of subscription plans</p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: 300,
          overflowX: "auto",
        }}
      >
        <PieChart width={350} height={300}>
          <Pie
            data={subscriptionData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="45%"
            outerRadius={90}
            innerRadius={45}
            paddingAngle={3}
            label
          >
            {subscriptionData.map((item, index) => (
              <Cell
                key={item.name}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </div>
    </div>
  );
}

export default SubscriptionChart;
