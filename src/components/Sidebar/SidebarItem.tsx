import React from 'react';
import { X, Menu } from 'lucide-react';
import SidebarItem from './SidebarItem';
import SidebarCategory from './SidebarCategory';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const Sidebar = ({ 
  isOpen, 
  setIsOpen,
  activeModule,
  setActiveModule
}: SidebarProps) => {
  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
      <div className="flex items-center justify-between p-4 border-b">
        {isOpen && <h1 className="font-bold text-xl">MIS Dashboard</h1>}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 rounded hover:bg-gray-100"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      <nav className="p-4 space-y-2">
        <SidebarCategory title="Core Features" collapsed={!isOpen}>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active={activeModule === 'dashboard'}
            onClick={() => setActiveModule('dashboard')}
            collapsed={!isOpen}
          />
        </SidebarCategory>
      </nav>
    </div>
  );
};

export default Sidebar;
