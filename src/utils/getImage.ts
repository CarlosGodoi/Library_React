  export const getBookImage = (pathBook: string) => {
    const book = pathBook.split('/');
    return pathBook.includes('base64')? pathBook:require(`../Assets/Books/${book[book.length - 1]}`)
  };