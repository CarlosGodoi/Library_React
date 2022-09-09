import { string, object } from 'yup';

export const validationSchema = object({
  studentName: string(),
  withdrawalDate: string(),
  deliveryDate: string(),
  class: string(),
});

export const initialValues = {
  studentName: '',
  withdrawalDate: '',
  deliveryDate: '',
  class: '',
};
