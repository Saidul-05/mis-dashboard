// src/App.tsx
import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { WebSocketProvider } from './contexts/WebsocketContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import MISSystem from './components/MISSystem/MISSystem';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <WebSocketProvider>
        <AppProvider>
          <div className="h-screen w-screen">
            <MISSystem />
          </div>
        </AppProvider>
      </WebSocketProvider>
    </ErrorBoundary>
  );
};

export default App;
