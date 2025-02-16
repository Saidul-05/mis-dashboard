// src/components/MISSystem/MISSystem.tsx
import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, Brain, LineChart, Store, Wallet, Shield,
  Settings, Bell, Search, Menu, X, ChevronDown, MessageSquare,
  AlertTriangle, Car, Tool, CreditCard, Map as MapIcon, Activity, Box,
  BarChart, PieChart, TrendingUp, Lock, UserPlus, BellRing
} from 'lucide-react';
import SidebarItem from '../Sidebar/SidebarItem'; // Fixed import
import Header from '../../components/Header/Header'; // Corrected path
import DashboardModule from '../../modules/Dashboard/DashboardModule';
import EmergencyModule from '../../modules/Emergency/EmergencyModule';

const MISSystem = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState('dashboard');
  const [notifications] = useState([
    { id: 1, type: 'alert', message: 'New vendor registration pending approval' },
    { id: 2, type: 'update', message: 'System maintenance scheduled for tonight' },
    { id: 3, type: 'emergency', message: 'Emergency assistance requested in Downtown' }
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-width duration-300 bg-white shadow-lg`}>
        <SidebarItem 
          isOpen={sidebarOpen} 
          setIsOpen={setSidebarOpen}
          activeModule={activeModule}
          setActiveModule={setActiveModule}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header notifications={notifications} />
        
        <main className="p-6">
          {activeModule === 'dashboard' && <DashboardModule />}
          {activeModule === 'emergency' && <EmergencyModule />}
          {/* Add other modules here */}
        </main>
      </div>
    </div>
  );
};

export default MISSystem;
