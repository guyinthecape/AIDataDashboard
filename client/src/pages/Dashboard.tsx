import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const sidebarItems = [
    { id: "overview", icon: "fa-chart-pie", label: "Overview" },
    { id: "datasets", icon: "fa-database", label: "Datasets" },
    { id: "orders", icon: "fa-shopping-cart", label: "Orders" },
    { id: "compliance", icon: "fa-shield-alt", label: "Compliance" },
    { id: "billing", icon: "fa-credit-card", label: "Billing" },
  ];

  const orderData = [
    {
      name: "EcomSentiment-GenZ",
      product: "DataForge",
      status: "Processing",
      delivery: "2 days",
      action: "Download"
    },
    {
      name: "HealthcareTerms-v2",
      product: "Atlas Library",
      status: "Completed",
      delivery: "Available",
      action: "Download"
    },
    {
      name: "FinTech-Queries",
      product: "Prism Packs",
      status: "QA Review",
      delivery: "5 days",
      action: "View Details"
    }
  ];

  // Status colors mapping
  const statusColors = {
    "Processing": "bg-blue-100 text-blue-800",
    "Completed": "bg-green-100 text-green-800",
    "QA Review": "bg-yellow-100 text-yellow-800"
  };

  return (
    <section className="py-12 bg-off-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex">
            {/* Sidebar Navigation */}
            <div className="hidden md:block bg-midnight-indigo text-white w-64 p-6">
              <div className="mb-8">
                <div className="text-xl font-poppins font-bold">
                  Specifi<span className="text-specifi-purple">AI</span>
                </div>
                <div className="text-xs text-gray-400">Dashboard</div>
              </div>
              
              <nav>
                <ul className="space-y-2">
                  {sidebarItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center w-full py-2 px-4 rounded-md ${
                          activeTab === item.id
                            ? "bg-specifi-purple bg-opacity-20 text-white font-medium"
                            : "text-gray-300 hover:bg-specifi-purple hover:bg-opacity-10"
                        } transition duration-150`}
                      >
                        <i className={`fas ${item.icon} mr-3`}></i>
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="mt-auto pt-16">
                <div className="py-4 border-t border-indigo-900">
                  <button className="flex items-center text-gray-300 hover:text-white transition duration-150">
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Main Dashboard Content */}
            <div className="flex-1">
              {/* Top Navigation */}
              <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                {/* Mobile menu button */}
                <button className="md:hidden text-midnight-indigo hover:text-specifi-purple">
                  <i className="fas fa-bars text-xl"></i>
                </button>
                
                <div className="md:hidden text-xl font-poppins font-bold">
                  Specifi<span className="text-specifi-purple">AI</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-specifi-purple transition duration-150">
                    <i className="far fa-bell text-xl"></i>
                  </button>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-soft-lilac overflow-hidden flex items-center justify-center">
                      <i className="fas fa-user text-specifi-purple"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6">
                <div className="mb-8">
                  <h1 className="text-2xl font-semibold text-midnight-indigo">Dashboard Overview</h1>
                  <p className="text-gray-500">Welcome back! Here's the current status of your AI training data.</p>
                </div>
                
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* DataForge Orders */}
                  <Card className="bg-white p-6 border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm">DataForge Orders</p>
                        <h2 className="text-2xl font-semibold text-midnight-indigo mt-1">3 Active</h2>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-soft-lilac flex items-center justify-center">
                        <i className="fas fa-hammer text-specifi-purple"></i>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-success-green font-medium">On Schedule</span>
                      <span className="mx-2">•</span>
                      <span>Next delivery: 2 days</span>
                    </div>
                  </Card>
                  
                  {/* Dataset Usage */}
                  <Card className="bg-white p-6 border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm">Dataset Usage</p>
                        <h2 className="text-2xl font-semibold text-midnight-indigo mt-1">12,000 Points</h2>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-soft-lilac flex items-center justify-center">
                        <i className="fas fa-database text-specifi-purple"></i>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-midnight-indigo font-medium">60% of plan</span>
                      <span className="mx-2">•</span>
                      <span>Renews in 18 days</span>
                    </div>
                  </Card>
                  
                  {/* Compliance Score */}
                  <Card className="bg-white p-6 border border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm">Compliance Score</p>
                        <h2 className="text-2xl font-semibold text-midnight-indigo mt-1">97%</h2>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-soft-lilac flex items-center justify-center">
                        <i className="fas fa-shield-alt text-specifi-purple"></i>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                      <span className="text-success-green font-medium">Excellent</span>
                      <span className="mx-2">•</span>
                      <span>Last checked: Today</span>
                    </div>
                  </Card>
                </div>
                
                {/* Recent Orders Table */}
                <Card className="bg-white border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-100">
                    <h3 className="font-semibold text-midnight-indigo">Recent Orders</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dataset Name</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orderData.map((order, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-midnight-indigo">{order.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{order.product}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.delivery}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="#" className="text-specifi-purple hover:text-midnight-indigo">{order.action}</a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
