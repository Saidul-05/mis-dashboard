// src/components/Sidebar/Sidebar.tsx
import React from 'react';
import { SidebarItem, SidebarCategory } from './';

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
      {/* Sidebar implementation */}
    </div>
  );
};

export default Sidebar; // Must have default export
