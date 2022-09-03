import { IBook } from '../Pages/AddBook/interface';

const createBook = async () => {
  let data;

  return fetch('./data.json')
    .then((res) => res.json())
    .then((body) => {
      data = body.data.books;
      console.log(data);
      return Promise.resolve(data);
    })
    .catch((err) => Promise.reject(err + 'Ops! Ocorreu um problema'));
};

export default createBook;
// let newBook = {};
// newBook = [
//   {
//     tittle: '',
//     author: '',
//     genre: '',
//     status: {
//       isActive: '',
//       description: '',
//     },
//     image: '',
//     systemEntryDate: '',
//     synopsis: '',
//     rentHistory: [
//       {
//         studentName: '',
//         class: '',
//         withdrawalDate: '',
//         deliveryDate: '',
//       },
//     ],
//   },
// ];
