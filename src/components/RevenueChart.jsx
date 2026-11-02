
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { revenueData } from "../data/mockData";

function RevenueChart() {
  console.log("Revenue data:", revenueData);

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h2>Revenue Overview</h2>
          <p>Monthly revenue performance</p>
        </div>
      </div>

      <div style={{ width: "100%", height: 320, overflowX: "auto" }}>
        <LineChart
          width={500}
          height={320}
          data={revenueData}
          margin={{ top: 15, right: 20, left: 15, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

          <XAxis dataKey="month" />

          <YAxis
            tickFormatter={(value) => `₹${value / 1000}k`}
          />

          <Tooltip
            formatter={(value) => [
              `₹${Number(value).toLocaleString("en-IN")}`,
              "Revenue",
            ]}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 5, fill: "#6366f1" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default RevenueChart;
