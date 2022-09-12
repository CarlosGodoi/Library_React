import React, { useEffect, useState } from 'react';
import {
  ContainerBg,
  ContainerBooks,
  ContainerMain,
  SearchBooks,
} from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import BookModal from '../../Components/Modals/BookModal';
import LendBook from '../../Components/Modals/LendBookModal';
import { getBookImage } from '../../utils/getImage';
import InactivateBookModal from '../../Components/Modals/inactivateModal';
import LoanBookModal from '../../Components/Modals/LoanModal';
import GetAllBooks from '../../Services/GetAllBooks';
import { IBook } from '../AddBook/interface';
import { useLoading } from '../../Components/Context/LoadingContext';
import GetBookById from '../../Services/GetBookById';

const Library = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [booksOriginals, setBooksOriginals] = useState<IBook[]>([]);
  const navigate = useNavigate();
  const { setLoading } = useLoading();

  const [modalBook, setModalBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState<IBook>({} as IBook);
  const [modalLendBook, setModalLendBook] = useState(false);
  const [modalInactiveBook, setModalInactiveBook] = useState(false);
  const [modalLoanBook, setModalLoanBook] = useState(false);

  const [descriptionBook, setDescriptionBook] = useState<string>('');
  const [inputSearch, setInputSearch] = useState('');
  const { id } = useParams();

  useEffect(() => {
    GetAllBooks()
      .then((res: any) => {
        setBooks(res);
        setBooksOriginals(res);
      })
      .catch((err: any) => console.log(err));
  }, []);

  const opeModalEdit = (id: string) => {
    setModalBook(false);
    navigate(`/editarLivro/${id}`, { state: 'book' });
  };

  const openLendModal = () => {
    setModalBook(false);
    setModalLendBook(true);
  };

  const openInactiveModal = () => {
    setModalBook(false);
    setModalLendBook(false);
    setModalInactiveBook(true);
  };

  const openLoanModal = () => {
    setModalBook(false);
    setModalLendBook(false);
    setModalInactiveBook(false);
    setModalLoanBook(true);
  };

  function filterBooks() {
    let bookFilter = inputSearch;
    let bookAttribute = descriptionBook;
    console.log(bookFilter);
    console.log(bookAttribute);

    if (bookFilter !== '' && bookAttribute !== '') {
      switch (bookAttribute) {
        case 'genre':
          setBooks(
            booksOriginals.filter((book) => {
              let researchedBook = book.genre
                .toUpperCase()
                .includes(bookFilter.toString().toUpperCase());
              return researchedBook;
            }),
          );
          break;

        case 'author':
          setBooks(
            booksOriginals.filter((book) => {
              let researchedBook = book.author
                .toUpperCase()
                .includes(bookFilter.toString().toUpperCase());
              return researchedBook;
            }),
          );
          break;

        case 'systemEntryDate':
          setBooks(
            booksOriginals.filter((book) => {
              let researchedBook = book.systemEntryDate
                .toUpperCase()
                .includes(bookFilter.toString().toUpperCase());
              return researchedBook;
            }),
          );
          break;

        case 'synopsis':
          setBooks(
            booksOriginals.filter((book) => {
              let researchedBook = book.synopsis
                .toUpperCase()
                .includes(bookFilter.toString().toUpperCase());
              return researchedBook;
            }),
          );
          break;
      }
    } else {
      return booksOriginals;
    }
  }

  return (
    <ContainerBg>
      <ContainerMain>
        <div className="back-home" onClick={() => navigate('/home')}>
          <ArrowBackIosIcon fontSize="small" />
          <p>Home</p>
          <h3>/Biblioteca</h3>
        </div>

        <SearchBooks>
          <form
            className="container"
            onSubmit={(event) => {
              event.preventDefault();
              filterBooks();
            }}
          >
            <div className="input-search">
              <input
                type="text"
                placeholder="Pesquisar livro..."
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
              />
              <button type="submit">Buscar</button>
            </div>
            <div className="select-search">
              <Select
                onChange={(e) => setDescriptionBook(e.target.value)}
                value={descriptionBook}
                fullWidth
                size="small"
              >
                <MenuItem disabled>Selecione</MenuItem>
                <MenuItem value="genre">Gênero</MenuItem>
                <MenuItem value="author">Autor</MenuItem>
                <MenuItem value="withdrawalDate">Data de entrada</MenuItem>
                <MenuItem value="synopsis"> Sinopse</MenuItem>
              </Select>
            </div>
          </form>
          <ContainerBooks>
            {books?.map((book: IBook, i) => {
              return (
                <div
                  className="container-book"
                  key={i}
                  onClick={() => {
                    setSelectedBook(book);
                    setModalBook(true);
                  }}
                >
                  <div className="book">
                    <img src={getBookImage(book.image)} alt="Imagem do livro" />
                  </div>
                  <div className="title-book">
                    <p>{book.tittle}</p>
                  </div>
                </div>
              );
            })}
            {modalBook && (
              <BookModal
                selectedBook={selectedBook}
                onClickEdit={opeModalEdit}
                onClickLend={openLendModal}
                onClickInactive={openInactiveModal}
                onClickLoan={openLoanModal}
                closeModal={() => setModalBook(false)}
              />
            )}

            {modalLendBook && (
              <LendBook
                closeModal={() => {
                  setModalLendBook(false);
                  setModalBook(true);
                }}
                selectedBook={selectedBook}
              />
            )}

            {modalInactiveBook && (
              <InactivateBookModal
                closeModal={() => setModalInactiveBook(false)}
                selectedBook={selectedBook}
              />
            )}

            {modalLoanBook && (
              <LoanBookModal
                closeModal={() => setModalLoanBook(false)}
                selected={selectedBook}
              />
            )}
          </ContainerBooks>
        </SearchBooks>
      </ContainerMain>
    </ContainerBg>
  );
};

export default Library;
