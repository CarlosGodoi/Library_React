import { string, object, boolean } from 'yup';

export const validationSchema = object({
  description: string(),
  isActive: boolean(),
});

export const initialValues = {
  description: '',
  isActive: true,
};
