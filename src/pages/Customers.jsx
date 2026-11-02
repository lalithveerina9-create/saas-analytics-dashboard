import { recentCustomers } from "../data/mockData";

function Customers() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Customers</h1>
          <p>Manage and view your customers.</p>
        </div>
      </div>

      <div className="customer-card">
        <h2>All Customers</h2>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Revenue</th>
                <th>Joined</th>
              </tr>
            </thead>

            <tbody>
              {recentCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td>
                    <div className="customer-info">
                      <div className="customer-avatar">
                        {customer.name.charAt(0)}
                      </div>

                      <div>
                        <strong>{customer.name}</strong>
                        <span>{customer.email}</span>
                      </div>
                    </div>
                  </td>

                  <td>{customer.plan}</td>

                  <td>
                    <span
                      className={`status-badge ${customer.status.toLowerCase()}`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td>{customer.revenue}</td>
                  <td>{customer.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customers;