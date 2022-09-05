import { string, boolean, number, object, array } from 'yup';

export const validationSchema = {
  author: string(),
  genre: string(),
  image: string(),
  rentHistory: array().of(
    object().shape({
      studentName: string(),
      class: string(),
      withdrawalDate: string(),
      deliveryDate: string(),
    }),
  ),
  status: object().shape({
    isActive: boolean(),
    description: string(),
  }),
  synopsis: string(),
  systemEntryDate: string(),
  tittle: string(),
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
