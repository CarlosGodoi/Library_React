import { string, boolean, number, object, array } from 'yup';

export const validationSchema = object({
  id: string(),
  tittle: string(),
  author: string(),
  genre: string(),
  status: object(),
  image: string(),
  systemEntryDate: string(),
  synopsis: string(),
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
