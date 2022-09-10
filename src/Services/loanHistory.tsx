import api from './api';

const loanHistory = async () => {
  let data;
  let newArrayBooks: any = [];
  console.log(newArrayBooks);

  await api
    .get('./books')
    .then((res) => res)
    .then((body) => {
      data = body.data.books;
      data.forEach((book: any) =>
        book.rentHistory?.map((rent: any) =>
          newArrayBooks.push({
            bookTitle: book.tittle,
            studentName: rent.studentName,
            class: rent.class,
            withdrawalDate: rent.withdrawalDate,
            deliveryDate: rent.deliveryDate,
          }),
        ),
      );
      return Promise.resolve(newArrayBooks);
    })
    .catch((err) => Promise.reject(err));
};

export default loanHistory;
