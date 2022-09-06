import React from 'react';
import ReactDOM from 'react-dom/client';
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
        <MainRoutes />
      </MessageProvider>
    </UserProvider>
  </React.StrictMode>,
);
