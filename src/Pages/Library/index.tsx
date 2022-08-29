import React from 'react';
import Header from '../../Components/Header';
import {
  ContainerBg,
  ContainerBooks,
  ContainerMain,
  SearchBooks,
} from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Library = () => {
  const navigate = useNavigate();
  return (
    <ContainerBg>
      <Header />
      <ContainerMain>
        <div className="back-home" onClick={() => navigate('/home')}>
          <ArrowBackIosIcon fontSize="small" />
          <p>Home</p>
          <h3>/Biblioteca</h3>
        </div>

        <SearchBooks>
          <div className="container">
            <form className="input-search">
              <input type="text" placeholder="Pesquisar livro..." />
              <button>Buscar</button>
            </form>
            <div className="select-search">
              <Select
                labelId="options"
                id="options"
                value=""
                label=""
                fullWidth
                size="small"
              >
                <MenuItem disabled>Selecione</MenuItem>
                <MenuItem>Gênero</MenuItem>
                <MenuItem>Author</MenuItem>
                <MenuItem>Data de entrada</MenuItem>
                <MenuItem> Sinopse</MenuItem>
              </Select>
            </div>
          </div>
          <ContainerBooks></ContainerBooks>
        </SearchBooks>
      </ContainerMain>
    </ContainerBg>
  );
};

export default Library;
