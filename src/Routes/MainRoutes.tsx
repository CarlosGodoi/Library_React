import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from '../Components/Context/UserContext';
import Header from '../Components/Header';
import { routes } from './Routes';

const MainRoutes = () => {
  function RouteVerification({ element }: any) {
    const {
      user: { email },
    } = useAuth();

    const logged = Boolean(email);
    return logged ? (
      <>
        <Header />
        {element}
      </>
    ) : (
      <h1>Acesso Negado</h1>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.private ? (
                <RouteVerification element={route.element} />
              ) : (
                route.element
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
