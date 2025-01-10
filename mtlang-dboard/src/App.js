// Import necessary libraries
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Bar, Doughnut } from "react-chartjs-2";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "tailwindcss/tailwind.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import data from './data/clients.json'
import { FaGoogle } from "react-icons/fa";

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

// URL for the GeoJSON data (world map)
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const Dashboard = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [600, 550, 650, 450, 730, 780, 720, 630, 570, 550, 610, 660],
        backgroundColor: "rgba(159, 122, 234, 0.5)", // Transparent purple
        borderColor: "rgba(159, 122, 234, 1)", // Solid purple for border
        borderWidth: 2, // Add border to the bars
        borderRadius: 10, // Rounded corners for bars
      },
    ],
  };

  const donutData = {
    labels: ["Paid", "Unpaid", "Overdue"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#68D391", "#63B3ED", "#FC8181"],
      },
    ],
  };


  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-blue-600">Home</Link>
          <Link to="/clients" className="text-blue-600">Clients</Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-sm font-medium">Total Clients</h2>
          <p className="text-lg font-bold">112</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-sm font-medium">Total Invoices</h2>
          <p className="text-lg font-bold">65</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-sm font-medium">Total Revenue</h2>
          <p className="text-lg font-bold">$7500</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-sm font-medium">Unpaid</h2>
          <p className="text-lg font-bold">$1200</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-sm font-medium mb-2">Total Revenue</h2>
          <Bar data={barData} key="bar-chart" />
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-sm font-medium mb-2">Invoice Status</h2>
          <Doughnut data={donutData} key="doughnut-chart" />
        </div>
      </div>

      {/* Bottom Section: Clients and Geography */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8">
        {/* Clients Section */}
        <div className="col-span-5 bg-white border p-4 rounded-md shadow">
          <div className="flex justify-between">
            <h2 className="flex text-lg font-bold mb-4">Clients</h2>
            <button className="flex bg-purple-500 text-white py-2 px-4 rounded-md mb-4">
              Add Client
            </button>
          </div>
          <ul>
            { data.clients.map((cl)=> (
              <li className="mb-2" key={cl.id}>
                <div>
                  <FaGoogle />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Name: <span>{cl.name}</span></span>
                  <span className="font-bold">$ {cl.amount}</span>
                </div>
                <div className="flex justify-between">
                <span className="text-sm">Client Status: <span className={ cl.status==="Active" ? "text-green-500" : "text-red-500"}>{cl.status}</span></span>
                <span className="text-sm">Outstanding Balance</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Clients Geography Section */}
        <div className="col-span-7 bg-white border p-4 rounded-md shadow">
          <h2 className="text-lg font-bold mb-4">Clients Geography</h2>
          <div className="map-container">
            <ComposableMap projectionConfig={{ scale: 150 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: { fill: "#D6D6DA", outline: "none" },
                        hover: { fill: "#F53", outline: "none" },
                        pressed: { fill: "#E42", outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
      </div>

    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App