import React from 'react';
import { ContainerBg, ContainerForm, ContainerMain } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './validation';
import { IBook } from './interface';
import createBook from '../../Services/CreateBook';
import { useMessage } from '../../Components/Context/MessageContext';

const AddBook = () => {
  const navigate = useNavigate();
  const { setMessage } = useMessage();

  const addNewBook = (values: IBook) => {
    createBook(values)
      .then((res: IBook) => {
        setMessage({
          content: 'Dados enviados com sucesso',
          display: true,
          severity: 'success',
        });
        navigate('/biblioteca');
      })
      .catch((err) =>
        setMessage({
          content: 'Ocorreu um erro ' + err,
          display: true,
          severity: 'error',
        }),
      );
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: IBook) {
      addNewBook(values);
    },
  });

  const UploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64: any = await convertBase64(file);
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

  return (
    <ContainerBg>
      <ContainerMain>
        <div className="back-home" onClick={() => navigate('/home')}>
          <ArrowBackIosIcon fontSize="small" />
          <p>Home</p>
          <h3>/Cadastrar novo Livro</h3>
        </div>

        <ContainerForm>
          <form className="form-addBook" onSubmit={formik.handleSubmit}>
            <div className="formImage">
              <label htmlFor="image" className="labelUpload">
                <input
                  data-testid="input-image"
                  className="customFileInput"
                  type="file"
                  name="image"
                  id="image"
                  onChange={UploadImage}
                />
                <img
                  className="image-base64"
                  src={formik.values.image}
                  alt=""
                />
              </label>
            </div>

            <div className="formTitle">
              <TextField
                data-testid="input-title"
                margin="dense"
                fullWidth
                name="tittle"
                id="tittle"
                label="Titulo"
                variant="outlined"
                value={formik.values.tittle}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.tittle && formik.errors.tittle)}
                helperText={formik.touched.tittle && formik.errors.tittle}
              />
            </div>
            <div className="formAuthor">
              <TextField
                data-testid="input-author"
                margin="dense"
                fullWidth
                name="author"
                id="author"
                label="Autor"
                variant="outlined"
                value={formik.values.author}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.author && formik.errors.author)}
                helperText={formik.touched.author && formik.errors.author}
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
                data-testid="input-synopsis"
                value={formik.values.synopsis}
                onChange={formik.handleChange}
                error={Boolean(
                  formik.touched.synopsis && formik.errors.synopsis,
                )}
                helperText={formik.touched.synopsis && formik.errors.synopsis}
              />
            </div>
            <div className="formGenre">
              <TextField
                select
                fullWidth
                margin="dense"
                name="genre"
                id="genre"
                inputProps={{ id: 'genre', 'data-testid': 'genre' }}
                label="genero"
                value={formik.values.genre}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.genre && formik.errors.genre)}
                helperText={formik.touched.genre && formik.errors.genre}
              >
                <MenuItem data-testid="genreOption" value="Fantasia">
                  Fantasia
                </MenuItem>
                <MenuItem data-testid="genreOption" value="Ação e Aventura">
                  Ação e Aventura
                </MenuItem>
                <MenuItem data-testid="genreOption" value="Horror">
                  Horror
                </MenuItem>
                <MenuItem data-testid="genreOption" value="Romance">
                  Romance
                </MenuItem>
              </TextField>
            </div>
            <div className="formData">
              <TextField
                data-testid="input-date"
                fullWidth
                name="systemEntryDate"
                id="systemEntryDate"
                label="Data de entrada"
                variant="outlined"
                value={formik.values.systemEntryDate}
                onChange={formik.handleChange}
                error={Boolean(
                  formik.touched.systemEntryDate &&
                    formik.errors.systemEntryDate,
                )}
                helperText={
                  formik.touched.systemEntryDate &&
                  formik.errors.systemEntryDate
                }
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
