import { IEditBook } from '../Pages/EditBook/interface';
import api from './api';

const updateBook = async ({
  id,
  author,
  genre,
  image,
  rentHistory,
  status,
  synopsis,
  systemEntryDate,
  tittle,
}: IEditBook) => {
  try {
    const res = await api.put(`/books/${id}`, {
      author,
      genre,
      image,
      rentHistory,
      status,
      synopsis,
      systemEntryDate,
      tittle,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject('Ops ocorreu um erro');
  }
};

export default updateBook;
