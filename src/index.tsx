import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadingProvider } from './Components/Context/LoadingContext';
import { MessageProvider } from './Components/Context/MessageContext';
import { UserProvider } from './Components/Context/UserContext';
import './index.css';
import MainRoutes from './Routes/MainRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <MessageProvider>
        <LoadingProvider>
          <MainRoutes />
        </LoadingProvider>
      </MessageProvider>
    </UserProvider>
  </React.StrictMode>,
);
