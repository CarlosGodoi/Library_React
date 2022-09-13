import { string, object, boolean } from 'yup';

export const validationSchema = object({
  studentName: string(),
  withdrawalDate: string(),
  deliveryDate: string(),
  class: string(),
  isBorrowed: boolean(),
});

export const initialValues = {
  studentName: '',
  withdrawalDate: '',
  deliveryDate: '',
  class: '',
  isBorrowed: true,
};
