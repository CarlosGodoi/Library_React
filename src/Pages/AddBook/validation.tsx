import { string, boolean, number, object, array } from 'yup';

export const validationSchema = {
  tittle: string(),
  author: string(),
  genre: string(),
  status: object(),
  image: string(),
  systemEntryDate: string(),
  synopsis: string(),
  rentHistory: array(),
  baseImage: string(),
};

export const initialValues = {
  author: '',
  genre: '',
  image: '',
  rentHistory: [],
  status: {},
  synopsis: '',
  systemEntryDate: '',
  tittle: '',
  baseImage: '',
};
