import React, { createContext, useContext, useState } from 'react';
import { ModuleName, Notification } from '@/types/types';

interface AppContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeModule: ModuleName;
  setActiveModule: (module: ModuleName) => void;
  notifications: Notification[];
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState<ModuleName>('dashboard');
  const [notifications] = useState<Notification[]>([]);

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        activeModule,
        setActiveModule,
        notifications
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
