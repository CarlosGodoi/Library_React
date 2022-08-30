import { string, boolean, object, number } from 'yup';

export const validationSchema = object({
  email: string().required('E-mail obrigátorio'),
  password: string().required('Senha obrigatória'),
});

export const initialValues = {
  email: '',
  password: '',
};
