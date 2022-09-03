import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import { ContainerBg, ContainerForm, ContainerMain } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './validation';
import { IBook } from './interface';
import add from '../../Assets/styleImages/add_capa.svg';

const AddBook = () => {
  const navigate = useNavigate();
  const [baseImage, setBaseImage] = useState<unknown>('');

  const addNewBook = () => {
    // eslint-disable-next-line no-restricted-globals
    event?.preventDefault();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: IBook) {
      UploadImage(values);
      addNewBook();
    },
  });

  const UploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

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
          <form className="form-addBook">
            <div
              className="formImage"
              style={{ backgroundImage: `url(${baseImage})` }}
            >
              <label htmlFor="image" className="labelUpload">
                <input
                  className="customFileInput"
                  type="file"
                  name="image"
                  id="image"
                  value={formik.values.baseImage}
                  onChange={(e) => UploadImage(e)}
                />
                <div className="imgAdd-title">
                  <img src={add} alt="Imagem adicionar" />
                  <p>Capa</p>
                </div>
              </label>
            </div>

            <div className="formTitle">
              <TextField
                margin="dense"
                fullWidth
                name="tittle"
                id="tittle"
                label="Titulo"
                variant="outlined"
                value={formik.values.tittle}
                onChange={formik.handleChange}
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
                value={formik.values.author}
                onChange={formik.handleChange}
              />
            </div>
            <div className="formSynopsis">
              <TextField
                margin="dense"
                multiline
                fullWidth
                rows={4}
                name="synopsis"
                id="synopsis"
                label="Sinopse"
                variant="outlined"
                value={formik.values.synopsis}
                onChange={formik.handleChange}
              />
            </div>
            <div className="formGenre">
              <TextField
                select
                fullWidth
                margin="dense"
                name="genre"
                id="genre"
                label="genero"
                value={formik.values.genre}
                onChange={formik.handleChange}
              >
                <MenuItem value="Fantasia">Fantasia</MenuItem>
                <MenuItem value="Ação e Aventura">Ação e Aventura</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="Romance">Romance</MenuItem>
              </TextField>
            </div>
            <div className="formData">
              <TextField
                fullWidth
                name="systemEntryDate"
                id="systemEntryDate"
                label="Data de entrada"
                variant="outlined"
                value={formik.values.systemEntryDate}
                onChange={formik.handleChange}
              />
            </div>
            <div className="buttons-form">
              <Button className="btn-cancel" onClick={() => navigate('/home')}>
                Cancelar
              </Button>
              <Button type="submit" className="btn-save">
                Salvar
              </Button>
            </div>
          </form>
        </ContainerForm>
      </ContainerMain>
    </ContainerBg>
  );
};

export default AddBook;
