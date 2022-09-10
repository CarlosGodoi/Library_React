import { string, object, boolean } from 'yup';

export const validationSchema = object({
    isActive: boolean(),
    description: string()
});

export const initialValues = {
    isActive: boolean,
    description: ''
};