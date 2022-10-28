import { string, boolean, number, object, array } from 'yup';

export const validationSchema = object({
  id: string(),
  tittle: string().required('Titulo obrigatório '),
  author: string().required('Autor obrigatório '),
  genre: string().required('Gênero obrigatório '),
  status: object(),
  image: string(),
  systemEntryDate: string().required('Data de entrada obrigatório '),
  synopsis: string().required('Sinopse obrigatório '),
  rentHistory: array(),
});

export const initialValues = {
  id: '',
  author: '',
  genre: '',
  image: '',
  rentHistory: [{ isBorrowed: false }],
  status: { description: '', isActive: false },
  synopsis: '',
  systemEntryDate: '',
  tittle: '',
};
