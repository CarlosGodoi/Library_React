import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import { ContainerBg, ContainerForm, ContainerMain } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import allBooks from '../../Services/GetAllBooks';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './validation';
import createBook from '../../Services/CreateBook';

interface IBook {
  author: string;
  genre: string;
  image: string;
  rentHistory: Array<any>;
  status: object;
  synopsis: string;
  systemEntryDate: string;
  tittle: string;
  baseImage: string;
}

const AddBook = () => {
  const navigate = useNavigate();
  const [baseImage, setBaseImage] = useState<unknown>('');

  const addNewBook = (values: IBook) => {
    // eslint-disable-next-line no-restricted-globals
    event?.preventDefault();
    createBook()
      .then((res) => navigate('/biblioteca'))
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit(values: IBook) {
      UploadImage(values);
      addNewBook(values);
    },
  });

  console.log(formik.errors);

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
          <div
            className="formImage"
            style={{ backgroundImage: `url(${baseImage})` }}
          >
            <input
              className="customFileInput"
              type="file"
              name="image"
              id="image"
              value={formik.values.baseImage}
              onChange={formik.handleChange}
            />
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
            <InputLabel>Gênero</InputLabel>
            <Select
              fullWidth
              name="genre"
              id="genre"
              label="genero"
              value={formik.values.genre}
              onChange={formik.handleChange}
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
              name="systemEntryDate"
              id="systemEntryDate"
              label="Data de entrada"
              variant="outlined"
              value={formik.values.systemEntryDate}
              onChange={formik.handleChange}
            />
          </div>
          <div className="buttons-form">
            <Button type="reset" className="btn-cancel">
              Cancelar
            </Button>
            <Button type="submit" className="btn-save">
              Salvar
            </Button>
          </div>
        </ContainerForm>
      </ContainerMain>
    </ContainerBg>
  );
};

export default AddBook;
