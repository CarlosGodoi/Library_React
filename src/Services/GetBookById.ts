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

// let data;

// return fetch('./data.json')
//   .then((res) => res.json())
//   .then((body) => {
//     data = body.data.books;
//     return Promise.resolve(data);
//   })
//   .catch((err) => Promise.reject(err + 'Ops! Ocorreu um problema'));
