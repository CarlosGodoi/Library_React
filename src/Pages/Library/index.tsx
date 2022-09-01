import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import {
  ContainerBg,
  ContainerBooks,
  ContainerMain,
  SearchBooks,
} from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import allBooks from '../../Services/GetAllBooks';
import BookModal from '../../Components/Modals/BookModal';

const Library = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const [modalBook, setModalBook] = useState(false);

  useEffect(() => {
    allBooks()
      .then((res: any) => setBooks(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContainerBg>
      <Header />
      <ContainerMain>
        <div className="back-home" onClick={() => navigate('/home')}>
          <ArrowBackIosIcon fontSize="small" />
          <p>Home</p>
          <h3>/Biblioteca</h3>
        </div>

        <SearchBooks>
          <div className="container">
            <form className="input-search">
              <input type="text" placeholder="Pesquisar livro..." />
              <button type="button">Buscar</button>
            </form>
            <div className="select-search">
              <Select
                labelId="options"
                id="options"
                value=""
                label=""
                fullWidth
                size="small"
              >
                <MenuItem disabled>Selecione</MenuItem>
                <MenuItem>Gênero</MenuItem>
                <MenuItem>Author</MenuItem>
                <MenuItem>Data de entrada</MenuItem>
                <MenuItem> Sinopse</MenuItem>
              </Select>
            </div>
          </div>
          <ContainerBooks>
            {books.map((book: any, i) => {
              return (
                <div
                  className="container-book"
                  key={i}
                  onClick={() => {
                    setModalBook(true);
                  }}
                >
                  <div className="book">
                    <img src={book.image} alt="Imagem do livro" />
                  </div>
                  <div className="title-book">
                    <p>{book.tittle}</p>
                  </div>
                </div>
              );
            })}
            <BookModal
              open={modalBook}
              closeModal={() => {
                setModalBook(false);
              }}
            />
          </ContainerBooks>
        </SearchBooks>
      </ContainerMain>
    </ContainerBg>
  );
};

export default Library;
