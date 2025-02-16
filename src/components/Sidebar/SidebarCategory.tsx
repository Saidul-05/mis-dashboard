import React from 'react';

interface SidebarCategoryProps {
  title: string;
  collapsed: boolean;
  children: React.ReactNode;
}

const SidebarCategory: React.FC<SidebarCategoryProps> = ({
  title,
  collapsed,
  children
}) => (
  <div className="mb-4">
    {!collapsed && (
      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">
        {title}
      </h3>
    )}
    <div className="space-y-1">{children}</div>
  </div>
);

export default SidebarCategory;
