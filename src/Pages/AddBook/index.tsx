import React from 'react';
import Header from '../../Components/Header';
import { ContainerBg, ContainerForm, ContainerMain } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();

  return (
    <ContainerBg>
      <Header />
      <ContainerMain>
        <div className="back-home" onClick={() => navigate('/home')}>
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
