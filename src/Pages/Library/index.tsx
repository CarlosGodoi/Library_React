import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../Components/Context/LoadingContext';
import { useMessage } from '../../Components/Context/MessageContext';
import { TObjModal } from '../../interfaces/books';
import GetAllBooks from '../../Services/GetAllBooks';
import { getBookImage } from '../../utils/getImage';
import { IBook } from '../AddBook/interface';
import RenderModal from './RenderModal';
import { ContainerBg, ContainerMain } from './styles';

const Library = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [booksOriginals, setBooksOriginals] = useState<IBook[]>([]);
  const navigate = useNavigate();
  const { setLoading } = useLoading();

  const [selectedBook, setSelectedBook] = useState<IBook>({} as IBook);

  const [objOpenModal, setObjOpenModal] = useState<TObjModal>({
    modalLendBook: false,
    modalInactiveBook: false,
    modalLoanBook: false,
    modalBook: false,
  });

  const [descriptionBook, setDescriptionBook] = useState<string>('');
  const [inputSearch, setInputSearch] = useState('');
  const { setMessage } = useMessage();

  useEffect(() => {
    GetAllBooks()
      .then((res: any) => {
        setBooks(res);
        setBooksOriginals(res);
      })
      .catch((err: any) => {
        setMessage({
          content: '' + err,
          display: true,
          severity: 'error',
        });
      });
  }, []);

  function filterBooks() {
    let bookFilter = inputSearch;
    let bookAttribute = descriptionBook;

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

  const handleModal = (
    modal:
      | 'modalLendBook'
      | 'modalInactiveBook'
      | 'modalLoanBook'
      | 'modalBook',
  ) => {
    const aux = { ...objOpenModal };
    (Object.keys(aux) as (keyof typeof aux)[]).forEach((key) => {
      aux[key] = false;
    });
    aux[modal] = true;
    setObjOpenModal(aux);
  };

  return (
    <ContainerBg data-testId="books">
      <ContainerMain>
        <div className="back-home" onClick={() => navigate('/home')}>
          <ArrowBackIosIcon fontSize="small" />
          <p>Home</p>
          <h3>/Biblioteca</h3>
        </div>

        <div className="SearchBooks">
          <form
            name="form"
            className="container"
            onSubmit={(event) => {
              event.preventDefault();
              filterBooks();
            }}
          >
            <div className="input-search">
              <input
                data-testId="input-search"
                type="text"
                name="search"
                id="search"
                placeholder="Pesquisar livro..."
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
              />
              <button data-testId="buscar" type="submit">
                Buscar
              </button>
            </div>
            <div className="select-search">
              <Select
                onChange={(e) => {
                  setDescriptionBook(e.target.value);
                }}
                inputProps={{ id: 'genre', 'data-testid': 'genre' }}
                name="genre"
                id="genre"
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
          <div className="ContainerBooks">
            {books?.map((book: IBook, i) => {
              return (
                <div
                  data-testId="book"
                  className="container-book"
                  key={i}
                  onClick={() => {
                    handleModal('modalBook');
                    setSelectedBook(book);
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
            <RenderModal
              data-testId="modal"
              closeModal={() =>
                setObjOpenModal({
                  ...objOpenModal,
                  modalBook: false,
                })
              }
              closeModalInactive={() => {
                setObjOpenModal({
                  ...objOpenModal,
                  modalInactiveBook: false,
                  modalBook: true,
                });
                GetAllBooks();
              }}
              closeModalLend={() => {
                setObjOpenModal({
                  ...objOpenModal,
                  modalLendBook: false,
                  modalBook: true,
                });
              }}
              closeModalLoan={() =>
                setObjOpenModal({ ...objOpenModal, modalLoanBook: false })
              }
              objModal={objOpenModal}
              selectedBook={selectedBook}
              handleModal={handleModal}
              setSelected={setSelectedBook}
            />
          </div>
        </div>
      </ContainerMain>
    </ContainerBg>
  );
};

export default Library;
