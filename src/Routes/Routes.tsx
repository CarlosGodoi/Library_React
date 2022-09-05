import React from 'react';
import AddBook from '../Pages/AddBook';
import EditBook from '../Pages/EditBook';
import Home from '../Pages/Home';
import Library from '../Pages/Library';
import LoanHistory from '../Pages/LoanHistory';
import Login from '../Pages/Login';

export const routes = [
  {
    path: '/',
    element: <Login />,
    private: false,
  },
  {
    path: '/home',
    element: <Home />,
    private: true,
  },
  {
    path: '/cadastrarLivro',
    element: <AddBook />,
    private: true,
  },
  {
    path: '/biblioteca',
    element: <Library />,
    private: true,
  },
  {
    path: '/historicoEmprestimo',
    element: <LoanHistory />,
    private: true,
  },
  {
    path: '/editarLivro',
    element: <EditBook />,
    private: true,
  },
];
