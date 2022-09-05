import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBook from '../Pages/AddBook';
import EditBook from '../Pages/EditBook';
import Home from '../Pages/Home';
import Library from '../Pages/Library';
import LoanHistory from '../Pages/LoanHistory';
import Login from '../Pages/Login';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrarLivro" element={<AddBook />} />
        <Route path="/biblioteca" element={<Library />} />
        <Route path="/historicoEmprestimo" element={<LoanHistory />} />
        <Route path="/editarLivro" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
