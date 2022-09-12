import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IBook } from '../../../Pages/AddBook/interface';
import GetBookById from '../../../Services/GetBookById';
import { getBookImage } from '../../../utils/getImage';
import { BgModal, ContainerModal } from './styles';

interface IProps {
  closeModal: VoidFunction;
  selectedBook: IBook;
  onClickEdit: (id: string) => void;
  onClickLend: VoidFunction;
  onClickInactive: VoidFunction;
  onClickLoan: VoidFunction;
}

const BookModal = ({
  closeModal,
  selectedBook,
  onClickEdit,
  onClickLend,
  onClickInactive,
  onClickLoan,
}: IProps) => {
  const modalClosed = () => {
    closeModal();
  };

  useEffect(() => {
    //pegar dados do livro pelo selectedbook.id
    if (selectedBook.id)
      GetBookById(selectedBook.id).then((res) => console.log(res));
  }, []);

  return (
    <BgModal>
      <ContainerModal>
        <div className="container-exit" onClick={modalClosed}>
          <p>X</p>
        </div>
        <div className="container-main">
          <div className="container-img-btn">
            <div className="img-book">
              <img
                src={selectedBook.image ? getBookImage(selectedBook.image) : ''}
                alt="Imagem do livro"
              />
            </div>
            <div className="container-btn">
              <Button className="btn-lend" onClick={onClickLend}>
                Emprestar
              </Button>
            </div>
          </div>
          <div className="container-contentBook-btns">
            <div className="title">
              <h2>{selectedBook.tittle}</h2>
            </div>
            <div className="data-book">
              <h3>Sinopse</h3>
              <p>{selectedBook.synopsis}</p>
              <h3>Autor</h3>
              <p>{selectedBook.author}</p>
              <h3>Genero</h3>
              <p>{selectedBook.genre}</p>
              <h3>Data de Entrada</h3>
              <p>{selectedBook.systemEntryDate}</p>
            </div>
            <div className="btns-Modal">
              <Button
                className="btn-edit"
                onClick={() => onClickEdit(selectedBook.id)}
              >
                Editar
              </Button>
              <Button className="btn-inactivate" onClick={onClickInactive}>
                Inativar
              </Button>
              <Button className="btn-history" onClick={onClickLoan}>
                Historico
              </Button>
            </div>
          </div>
        </div>
      </ContainerModal>
    </BgModal>
  );
};

export default BookModal;
