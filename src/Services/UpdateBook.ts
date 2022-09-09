import { IBook } from '../Pages/AddBook/interface';
import api from './api';

const updateBook = async (book: IBook) => {
  try {
    const res = await api.put(`/books/${book.id}`,book);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject('Ops ocorreu um erro');
  }
};

export default updateBook;
