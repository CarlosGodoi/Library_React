  import logo from '../Assets/styleImages/Logo.svg'
  
  export const getBookImage = (pathBook: string) => {
    if(pathBook){
      const book = pathBook.split('/');
      return pathBook.includes('base64')? pathBook:require(`../Assets/Books/${book[book.length - 1]}`)
    }else{
      return logo
    }
  };