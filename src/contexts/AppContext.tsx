import { createContext, useContext } from 'react';
import { ModuleName, Notification, Emergency } from '../types/types';

type AppContextType = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeModule: ModuleName;
  setActiveModule: (module: ModuleName) => void;
  notifications: Notification[];
  emergencies: Emergency[];
  addEmergency: (emergency: Emergency) => void;
  updateEmergency: (id: string, update: Partial<Emergency>) => void;
};

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState<ModuleName>('dashboard');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [emergencies, setEmergencies] = useState<Emergency[]>([]);

  const addEmergency = (emergency: Emergency) => {
    setEmergencies(prev => [emergency, ...prev]);
  };

  const updateEmergency = (id: string, update: Partial<Emergency>) => {
    setEmergencies(prev => 
      prev.map(emergency => 
        emergency.id === id ? { ...emergency, ...update } : emergency
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        activeModule,
        setActiveModule,
        notifications,
        emergencies,
        addEmergency,
        updateEmergency
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
