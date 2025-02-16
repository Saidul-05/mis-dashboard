import React from 'react';
import { ModuleName } from '@/types/types';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  collapsed: boolean;
  onClick: (module: ModuleName) => void;
  module: ModuleName;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  collapsed,
  onClick,
  module
}) => (
  <button
    onClick={() => onClick(module)}
    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
      active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
    }`}
  >
    <span className="shrink-0">{icon}</span>
    {!collapsed && <span className="text-sm font-medium">{label}</span>}
  </button>
);

export default SidebarItem;
