import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";

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

  // Dataset statistics
  const datasetStats = [
    { label: "Total Datasets", value: 8, icon: "fa-database", change: "+3 this month" },
    { label: "Training Points", value: "1.2M", icon: "fa-chart-line", change: "+150K this month" },
    { label: "Active Models", value: 5, icon: "fa-brain", change: "+1 this month" }
  ];

  // Recent activity
  const recentActivity = [
    { action: "Downloaded", item: "HealthcareTerms-v2", time: "2 hours ago" },
    { action: "Uploaded", item: "Custom annotations", time: "1 day ago" },
    { action: "Ordered", item: "FinTech-Queries dataset", time: "3 days ago" },
    { action: "Renewed", item: "Enterprise subscription", time: "1 week ago" }
  ];

  // Usage data for chart
  const monthlyUsage = [
    { month: "Jan", amount: 40 },
    { month: "Feb", amount: 65 },
    { month: "Mar", amount: 55 },
    { month: "Apr", amount: 85 },
    { month: "May", amount: 75 }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-charcoal">Dashboard Overview</h1>
              <p className="text-gray-500">Welcome back, Sarah! Here's the current status of your AI training data.</p>
            </div>
            
            {/* Dataset Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {datasetStats.map((stat, index) => (
                <Card key={index} className="bg-white p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                      <h2 className="text-2xl font-semibold text-charcoal mt-1">{stat.value}</h2>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-light-orange flex items-center justify-center">
                      <i className={`fas ${stat.icon} text-bright-orange`}></i>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm">
                    <span className="text-bright-orange font-medium">{stat.change}</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Usage Graph + Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="lg:col-span-2 bg-white p-6 border border-gray-100">
                <h3 className="font-semibold text-charcoal mb-4">Monthly Dataset Usage</h3>
                <div className="h-64 w-full">
                  <svg width="100%" height="100%" viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
                    {/* X and Y Axis */}
                    <line x1="50" y1="200" x2="550" y2="200" stroke="#E5E7EB" strokeWidth="2"/>
                    <line x1="50" y1="50" x2="50" y2="200" stroke="#E5E7EB" strokeWidth="2"/>
                    
                    {/* Bars */}
                    {monthlyUsage.map((data, i) => {
                      const barWidth = 50;
                      const spacing = 100;
                      const x = 75 + (i * spacing);
                      const height = data.amount * 1.5;
                      const y = 200 - height;
                      
                      return (
                        <g key={i}>
                          <rect 
                            x={x} 
                            y={y} 
                            width={barWidth} 
                            height={height} 
                            fill="#FDBA74"
                            rx="4"
                          />
                          <rect 
                            x={x} 
                            y={y} 
                            width={barWidth} 
                            height="10" 
                            fill="#F97316"
                            rx="4"
                          />
                          <text 
                            x={x + barWidth/2} 
                            y="220" 
                            textAnchor="middle" 
                            fill="#6B7280"
                            fontSize="12"
                          >
                            {data.month}
                          </text>
                          <text 
                            x={x + barWidth/2} 
                            y={y - 10} 
                            textAnchor="middle" 
                            fill="#1F2937"
                            fontSize="12"
                            fontWeight="bold"
                          >
                            {data.amount}K
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </Card>
              
              <Card className="bg-white p-6 border border-gray-100">
                <h3 className="font-semibold text-charcoal mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="h-8 w-8 rounded-full bg-warm-cream flex items-center justify-center mt-1">
                        <i className="fas fa-history text-bright-orange text-sm"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          {activity.action} <span className="text-bright-orange">{activity.item}</span>
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* DataForge Orders */}
              <Card className="bg-white p-6 border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">DataForge Orders</p>
                    <h2 className="text-2xl font-semibold text-charcoal mt-1">3 Active</h2>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-light-orange flex items-center justify-center">
                    <i className="fas fa-hammer text-bright-orange"></i>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Progress</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2 bg-gray-100" indicatorClassName="bg-bright-orange" />
                </div>
                <div className="mt-2 flex items-center text-sm">
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
                    <h2 className="text-2xl font-semibold text-charcoal mt-1">12,000 Points</h2>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-light-orange flex items-center justify-center">
                    <i className="fas fa-database text-bright-orange"></i>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Monthly quota</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2 bg-gray-100" indicatorClassName="bg-bright-orange" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-charcoal font-medium">20,000 total</span>
                  <span className="mx-2">•</span>
                  <span>Renews in 18 days</span>
                </div>
              </Card>
              
              {/* Compliance Score */}
              <Card className="bg-white p-6 border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">Compliance Score</p>
                    <h2 className="text-2xl font-semibold text-charcoal mt-1">97%</h2>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-light-orange flex items-center justify-center">
                    <i className="fas fa-shield-alt text-bright-orange"></i>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Overall rating</span>
                    <span className="font-medium">Excellent</span>
                  </div>
                  <Progress value={97} className="h-2 bg-gray-100" indicatorClassName="bg-success-green" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-success-green font-medium">All checks passed</span>
                  <span className="mx-2">•</span>
                  <span>Last checked: Today</span>
                </div>
              </Card>
            </div>
            
            {/* Recent Orders Table */}
            <Card className="bg-white border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-semibold text-charcoal">Recent Orders</h3>
                <Button variant="ghost" className="text-bright-orange hover:text-deep-orange hover:bg-warm-cream text-sm">
                  View All <i className="fas fa-arrow-right ml-2"></i>
                </Button>
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
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-charcoal">{order.name}</div>
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-bright-orange hover:text-deep-orange">{order.action}</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        );
      case "datasets":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">My Datasets</h2>
            <p className="text-gray-500 mb-6">Browse and manage your available datasets.</p>
            <Card className="bg-white p-6 mb-4 border border-gray-100">
              <div className="text-lg font-medium text-charcoal mb-2">Datasets tab content</div>
              <p className="text-gray-500">Coming soon: dataset management interface.</p>
            </Card>
          </div>
        );
      case "orders":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">Orders History</h2>
            <p className="text-gray-500 mb-6">Track all your dataset orders in one place.</p>
            <Card className="bg-white p-6 mb-4 border border-gray-100">
              <div className="text-lg font-medium text-charcoal mb-2">Orders tab content</div>
              <p className="text-gray-500">Coming soon: complete order history and tracking.</p>
            </Card>
          </div>
        );
      case "compliance":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">Compliance Center</h2>
            <p className="text-gray-500 mb-6">Monitor and maintain regulatory compliance for all your datasets.</p>
            <Card className="bg-white p-6 mb-4 border border-gray-100">
              <div className="text-lg font-medium text-charcoal mb-2">Compliance tab content</div>
              <p className="text-gray-500">Coming soon: compliance monitoring dashboard.</p>
            </Card>
          </div>
        );
      case "billing":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">Billing & Subscription</h2>
            <p className="text-gray-500 mb-6">Manage your plan, view invoices, and update payment information.</p>
            <Card className="bg-white p-6 mb-4 border border-gray-100">
              <div className="text-lg font-medium text-charcoal mb-2">Billing tab content</div>
              <p className="text-gray-500">Coming soon: subscription management interface.</p>
            </Card>
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            <div className="hidden md:block bg-charcoal text-white w-64 p-6">
              <div className="mb-8">
                <div className="text-xl font-poppins font-bold">
                  Specifi<span className="text-bright-orange">AI</span>
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
                            ? "bg-bright-orange bg-opacity-20 text-white font-medium"
                            : "text-gray-300 hover:bg-bright-orange hover:bg-opacity-10"
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
                <div className="py-4 border-t border-gray-800">
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
                <button className="md:hidden text-charcoal hover:text-bright-orange">
                  <i className="fas fa-bars text-xl"></i>
                </button>
                
                <div className="md:hidden text-xl font-poppins font-bold">
                  Specifi<span className="text-bright-orange">AI</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-bright-orange transition duration-150 relative">
                    <i className="far fa-bell text-xl"></i>
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-bright-orange text-xs text-white flex items-center justify-center">3</span>
                  </button>
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-light-orange overflow-hidden flex items-center justify-center">
                      <i className="fas fa-user text-bright-orange"></i>
                    </div>
                    <div className="hidden md:block">
                      <div className="text-sm font-medium text-charcoal">Sarah Chen</div>
                      <div className="text-xs text-gray-500">Administrator</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content - Different content based on active tab */}
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
