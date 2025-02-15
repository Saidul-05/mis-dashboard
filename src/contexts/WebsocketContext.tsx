import { createContext, useContext, useEffect, useRef, useCallback, useState } from 'react';
import { WebSocketMessage } from '../types/types';

type WebSocketContextType = {
  sendMessage: <T extends WebSocketMessage>(message: T) => void;
  connectionStatus: 'connected' | 'disconnected' | 'connecting';
  lastMessage: WebSocketMessage | null;
};

const WebSocketContext = createContext<WebSocketContextType>({} as WebSocketContextType);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ws = useRef<WebSocket | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<
    'connected' | 'disconnected' | 'connecting'
  >('disconnected');
  const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null);
  const reconnectAttempt = useRef(0);

  const connect = useCallback(() => {
    setConnectionStatus('connecting');
    const websocket = new WebSocket(`wss://${window.location.host}/ws`);

    websocket.onopen = () => {
      setConnectionStatus('connected');
      reconnectAttempt.current = 0;
    };

    websocket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data) as WebSocketMessage;
        setLastMessage(message);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    websocket.onclose = () => {
      setConnectionStatus('disconnected');
      const timeout = Math.min(1000 * 2 ** reconnectAttempt.current, 30000);
      setTimeout(connect, timeout);
      reconnectAttempt.current += 1;
    };

    ws.current = websocket;
  }, []);

  useEffect(() => {
    connect();
    return () => ws.current?.close();
  }, [connect]);

  const sendMessage = useCallback(<T extends WebSocketMessage>(message: T) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(message));
    }
  }, []);

  return (
    <WebSocketContext.Provider
      value={{ sendMessage, connectionStatus, lastMessage }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);
