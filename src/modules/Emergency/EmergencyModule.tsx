import React, { useEffect } from 'react';
import { EmergencyCard, EmergencyStatCard, QuickActionCard } from './components';
import { useAppContext, useWebSocket } from '../../contexts';
import { WebSocketMessage, Emergency } from '../../types/types';
import { ErrorBoundary } from '../../components/common/ErrorBoundary';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';

const EmergencyModule: React.FC = () => {
  const { emergencies, addEmergency, updateEmergency } = useAppContext();
  const { lastMessage } = useWebSocket();

  useEffect(() => {
    if (lastMessage?.type === 'EMERGENCY_UPDATE') {
      const existing = emergencies.find(e => e.id === lastMessage.payload.id);
      existing ? updateEmergency(lastMessage.payload.id, lastMessage.payload) 
               : addEmergency(lastMessage.payload);
    }
  }, [lastMessage]);

  return (
    <ErrorBoundary>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <EmergencyStatCard title="Active Emergencies" value={emergencies.length.toString()} />
          {/* Other stat cards */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">
              <AlertTriangle className="text-red-500 mr-2" size={20} />
              Active Emergency Requests
            </h3>
            {emergencies.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No active emergencies
              </div>
            ) : (
              <div className="space-y-4">
                {emergencies.map(emergency => (
                  <EmergencyCard key={emergency.id} emergency={emergency} />
                ))}
              </div>
            )}
          </div>
          {/* Map integration */}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default EmergencyModule;
