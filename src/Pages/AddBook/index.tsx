import React from 'react';
import Header from '../../Components/Header';
import { ContainerBg, ContainerForm, ContainerMain } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const AddBook = () => {
  return (
    <ContainerBg>
      <Header />
      <ContainerMain>
        <div className="back-home">
          <ArrowBackIosIcon fontSize="small" />
          <p>Home</p>
          <h3>/Cadastrar novo Livro</h3>
        </div>

        <ContainerForm>
          <div className="form"></div>
        </ContainerForm>
      </ContainerMain>
    </ContainerBg>
  );
};

export default AddBook;
