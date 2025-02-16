// src/modules/Dashboard/DashboardModule.tsx
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, XAxis, YAxis, CartesianGrid } from 'recharts';
import { DollarSign, Users, Activity, TrendingUp } from 'lucide-react';

// Mock data
const revenueData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 6000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 7000 },
];

const userGrowthData = [
  { name: 'Q1', users: 4000 },
  { name: 'Q2', users: 3000 },
  { name: 'Q3', users: 6000 },
  { name: 'Q4', users: 4500 },
];

const revenueDistribution = [
  { name: 'Products', value: 4000 },
  { name: 'Services', value: 3000 },
  { name: 'Subscriptions', value: 2400 },
];

const COLORS = ['#2563eb', '#3b82f6', '#60a5fa'];

const StatCard = ({ icon, title, value, trend }: { icon: React.ReactNode, title: string, value: string, trend: 'up' | 'down' }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
        {icon}
      </div>
    </div>
  </div>
);

const DashboardModule = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<DollarSign className="text-green-500" />}
          title="Total Revenue"
          value="$45,231"
          trend="up"
        />
        <StatCard
          icon={<Users className="text-blue-500" />}
          title="Active Users"
          value="2,342"
          trend="up"
        />
        <StatCard
          icon={<Activity className="text-purple-500" />}
          title="System Health"
          value="98.5%"
          trend="up"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Revenue Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">User Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Distribution Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Revenue Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {revenueDistribution.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardModule;
