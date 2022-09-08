import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLoading } from '../Components/Context/LoadingContext';
import { useMessage } from '../Components/Context/MessageContext';
import { useAuth } from '../Components/Context/UserContext';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import AlertMessage from '../Components/Modals/ModalHelper';
import { routes } from './Routes';

const MainRoutes = () => {
  const { message } = useMessage();
  const { loading } = useLoading();

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
    <>
      {message.display && <AlertMessage />}
      {loading.visible && <Loading />}
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
    </>
  );
};

export default MainRoutes;
