import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { WebSocketProvider } from './contexts/WebsocketContext';
import MISSystem from './components/MISSystem';
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
