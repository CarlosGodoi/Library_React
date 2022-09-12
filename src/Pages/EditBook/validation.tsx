import { string, object, array } from 'yup';

export const validationSchema = object({
  id: string(),
  author: string(),
  genre: string(),
  image: string(),
  rentHistory: array(),
  status: object(),
  synopsis: string(),
  systemEntryDate: string(),
  tittle: string(),
});

export const initialValues = {
  id: '',
  author: '',
  genre: '',
  image: '',
  rentHistory: [],
  status: {},
  synopsis: '',
  systemEntryDate: '',
  tittle: '',
};
