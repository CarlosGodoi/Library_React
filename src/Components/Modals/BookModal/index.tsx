import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TBook } from '../../../interfaces/books';
import { getBookImage } from '../../../utils/getImage';
import { BgModal, ContainerModal } from './styles';

interface IProps {
  closeModal: VoidFunction;
  open: boolean;
  selectedBook: TBook;
  onClickEdit: VoidFunction;
  onClickLend: VoidFunction;
  onClickInactive: VoidFunction;
  onClickLoan: VoidFunction;
}

const BookModal = ({
  closeModal,
  open,
  selectedBook,
  onClickEdit,
  onClickLend,
  onClickInactive,
  onClickLoan,
}: IProps) => {
  const [bookData, setBookData] = useState<TBook>({} as TBook);

  const modalClosed = () => {
    closeModal();
  };

  useEffect(() => {
    setBookData(selectedBook);
  }, [selectedBook]);

  return open ? (
    <BgModal>
      <ContainerModal>
        <div className="container-exit" onClick={modalClosed}>
          <p>X</p>
        </div>
        <div className="container-main">
          <div className="container-img-btn">
            <div className="img-book">
              <img
                src={bookData.image ? getBookImage(bookData.image) : ''}
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
              <h2>{bookData.tittle}</h2>
            </div>
            <div className="data-book">
              <h3>Sinopse</h3>
              <p>{bookData.synopsis}</p>
              <h3>Autor</h3>
              <p>{bookData.author}</p>
              <h3>Genero</h3>
              <p>{bookData.genre}</p>
              <h3>Data de Entrada</h3>
              <p>{bookData.systemEntryDate}</p>
            </div>
            <div className="btns-Modal">
              <Button className="btn-edit" onClick={onClickEdit}>
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
  ) : (
    <div></div>
  );
};

export default BookModal;
