import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../../Pages/AddBook/interface';
import GetBookById from '../../../Services/GetBookById';
import { getBookImage } from '../../../utils/getImage';
import { BgModal, ContainerModal } from './styles';

interface IProps {
  closeModal: VoidFunction;
  selectedBook: IBook;
  setSelected: React.Dispatch<React.SetStateAction<IBook>>;

  handleModal: (
    modal:
      | 'modalLendBook'
      | 'modalInactiveBook'
      | 'modalLoanBook'
      | 'modalBook',
  ) => void;
}

const BookModal = ({
  closeModal,
  selectedBook,
  setSelected,

  handleModal,
}: IProps) => {
  const modalClosed = () => {
    closeModal();
  };
  const navigate = useNavigate();

  const [book, setBook] = useState<IBook>({} as IBook);

  useEffect(() => {
    //pegar dados do livro pelo selectedbook.id
    if (selectedBook.id) {
      GetBookById(selectedBook.id).then((res) => {
        setBook(res);
        setSelected(res);
      });
    }
  }, []);

  return (
    <>
      <BgModal>
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
                <div className="container-btn">
                  {book.rentHistory &&
                  book.rentHistory[book.rentHistory?.length - 1].isBorrowed ===
                    true ? (
                    <Button
                      className="btn-lend"
                      onClick={() => handleModal('modalLendBook')}
                      style={{
                        backgroundColor: '#F4F4F4',
                        border: 'solid 1px #ADB5BD',
                        color: 'black',
                      }}
                    >
                      Devolver
                    </Button>
                  ) : (
                    <Button
                      className="btn-lend"
                      onClick={() => handleModal('modalLendBook')}
                    >
                      Emprestar
                    </Button>
                  )}
                </div>
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
                <div className="btns-Modal">
                  <Button
                    className="btn-edit"
                    onClick={() => {
                      closeModal();
                      navigate(`/editarLivro/${book.id}`, { state: 'book' });
                    }}
                  >
                    Editar
                  </Button>

                  {!book?.status?.isActive ? (
                    <Button
                      className="btn-inactivate"
                      onClick={() => handleModal('modalInactiveBook')}
                      style={{ border: 'solid 1px #49D749', color: '#49D749' }}
                    >
                      Ativar
                    </Button>
                  ) : (
                    <Button
                      className="btn-inactivate"
                      onClick={() => handleModal('modalInactiveBook')}
                    >
                      Inativar
                    </Button>
                  )}

                  <Button
                    className="btn-history"
                    onClick={() => handleModal('modalLoanBook')}
                  >
                    Historico
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {book.rentHistory &&
            book.rentHistory[book.rentHistory?.length - 1].isBorrowed ===
              true && (
              <div className="data-rentBook">
                <div className="title">
                  <h3>Dados do aluno</h3>
                </div>
                <div className="container-student">
                  <div>
                    <h3>Nome do Aluno</h3>
                    <p>
                      {
                        book.rentHistory[book.rentHistory.length - 1]
                          .studentName
                      }
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
                      {
                        book.rentHistory[book.rentHistory.length - 1]
                          .deliveryDate
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}
        </ContainerModal>
      </BgModal>
    </>
  );
};

export default BookModal;
