// src/App.tsx
import React from 'react';
import MISSystem from './components/MISSystem/MISSystem'; // Correct path
import { AppProvider } from './contexts/AppContext';
import { WebSocketProvider } from './contexts/WebsocketContext';
import ErrorBoundary from './components/common/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <WebSocketProvider>
        <AppProvider>
          <MISSystem />
        </AppProvider>
      </WebSocketProvider>
    </ErrorBoundary>
  );
};

export default App;
