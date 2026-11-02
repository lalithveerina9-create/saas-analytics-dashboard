import {
  DollarSign,
  Users,
  CreditCard,
  TrendingDown,
} from "lucide-react";

function StatCard({ title, value, change, description, type }) {

  const icons = {
    "Total Revenue": <DollarSign size={22} />,
    "Total Customers": <Users size={22} />,
    "Active Subscriptions": <CreditCard size={22} />,
    "Churn Rate": <TrendingDown size={22} />,
  };

  return (
    <div className="stat-card">

      <div className="stat-card-top">

        <div className="stat-icon">
          {icons[title]}
        </div>

        <span className="stat-title">
          {title}
        </span>

      </div>

      <div className="stat-value">
        {value}
      </div>

      <div className="stat-change">

        <span className={type}>
          {change}
        </span>

        <span className="stat-description">
          {description}
        </span>

      </div>

    </div>
  );
}

export default StatCard;