import { string, object } from 'yup';

export const validationSchema = object({
  description: string(),
});

export const initialValues = {
  description: '',
};
