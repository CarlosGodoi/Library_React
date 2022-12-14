import React, { useEffect, useState } from 'react';
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
import { getBookImage } from '../../utils/getImage';
import { useMessage } from '../../Components/Context/MessageContext';

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setLoading } = useLoading();
  const { setMessage } = useMessage();

  useEffect(() => {
    if (id)
      GetBookById(id)
        .then((res) => {
          formik.setValues(res);
        })
        .catch((err) => {
          setMessage({
            content: '' + err,
            display: true,
            severity: 'error',
          });
        });
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
    updateBook(values)
      .then((res: IBook) =>
        setMessage({
          content: 'Dados enviados com sucesso',
          display: true,
          severity: 'success',
        }),
      )
      .catch((err) =>
        setMessage({
          content: '' + err,
          display: true,
          severity: 'error',
        }),
      );
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: IBook) {
      saveBookEdition(values);
      navigate('/biblioteca');
    },
  });

  return (
    <ContainerBg data-testId="edit">
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
              formik.handleSubmit();
            }}
          >
            <div className="formImage">
              <label htmlFor="image" className="labelUpload">
                <input
                  data-testId="input-image"
                  className="customFileInput"
                  type="file"
                  name="image"
                  id="image"
                  value={''}
                  onChange={UploadImage}
                />
                <div className="image-base64">
                  <img src={getBookImage(formik.values.image)} alt="" />
                </div>
              </label>
            </div>

            <div className="formTitle">
              <TextField
                data-testId="input-title"
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
                data-testId="input-author"
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
                // inputProps={{ id: 'synopsis', 'data-testid': 'input-synopsis' }}
                data-testId="input-synopsis"
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
                inputProps={{ id: 'genre', 'data-testid': 'genre' }}
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
                <MenuItem value="Finan??as">Finan??as</MenuItem>
                <MenuItem value="Historia">Hist??ria</MenuItem>
                <MenuItem value="Web Marketing">Web Marketing</MenuItem>
                <MenuItem value="Autoajuda">Auto Ajuda</MenuItem>
                <MenuItem value="Fic????o Cientifica">Fic????o Cientifica</MenuItem>
              </TextField>
            </div>
            <div className="formData">
              <TextField
                data-testId="input-date"
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
              <Button
                className="btn-cancel"
                onClick={() => navigate('/biblioteca')}
              >
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
