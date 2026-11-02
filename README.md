# SaaS Analytics Dashboard

A modern, responsive SaaS Analytics Dashboard built using React and Vite. It provides a centralized interface for monitoring business performance, analyzing revenue trends, viewing subscription distributions, and managing customer information.

## 🚀 Features

### 📊 Dashboard Overview
- Displays key business performance indicators.
- Total Revenue
- Total Customers
- Active Subscriptions
- Churn Rate
- Shows percentage changes compared with the previous month.

### 📈 Revenue Analytics
- Interactive monthly revenue line chart.
- Visualizes revenue trends over time.
- Displays revenue values using tooltips.
- Built using Recharts.

### 🥧 Subscription Analytics
- Interactive pie chart showing subscription plan distribution.
- Displays Basic, Pro, and Enterprise subscription categories.
- Includes chart labels, legends, and tooltips.

### 👥 Customer Management
- Displays customer information in a structured table.
- Shows customer names, email addresses, subscription plans, statuses, revenue, and join dates.
- Includes customer search functionality if enabled in the current implementation.

### 🎨 User Interface
- Clean and professional dashboard layout.
- Responsive design for different screen sizes.
- Sidebar navigation.
- Reusable React components.
- Modern cards, charts, and tables.

## 🛠️ Tech Stack

- **React** — Building reusable user interface components.
- **Vite** — Development server and build tool.
- **JavaScript** — Application logic.
- **HTML5** — Page structure.
- **CSS3** — Styling and responsive layouts.
- **Recharts** — Revenue and subscription charts.
- **Lucide React** — Icons, if used in the project.
- **React Router DOM** — Page navigation, if used in the project.

## 📂 Project Structure

```text
saas-analytics-dashboard/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── StatCard.jsx
│   │   ├── RevenueChart.jsx
│   │   ├── SubscriptionChart.jsx
│   │   └── CustomerTable.jsx
│   │
│   ├── data/
│   │   └── mockData.jsx
│   │
│   ├── pages/
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

*Note: The structure above is a reference. Update the file and folder names to match your actual project.*

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- Visual Studio Code or another code editor

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### Step 2: Open