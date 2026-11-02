import { useState } from "react";
import { recentCustomers } from "../data/mockData";

function CustomerTable() {
  const [search, setSearch] = useState("");

  const filteredCustomers = recentCustomers.filter((customer) =>
    `${customer.name} ${customer.email} ${customer.plan} ${customer.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="customer-card">
      <div className="customer-header">
        <div>
          <h2>Recent Customers</h2>
          <p>Overview of your latest customers</p>
        </div>

        <input
          type="text"
          className="customer-search"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

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
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
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
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-results">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerTable;