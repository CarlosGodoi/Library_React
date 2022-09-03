import { IBook } from '../Pages/AddBook/interface';

const createBook = async (values: IBook) => {
  let data;

  return fetch('./data.json')
    .then((res) => res.json())
    .then((body) => {
      data = body.data.books;
      return Promise.resolve(data);
    })
    .catch((err) => Promise.reject(err + 'Ops! Ocorreu um problema'));
};

export default createBook;
