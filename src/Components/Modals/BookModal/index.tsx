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

  const [book, setBook] = useState<IBook>({} as IBook);
  console.log(book.status);

  useEffect(() => {
    //pegar dados do livro pelo selectedbook.id
    if (selectedBook.id)
      GetBookById(selectedBook.id).then((res) => setBook(res));
  }, []);

  return (
    <>
      <BgModal>
        {book.rentHistory &&
        book.rentHistory[book.rentHistory?.length - 1].isBorrowed === true ? (
          <ContainerModal>
            <div className="container-exit" onClick={modalClosed}>
              <p>X</p>
            </div>
            <div className="container-main">
              <div className="container-img-btn">
                <div className="img-book">
                  <img
                    src={book.image ? getBookImage(book.image) : ''}
                    alt="Imagem do livro"
                  />
                </div>
                <div className="container-btn">
                  {book.rentHistory &&
                  book.rentHistory[book.rentHistory?.length - 1].isBorrowed ===
                    true ? (
                    <Button
                      className="btn-lend"
                      onClick={onClickLend}
                      style={{
                        backgroundColor: '#F4F4F4',
                        border: 'solid 1px #ADB5BD',
                        color: 'black',
                      }}
                    >
                      Devolver
                    </Button>
                  ) : (
                    <Button className="btn-lend" onClick={onClickLend}>
                      Emprestar
                    </Button>
                  )}
                </div>
              </div>
              <div className="container-contentBook-btns">
                <div className="title">
                  <h2>{book.tittle}</h2>
                </div>
                <div className="data-book">
                  <h3>Sinopse</h3>
                  <p>{book.synopsis}</p>
                  <h3>Autor</h3>
                  <p>{book.author}</p>
                  <h3>Genero</h3>
                  <p>{book.genre}</p>
                  <h3>Data de Entrada</h3>
                  <p>{book.systemEntryDate}</p>
                </div>
                <div className="btns-Modal">
                  <Button
                    className="btn-edit"
                    onClick={() => onClickEdit(book.id)}
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
            <div className="data-rentBook">
              <div className="title">
                <h3>Dados do aluno</h3>
              </div>
              <div className="container-student">
                <div>
                  <h3>Nome do Aluno</h3>
                  <p>
                    {book.rentHistory[book.rentHistory.length - 1].studentName}
                  </p>
                </div>
                <div>
                  <h3>Turma</h3>
                  <p>{book.rentHistory[book.rentHistory.length - 1].class}</p>
                </div>
                <div>
                  <h3>Data da retirada</h3>
                  <p>
                    {
                      book.rentHistory[book.rentHistory.length - 1]
                        .withdrawalDate
                    }
                  </p>
                </div>
                <div>
                  <h3>Data da entrega</h3>
                  <p>
                    {book.rentHistory[book.rentHistory.length - 1].deliveryDate}
                  </p>
                </div>
              </div>
            </div>
          </ContainerModal>
        ) : (
          <ContainerModal>
            <div className="container-exit" onClick={modalClosed}>
              <p>X</p>
            </div>
            <div className="container-main">
              <div className="container-img-btn">
                <div className="img-book">
                  <img
                    src={book.image ? getBookImage(book.image) : ''}
                    alt="Imagem do livro"
                  />
                </div>
                <div className="container-btn">
                  {book.rentHistory &&
                  book.rentHistory[book.rentHistory?.length - 1].isBorrowed ===
                    true ? (
                    <Button
                      className="btn-lend"
                      onClick={onClickLend}
                      style={{
                        backgroundColor: '#F4F4F4',
                        border: 'solid 1px #ADB5BD',
                        color: 'black',
                      }}
                    >
                      Devolver
                    </Button>
                  ) : (
                    <Button className="btn-lend" onClick={onClickLend}>
                      Emprestar
                    </Button>
                  )}
                </div>
              </div>
              <div className="container-contentBook-btns">
                <div className="title">
                  <h2>{book.tittle}</h2>
                </div>
                <div className="data-book">
                  <h3>Sinopse</h3>
                  <p>{book.synopsis}</p>
                  <h3>Autor</h3>
                  <p>{book.author}</p>
                  <h3>Genero</h3>
                  <p>{book.genre}</p>
                  <h3>Data de Entrada</h3>
                  <p>{book.systemEntryDate}</p>
                </div>
                <div className="btns-Modal">
                  <Button
                    className="btn-edit"
                    onClick={() => onClickEdit(book.id)}
                  >
                    Editar
                  </Button>

                  {book.status ? (
                    <Button
                      className="btn-inactivate"
                      onClick={onClickInactive}
                      style={{ border: 'solid 1px #49D749', color: '#49D749' }}
                    >
                      Ativar
                    </Button>
                  ) : (
                    <Button
                      className="btn-inactivate"
                      onClick={onClickInactive}
                    >
                      Inativar
                    </Button>
                  )}

                  <Button className="btn-history" onClick={onClickLoan}>
                    Historico
                  </Button>
                </div>
              </div>
            </div>
          </ContainerModal>
        )}
      </BgModal>
    </>
  );
};

export default BookModal;
