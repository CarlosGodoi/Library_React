import React from 'react';
import Header from '../../Components/Header';
import { ContainerBg, ContainerForm, ContainerMain } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
          <div className="formImage">
            <img src="" alt="" />
            <input className="customFileInput" type="file" id="image" />
          </div>

          <div className="formTitle">
            <TextField
              margin="dense"
              fullWidth
              name="title"
              id="title"
              label="Titulo"
              variant="outlined"
            />
          </div>
          <div className="formAuthor">
            <TextField
              margin="dense"
              fullWidth
              name="author"
              id="author"
              label="Autor"
              variant="outlined"
            />
          </div>
          <div className="formSynopsis">
            <TextField
              margin="dense"
              multiline
              fullWidth
              rows={4}
              name="synopse"
              id="synopse"
              label="Sinopse"
              variant="outlined"
            />
          </div>
          <div className="formGenre">
            <InputLabel id="genre">Gênero</InputLabel>
            <Select
              fullWidth
              labelId="genre"
              id="genre"
              value=""
              label="genero"
            >
              <MenuItem>Fantasia</MenuItem>
              <MenuItem>Ação e Aventura</MenuItem>
              <MenuItem>Horror</MenuItem>
              <MenuItem>Romance</MenuItem>
            </Select>
          </div>
          <div className="formData">
            <TextField
              fullWidth
              name="data"
              id="data"
              label="Data de entrada"
              variant="outlined"
            />
          </div>
          <div className="buttons-form">
            <Button className="btn-cancel">Cancelar</Button>
            <Button className="btn-save">Salvar</Button>
          </div>
        </ContainerForm>
      </ContainerMain>
    </ContainerBg>
  );
};

export default AddBook;
