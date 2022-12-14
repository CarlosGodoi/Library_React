import api from './api';

const loanHistory = async () => {
  let data;
  let newArrayBooks: any = [];
  console.log(newArrayBooks);

  await api
    .get('./books')
    .then((body) => {
      data = body.data.forEach((book: any) =>
        book.rentHistory?.map((rent: any) =>
          newArrayBooks.push({
            bookTitle: book.tittle,
            studentName: rent.studentName,
            class: rent.class,
            withdrawalDate: rent.withdrawalDate,
            deliveryDate: rent.deliveryDate,
          }),
        ),
        console.log(body.data)
    )});
      return Promise.resolve(newArrayBooks);
    // ).catch((err:any) => Promise.reject(err));
};

export default loanHistory;
