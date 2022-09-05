import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './Components/Context/UserContext';
import './index.css';
import MainRoutes from './Routes/MainRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <MainRoutes />
    </UserProvider>
  </React.StrictMode>,
);
