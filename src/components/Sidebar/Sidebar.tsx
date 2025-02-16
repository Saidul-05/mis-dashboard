// src/components/Sidebar/Sidebar.tsx
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
      {/* Sidebar content */}
    </div>
  );
};

export default Sidebar; // Must have this line
