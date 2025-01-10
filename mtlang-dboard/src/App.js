// Import necessary libraries
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Bar, Doughnut } from "react-chartjs-2";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "tailwindcss/tailwind.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import data from './data/clients.json'
import { FaBell, FaTachometerAlt, FaUsers, FaGoogle, FaFileInvoiceDollar, FaMoneyBillWave, FaHourglassHalf, FaExclamationCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';


// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

// URL for the GeoJSON data (world map)
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const Dashboard = () => {

  const { t } = useTranslation();

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [1600, 1550, 1650, 950, 1730, 1780, 1720, 1630, 1570, 1050, 1010, 1260],
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
        data: [1200, 500, 1300],
        backgroundColor: ["#ae65ae", "#ec9f37", "#FC8181"],
        borderWidth: 2, // Add border to the bars
        borderRadius: 10, // Rounded corners for bars
      },
    ],
  };


  return (
  <div>
      <header className="flex items-center justify-between bg-white p-4 rounded-md shadow mb-4">
      <div className="flex items-center justify-start p-2 bg-white text-white">
            <button onClick={() => i18n.changeLanguage("en")} className="px-4 py-2 bg-blue-600 rounded">
              English
            </button>
            <button onClick={() => i18n.changeLanguage("fr")} className="px-4 py-2 bg-green-600 rounded">
              Français
            </button>
          </div>
        <div className="space-x-2 justify-end">
          <button> <FaBell size={24} color="purple" /> </button>
          <button> <FaUsers size={24} color="purple" /> </button>
        </div>
      </header>

    <div className="flex">
      <div className="w-36 h-screen bg-white text-grey-700 flex flex-col">
        <nav className="flex-grow">
          <ul className="space-y-4">
            <li className="flex flex-col items-center space-y-2 px-4 py-2 hover:bg-gray-700 cursor-pointer">
              <FaTachometerAlt size={24} />
              <span>{t("dashboard")}</span>
            </li>
            <li className="flex flex-col items-center space-y-2 px-4 py-2 hover:bg-gray-700 cursor-pointer">
              <FaUsers size={24} />
              <span>{t("clients")}</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Client Summary Section */}
      <div className="p-4 bg-gray-50 h-screen w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="flex p-4 bg-white rounded shadow">
            <FaUsers className="flex text-blue-500 text-2xl" />
            <div className="ml-5">
              <h2 className="text-xs font-medium">{t("totalClients")}</h2>
              <p className="text-lg font-bold text-purple-500">112</p>
            </div>
          </div>
          <div className="flex p-4 bg-white rounded shadow">
          <FaFileInvoiceDollar className="flex text-green-500 text-2xl" />  
            <div className="ml-5">
              <h2 className="text-xs font-medium">{t("totalInvoices")}</h2>
              <p className="text-lg font-bold text-purple-500">65</p>
            </div>
          </div>
          <div className="flex p-4 bg-white rounded shadow">
            <FaMoneyBillWave className="flex text-purple-500 text-2xl" />
            <div className="ml-5">
              <h2 className="text-xs font-medium">{t("totalRevenue")}</h2>
              <p className="text-lg font-bold text-purple-500">$7500</p>
            </div>
          </div>
          <div className="flex p-4 bg-white rounded shadow">
            <FaHourglassHalf className="flex text-orange-500 text-2xl" />
            <div className="ml-5">
              <h2 className="text-xs font-medium">{t("unpaid")}</h2>
              <p className="text-lg font-bold text-purple-500">$1200</p>
            </div>
          </div>
          <div className="flex p-4 bg-white rounded shadow">
            <FaExclamationCircle className="flex text-red-500 text-2xl" />
            <div className="ml-5">
              <h2 className="text-xs font-medium">{t("overdue")}</h2>
              <p className="text-lg font-bold text-purple-500">$2210</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Total Revenue Section */}
          <div className="p-4 bg-white rounded shadow">
            <div className="flex justify-between">
              <div className="">
                <h3 className="text-lg font-medium">{t("totalRevenue")}</h3>
                <h2 className="text-lg font-bold mb-2">$17500</h2>
              </div>

              <div className="flex relative inline-block">
                <button type="button" class="h-fit inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Monthly
                  <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <Bar data={barData} key="bar-chart" style={{ height: "200px", width: "200px" }}/>
          </div>

          {/* Invoice Status Section */}
          <div className="p-4 bg-white rounded shadow">
            <div className="flex justify-between">
              <h3 className="flex text-lg font-medium mb-2">{t("invoiceStatus")}</h3>
              <div className="flex relative inline-block">
                <button type="button" class="h-fit inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  All
                  <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <Doughnut data={donutData} key="doughnut-chart" style={{ height: "200px", width: "200px" }}/>
          </div>
        </div>

        {/* Bottom Section: Clients and Geography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8">
          
          {/* Clients Section */}
          <div className="col-span-5 bg-white border p-4 rounded-md shadow">
            <div className="flex justify-between">
              <h3 className="flex text-lg font-medium mb-4">Clients</h3>
              <button className="flex bg-purple-500 text-white py-2 px-4 rounded-md mb-4">
              {t("addClient")}
              </button>
            </div>
            <ul>
              { data.clients.map((cl)=> (
                <li className="mb-2" key={cl.id}>
                  <div>
                    <FaGoogle />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">{t("name")}: <span>{cl.name}</span></span>
                    <span className="font-bold">$ {cl.amount}</span>
                  </div>
                  <div className="flex justify-between">
                  <span className="text-sm">{t("clientStatus")}: <span className={ cl.status==="Active" ? "text-green-500" : "text-red-500"}>{cl.status}</span></span>
                  <span className="text-sm">{t("outBal")}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Clients Geography Section */}
          <div className="col-span-7 bg-white border p-4 rounded-md shadow">
            <h3 className="text-lg font-medium mb-4">{t("geography")}</h3>
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