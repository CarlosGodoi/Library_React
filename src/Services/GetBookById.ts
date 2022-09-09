import api from './api';

const GetBookById = async (id:string) => {
  try {
    const res = await api.get(`/books/${id}`);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject('Ops ocorreu um erro');
  }
};

export default GetBookById;
