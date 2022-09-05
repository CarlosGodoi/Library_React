import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import { ContainerBg, ContainerForm, ContainerMain } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { initialValues, validationSchema } from './validation';
import { useFormik } from 'formik';
import allBooks from '../../Services/GetAllBooks';
import { IBook } from './interface';

const EditBook = () => {
  const navigate = useNavigate();
  const [baseImage, setBaseImage] = useState<unknown>('');
  const [book, setBook] = useState<IBook | []>([]);
  console.log(book);

  useEffect(() => {
    allBooks()
      .then((res) => {
        setBook(res);
      })
      .catch((err) => console.log(err));
  }, []);

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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: IBook) {},
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
                  value={formik.values.image}
                  onChange={(e) => UploadImage(e)}
                />
                <div className="imgAdd-title">
                  <img src={formik.values.image} alt="Imagem do livro" />
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

export default EditBook;
