const createBook = async () => {
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
