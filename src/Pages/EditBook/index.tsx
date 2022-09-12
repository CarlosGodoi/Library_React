import React, { useState, useEffect } from 'react';
import { ContainerBg, ContainerForm, ContainerMain } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { initialValues, validationSchema } from './validation';
import { useFormik } from 'formik';
import { IBook } from '../AddBook/interface';
import GetBookById from '../../Services/GetBookById';
import updateBook from '../../Services/UpdateBook';
import { useLoading } from '../../Components/Context/LoadingContext';

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setLoading } = useLoading();

  useEffect(() => {
    if (id)
      GetBookById(id)
        .then((res) => {
          console.log(res);
          formik.setValues(res);
        })
        .catch((err) => console.log(err));
  }, [id]);

  const UploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    formik.setFieldValue('image', base64);
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

  function saveBookEdition(values: IBook) {
    // eslint-disable-next-line no-restricted-globals
    updateBook(values)
      .then((res: IBook) => console.log(res))
      .catch((err) => console.log(err));
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: IBook) {
      saveBookEdition(values);
      console.log(values);
    },
  });

  return (
    <ContainerBg>
      <ContainerMain>
        <div className="back-home" onClick={() => navigate('/biblioteca')}>
          <ArrowBackIosIcon fontSize="small" />
          <p>Biblioteca</p>
          <h3>/Editar Livro</h3>
        </div>

        <ContainerForm>
          <form
            className="form-addBook"
            onSubmit={(event) => {
              event?.preventDefault();
              formik.handleSubmit(event);
              console.log('função chamada');
            }}
          >
            <div className="formImage">
              <label htmlFor="image" className="labelUpload">
                <input
                  className="customFileInput"
                  type="file"
                  name="image"
                  id="image"
                  value={''}
                  onChange={UploadImage}
                />
                <div className="imgAdd-title">
                  <img src={formik.values.image} alt="" />
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
                <MenuItem value="Selecione" disabled>
                  Selecione
                </MenuItem>
                <MenuItem value="Finanças">Finanças</MenuItem>
                <MenuItem value="Historia">História</MenuItem>
                <MenuItem value="Web Marketing">Web Marketing</MenuItem>
                <MenuItem value="Autoajuda">Auto Ajuda</MenuItem>
                <MenuItem value="Ficção Cientifica">Ficção Cientifica</MenuItem>
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

export default EditBook;
