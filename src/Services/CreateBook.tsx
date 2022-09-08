import { IBook } from '../Pages/AddBook/interface';
import api from './api';

const createBook = async (values: IBook) => {
  try {
    const res = await api.post('/books', values);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject('Ops ocorreu um erro');
  }
};

export default createBook;

// let data;

// // return fetch('./data.json')
// //   .then((res) => res.json())
// //   .then((body) => {
// //     data = body.data.books;
// //     console.log(data);
// // //     return Promise.resolve(data);
//     })
//   .catch((err) => Promise.reject(err + 'Ops! Ocorreu um problema'));
