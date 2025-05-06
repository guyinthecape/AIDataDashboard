import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";

// Dashboard as a standalone page without the main site header/footer
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentPercentage, setCurrentPercentage] = useState(60);
  const [usageData, setUsageData] = useState([
    { month: "Jan", amount: 40 },
    { month: "Feb", amount: 65 },
    { month: "Mar", amount: 55 },
    { month: "Apr", amount: 85 },
    { month: "May", amount: 75 }
  ]);
  const [notifications, setNotifications] = useState(3);
  const [liveMetric, setLiveMetric] = useState(12000);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [recentActivity, setRecentActivity] = useState([
    { action: "Downloaded", item: "Financial Services NLP Dataset", time: "2 hours ago" },
    { action: "Uploaded", item: "Healthcare Sentiment Labels", time: "1 day ago" },
    { action: "Ordered", item: "Retail Customer Reviews Dataset", time: "3 days ago" },
    { action: "Renewed", item: "Enterprise subscription", time: "1 week ago" }
  ]);

  // Simulate live updates
  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate random data changes every 5 seconds
    const dataInterval = setInterval(() => {
      // Random fluctuation for usage percentage
      setCurrentPercentage(prev => {
        const newVal = prev + (Math.random() > 0.5 ? 1 : -1);
        return Math.min(Math.max(newVal, 30), 85); // Keep between 30% and 85%
      });

      // Random fluctuation in the data points metric
      setLiveMetric(prev => {
        return prev + Math.floor(Math.random() * 200) - 100;
      });

      // Occasionally add a new activity
      if (Math.random() > 0.8) {
        const activities = [
          { action: "Analyzed", item: "Customer feedback dataset", time: "just now" },
          { action: "Updated", item: "Product categorization labels", time: "just now" },
          { action: "Processed", item: "New data batch", time: "just now" },
          { action: "Received", item: "Compliance update notification", time: "just now" }
        ];
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        setRecentActivity(prev => [randomActivity, ...prev.slice(0, 3)]);
      }

      // Occasionally add a notification
      if (Math.random() > 0.85) {
        setNotifications(prev => prev + 1);
      }
    }, 5000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(dataInterval);
    };
  }, []);

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

  // Status colors mapping with updated colors
  const statusColors = {
    "Processing": "bg-blue-100 text-blue-800",
    "Completed": "bg-green-100 text-green-800",
    "QA Review": "bg-yellow-100 text-yellow-800"
  };

  // Dataset statistics
  const datasetStats = [
    { label: "Total Datasets", value: 8, icon: "fa-database", change: "+3 this month" },
    { label: "Training Points", value: `${(liveMetric/1000).toFixed(1)}K`, icon: "fa-chart-line", change: "+150K this month" },
    { label: "Active Models", value: 5, icon: "fa-brain", change: "+1 this month" }
  ];

  // Formatted current time
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  }).format(currentTime);

  // Format date for dashboard
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(currentTime);

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold text-charcoal">Dashboard Overview</h1>
                <p className="text-charcoal">Welcome back, Vatsal! Here's the current status of your AI training data.</p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-end">
                <p className="text-sm text-charcoal font-medium">{formattedDate}</p>
                <p className="text-2xl font-bold text-bright-orange">{formattedTime}</p>
              </div>
            </div>
            
            {/* Live Status Banner */}
            <div className="bg-warm-cream rounded-md p-4 mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-success-green animate-pulse mr-3"></div>
                <p className="text-charcoal font-medium">System Status: <span className="text-success-green">Operational</span></p>
              </div>
              <div className="text-charcoal">
                <span className="inline-flex items-center bg-white px-2.5 py-1 rounded-full text-xs font-medium">
                  <span className="h-2 w-2 rounded-full bg-bright-orange animate-pulse mr-1.5"></span>
                  Live Data
                </span>
              </div>
            </div>
            
            {/* Dataset Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {datasetStats.map((stat, index) => (
                <Card key={index} className="bg-white p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-charcoal text-sm">{stat.label}</p>
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
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-charcoal">Monthly Dataset Usage</h3>
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Live Updates</span>
                </div>
                <div className="h-64 w-full">
                  <svg width="100%" height="100%" viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
                    {/* X and Y Axis */}
                    <line x1="50" y1="200" x2="550" y2="200" stroke="#E5E7EB" strokeWidth="2"/>
                    <line x1="50" y1="50" x2="50" y2="200" stroke="#E5E7EB" strokeWidth="2"/>
                    
                    {/* Bars */}
                    {usageData.map((data, i) => {
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
                            fill={i === usageData.length - 1 ? "#FDBA74" : "#FFE8CC"} 
                            rx="4"
                          />
                          <rect 
                            x={x} 
                            y={y} 
                            width={barWidth} 
                            height="10" 
                            fill={i === usageData.length - 1 ? "#F97316" : "#D97706"}
                            rx="4"
                          />
                          <text 
                            x={x + barWidth/2} 
                            y="220" 
                            textAnchor="middle" 
                            fill="#1F2937"
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

                    {/* Flashing indicator on most recent bar */}
                    <circle 
                      cx={75 + ((usageData.length - 1) * 100) + 25} 
                      cy={200 - (usageData[usageData.length - 1].amount * 1.5) - 20} 
                      r="4" 
                      fill="#F97316"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </Card>
              
              <Card className="bg-white p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-charcoal">Recent Activity</h3>
                  <span className="text-xs text-gray-500 animate-pulse">Live</span>
                </div>
                <div className="space-y-4 max-h-[250px] overflow-y-auto">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="h-8 w-8 rounded-full bg-warm-cream flex items-center justify-center mt-1">
                        <i className="fas fa-history text-bright-orange text-sm"></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          {activity.action} <span className="text-bright-orange">{activity.item}</span>
                        </p>
                        <p className="text-xs text-charcoal">{activity.time}</p>
                      </div>
                      {activity.time === "just now" && (
                        <span className="h-2 w-2 rounded-full bg-bright-orange animate-pulse mt-2"></span>
                      )}
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
                    <p className="text-charcoal text-sm">DataForge Orders</p>
                    <h2 className="text-2xl font-semibold text-charcoal mt-1">3 Active</h2>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[#FFF0E5] flex items-center justify-center shadow-sm">
                    <i className="fas fa-hammer text-deep-orange"></i>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-charcoal">Progress</span>
                    <span className="font-medium text-charcoal">{currentPercentage}%</span>
                  </div>
                  <Progress value={currentPercentage} className="h-2 bg-gray-100" indicatorClassName="bg-bright-orange" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-success-green font-medium">On Schedule</span>
                  <span className="mx-2 text-charcoal">•</span>
                  <span className="text-charcoal">Next delivery: 2 days</span>
                </div>
              </Card>
              
              {/* Dataset Usage */}
              <Card className="bg-white p-6 border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-charcoal text-sm">Dataset Usage</p>
                    <h2 className="text-2xl font-semibold text-charcoal mt-1">{liveMetric.toLocaleString()} Points</h2>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[#FFE8CC] flex items-center justify-center shadow-sm">
                    <i className="fas fa-database text-[#D97706]"></i>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-charcoal">Monthly quota</span>
                    <span className="font-medium text-charcoal">{Math.round(liveMetric / 200)}%</span>
                  </div>
                  <Progress value={Math.round(liveMetric / 200)} className="h-2 bg-gray-100" indicatorClassName="bg-[#D97706]" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-charcoal font-medium">20,000 total</span>
                  <span className="mx-2 text-charcoal">•</span>
                  <span className="text-charcoal">Renews in 18 days</span>
                </div>
              </Card>
              
              {/* Compliance Score */}
              <Card className="bg-white p-6 border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-charcoal text-sm">Compliance Score</p>
                    <h2 className="text-2xl font-semibold text-charcoal mt-1">97%</h2>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[#FEF2F2] flex items-center justify-center shadow-sm">
                    <i className="fas fa-shield-alt text-[#B91C1C]"></i>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-charcoal">Overall rating</span>
                    <span className="font-medium text-charcoal">Excellent</span>
                  </div>
                  <Progress value={97} className="h-2 bg-gray-100" indicatorClassName="bg-success-green" />
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-success-green font-medium">All checks passed</span>
                  <span className="mx-2 text-charcoal">•</span>
                  <span className="text-charcoal">Last checked: Today</span>
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
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Dataset Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Product</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Delivery</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orderData.map((order, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-charcoal">{order.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-charcoal">{order.product}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal">{order.delivery}</td>
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
            <p className="text-charcoal mb-6">Browse and manage your available datasets.</p>
            
            {/* Dataset filters */}
            <div className="bg-warm-cream p-4 rounded-lg mb-6 flex flex-wrap gap-4">
              <Button className="bg-bright-orange hover:bg-deep-orange text-white">All Datasets</Button>
              <Button variant="outline" className="border-bright-orange text-bright-orange hover:bg-warm-cream">DataForge</Button>
              <Button variant="outline" className="border-bright-orange text-bright-orange hover:bg-warm-cream">Atlas Library</Button>
              <Button variant="outline" className="border-bright-orange text-bright-orange hover:bg-warm-cream">Prism Packs</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="bg-white hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="h-2 bg-bright-orange"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-lg text-charcoal">Dataset #{item}</h4>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">Active</span>
                    </div>
                    <p className="text-charcoal mb-6">Sample dataset description with information about content and purpose.</p>
                    <div className="flex justify-between items-center text-sm text-charcoal">
                      <span>10,000 points</span>
                      <span>Updated: May 1, 2023</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">Orders History</h2>
            <p className="text-charcoal mb-6">Track all your dataset orders in one place.</p>
            
            {/* Order filters */}
            <div className="bg-warm-cream p-4 rounded-lg mb-6 flex flex-wrap gap-4">
              <Button className="bg-bright-orange hover:bg-deep-orange text-white">All Orders</Button>
              <Button variant="outline" className="border-bright-orange text-bright-orange hover:bg-warm-cream">Processing</Button>
              <Button variant="outline" className="border-bright-orange text-bright-orange hover:bg-warm-cream">Completed</Button>
              <Button variant="outline" className="border-bright-orange text-bright-orange hover:bg-warm-cream">Cancelled</Button>
            </div>
            
            <Card className="bg-white border border-gray-100 overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Order ID</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Dataset</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <tr key={item} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-charcoal">ORD-2023-{1000 + item}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-charcoal">Custom Financial Dataset</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-charcoal">May {item}, 2023</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal">$4,000.00</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-bright-orange hover:text-deep-orange">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        );
      case "compliance":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">Compliance Center</h2>
            <p className="text-charcoal mb-6">Monitor and maintain regulatory compliance for all your datasets.</p>
            
            {/* Compliance score card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-charcoal">Overall Compliance Score</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">Excellent</span>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-charcoal font-medium">97% Compliant</span>
                  <span className="text-charcoal">Updated: Today at 9:42 AM</span>
                </div>
                <Progress value={97} className="h-3 bg-gray-100" indicatorClassName="bg-success-green" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-warm-cream p-4 rounded-lg">
                  <h4 className="font-medium text-charcoal mb-1">GDPR Compliance</h4>
                  <Progress value={100} className="h-2 bg-white" indicatorClassName="bg-success-green" />
                  <p className="text-sm text-charcoal mt-2">All requirements met</p>
                </div>
                
                <div className="bg-warm-cream p-4 rounded-lg">
                  <h4 className="font-medium text-charcoal mb-1">CCPA Compliance</h4>
                  <Progress value={95} className="h-2 bg-white" indicatorClassName="bg-bright-orange" />
                  <p className="text-sm text-charcoal mt-2">1 issue needs attention</p>
                </div>
                
                <div className="bg-warm-cream p-4 rounded-lg">
                  <h4 className="font-medium text-charcoal mb-1">Data Protection</h4>
                  <Progress value={98} className="h-2 bg-white" indicatorClassName="bg-success-green" />
                  <p className="text-sm text-charcoal mt-2">All security measures in place</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white p-6 border border-gray-100">
                <h3 className="font-semibold text-charcoal mb-4">Recent Compliance Audits</h3>
                <ul className="divide-y divide-gray-100">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="py-3">
                      <div className="flex justify-between">
                        <span className="text-charcoal font-medium">Quarterly Data Audit</span>
                        <span className="text-charcoal">Apr {10 + item}, 2023</span>
                      </div>
                      <p className="text-sm text-charcoal">Passed with 98% compliance score</p>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <Card className="bg-white p-6 border border-gray-100">
                <h3 className="font-semibold text-charcoal mb-4">Compliance Documentation</h3>
                <ul className="divide-y divide-gray-100">
                  {['Data Processing Agreement', 'Privacy Policy', 'GDPR Certification', 'Data Retention Policy'].map((item, i) => (
                    <li key={i} className="py-3 flex justify-between items-center">
                      <span className="text-charcoal">{item}</span>
                      <button className="text-bright-orange hover:text-deep-orange font-medium text-sm">Download</button>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        );
      case "billing":
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-charcoal mb-6">Billing & Subscription</h2>
            <p className="text-charcoal mb-6">Manage your plan, view invoices, and update payment information.</p>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="font-semibold text-xl text-charcoal">Current Plan: Enterprise</h3>
                  <p className="text-charcoal">Your subscription renews on June 15, 2023</p>
                </div>
                <Button className="mt-4 md:mt-0 bg-bright-orange hover:bg-deep-orange text-white">Manage Subscription</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-warm-cream rounded-lg p-4">
                  <p className="text-sm text-charcoal mb-1">Monthly Fee</p>
                  <p className="text-2xl font-bold text-charcoal">$4,000.00</p>
                </div>
                
                <div className="bg-warm-cream rounded-lg p-4">
                  <p className="text-sm text-charcoal mb-1">Next Invoice</p>
                  <p className="text-2xl font-bold text-charcoal">June 15, 2023</p>
                </div>
                
                <div className="bg-warm-cream rounded-lg p-4">
                  <p className="text-sm text-charcoal mb-1">Payment Method</p>
                  <p className="text-lg font-medium text-charcoal flex items-center">
                    <i className="fas fa-credit-card mr-2 text-bright-orange"></i>
                    Visa ending in 4242
                  </p>
                </div>
              </div>
            </div>
            
            <Card className="bg-white border border-gray-100 overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="font-semibold text-charcoal">Recent Invoices</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Invoice #</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-charcoal uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[0, 1, 2, 3, 4].map((offset) => {
                      const invoiceDate = new Date();
                      invoiceDate.setMonth(invoiceDate.getMonth() - offset);
                      const formattedDate = invoiceDate.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      });

                      return (
                        <tr key={offset} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-charcoal">INV-{invoiceDate.getFullYear()}-{1000 + offset}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-charcoal">{formattedDate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal">$4,000.00</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Paid
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-bright-orange hover:text-deep-orange">Download PDF</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Top app bar for dashboard */}
      <header className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-6 group">
              <div className="h-10 w-10 rounded-full bg-bright-orange flex items-center justify-center mr-2 transform transition-transform duration-300 group-hover:scale-110">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <div className="text-xl font-poppins font-bold transform transition-transform duration-300 group-hover:translate-x-1">
                Specifi<span className="text-bright-orange">AI</span>
                <span className="text-xs bg-warm-cream text-charcoal px-2 py-0.5 rounded ml-2">Dashboard</span>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link href="/" className="text-charcoal hover:text-bright-orange px-3 py-1 rounded-md hover:bg-warm-cream transition duration-200">
              <i className="fas fa-home mr-1"></i> Home
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)} 
                className="text-charcoal hover:text-bright-orange transition duration-150 relative h-10 w-10 rounded-full flex items-center justify-center hover:bg-warm-cream"
              >
                <i className="far fa-bell text-xl"></i>
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-bright-orange text-xs text-white flex items-center justify-center">{notifications}</span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200 animate-in fade-in slide-in-from-top-5 duration-300">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-charcoal">Notifications</h3>
                      <span className="text-xs px-2 py-1 bg-warm-cream text-charcoal rounded-full">{notifications} new</span>
                    </div>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-warm-cream border-l-4 border-bright-orange">
                      <p className="text-sm font-medium text-charcoal">New dataset available</p>
                      <p className="text-xs text-charcoal mt-1">Financial Services NLP Dataset is ready for download</p>
                      <p className="text-xs text-bright-orange mt-1">5 minutes ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-warm-cream border-l-4 border-bright-orange">
                      <p className="text-sm font-medium text-charcoal">System Maintenance</p>
                      <p className="text-xs text-charcoal mt-1">Scheduled maintenance on May 15th at 2:00 AM UTC</p>
                      <p className="text-xs text-bright-orange mt-1">2 hours ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-warm-cream">
                      <p className="text-sm font-medium text-charcoal">Order Completed</p>
                      <p className="text-xs text-charcoal mt-1">Your order #1245 has been completed</p>
                      <p className="text-xs text-bright-orange mt-1">Yesterday</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <button className="text-xs text-bright-orange hover:text-deep-orange w-full text-center">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center text-charcoal hover:text-bright-orange transition duration-150 focus:outline-none hover:bg-warm-cream rounded-full pl-2 pr-3 py-1"
              >
                <div className="h-8 w-8 rounded-full bg-light-orange overflow-hidden flex items-center justify-center">
                  <i className="fas fa-user-alt text-bright-orange"></i>
                </div>
                <span className="ml-2 font-medium hidden sm:block">Vatsal Patel</span>
                <i className="fas fa-chevron-down text-xs ml-1 hidden sm:block"></i>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200 animate-in fade-in slide-in-from-top-5 duration-300">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-charcoal">Vatsal Patel</p>
                    <p className="text-xs text-charcoal">CEO & Founder</p>
                  </div>
                  <div className="py-1">
                    <button className="px-4 py-2 text-sm text-charcoal hover:bg-warm-cream w-full text-left flex items-center">
                      <i className="fas fa-user-circle mr-2 text-bright-orange"></i> Profile
                    </button>
                    <button className="px-4 py-2 text-sm text-charcoal hover:bg-warm-cream w-full text-left flex items-center">
                      <i className="fas fa-cog mr-2 text-bright-orange"></i> Settings
                    </button>
                    <button className="px-4 py-2 text-sm text-charcoal hover:bg-warm-cream w-full text-left flex items-center">
                      <i className="fas fa-key mr-2 text-bright-orange"></i> API Keys
                    </button>
                  </div>
                  <div className="py-1 border-t border-gray-100">
                    <Link href="/" className="px-4 py-2 text-sm text-charcoal hover:bg-warm-cream w-full text-left flex items-center">
                      <i className="fas fa-sign-out-alt mr-2 text-bright-orange"></i> Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <div className="pt-16 flex h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-charcoal fixed left-0 top-16 bottom-0 overflow-y-auto hidden md:block">
          <div className="p-6">            
            <nav>
              <h3 className="text-white font-medium text-xs uppercase tracking-wider mb-3">Main Navigation</h3>
              <ul className="space-y-1">
                {sidebarItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`flex items-center w-full py-2.5 px-4 rounded-md ${
                        activeTab === item.id
                          ? "bg-bright-orange text-white font-medium"
                          : "text-white hover:bg-white/10 hover:text-white"
                      } transition-all duration-200 hover:translate-x-1`}
                    >
                      <i className={`fas ${item.icon} mr-3 text-lg ${activeTab === item.id ? 'text-white' : 'text-bright-orange'}`}></i>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-white font-medium text-xs uppercase tracking-wider mt-6 mb-3">Support</h3>
              <ul className="space-y-1">
                <li>
                  <button className="flex items-center w-full py-2.5 px-4 rounded-md text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">
                    <i className="fas fa-question-circle mr-3 text-lg text-bright-orange"></i>
                    <span>Help Center</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center w-full py-2.5 px-4 rounded-md text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">
                    <i className="fas fa-book mr-3 text-lg text-bright-orange"></i>
                    <span>Documentation</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center w-full py-2.5 px-4 rounded-md text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">
                    <i className="fas fa-headset mr-3 text-lg text-bright-orange"></i>
                    <span>Contact Support</span>
                  </button>
                </li>
              </ul>
            </nav>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between text-white text-sm mb-2">
                  <span>System Status</span>
                  <span className="flex items-center text-success-green">
                    <span className="h-2 w-2 rounded-full bg-success-green mr-1 animate-pulse"></span>
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between text-white text-sm">
                  <span>Storage Usage</span>
                  <span>68%</span>
                </div>
                <div className="mt-1 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-bright-orange rounded-full transition-all duration-1000" 
                    style={{ width: '68%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Mobile Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-charcoal text-white md:hidden z-10 px-1 py-3 border-t border-gray-700">
          <div className="flex justify-around">
            {sidebarItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center ${
                  activeTab === item.id ? "text-bright-orange" : "text-white"
                }`}
              >
                <i className={`fas ${item.icon} text-lg`}></i>
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Main Dashboard Content */}
        <main className="flex-1 ml-0 md:ml-64 p-6 pb-20 md:pb-6 bg-[#F8F9FA] min-h-full">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
