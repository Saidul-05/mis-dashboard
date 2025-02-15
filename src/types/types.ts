export type ModuleName = 
  | 'dashboard'
  | 'emergency'
  | 'users'
  | 'ai'
  | 'analytics'
  | 'marketplace'
  | 'payments'
  | 'security'
  | 'vendors'
  | 'wallet'
  | 'settings';

export interface Notification {
  id: string;
  type: 'alert' | 'update' | 'emergency';
  message: string;
  read: boolean;
  timestamp: Date;
}

export interface Emergency {
  id: string;
  type: 'Breakdown' | 'Accident' | 'Medical';
  status: 'Active' | 'Resolved' | 'Pending';
  location: {
    lat: number;
    lng: number;
  };
  eta: string;
  user: string;
  time: string;
}

export type WebSocketMessage = 
  | { type: 'EMERGENCY_UPDATE'; payload: Emergency }
  | { type: 'NOTIFICATION'; payload: Notification }
  | { type: 'STATS_UPDATE'; payload: DashboardStats };

interface DashboardStats {
  totalUsers: number;
  activeEmergencies: number;
  revenue: number;
}
