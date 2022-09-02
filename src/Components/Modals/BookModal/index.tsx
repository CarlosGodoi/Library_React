import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import allBooks from '../../../Services/GetAllBooks';
import LendBook from '../LendBookModal';
import { BgModal, ContainerModal } from './styles';

interface IProps {
  closeModal: () => void;
  open: boolean;
}

const BookModal = ({ closeModal, open }: IProps) => {
  const [lendBookModal, setLendBookModal] = useState(false);

  const modalClosed = () => {
    closeModal();
  };

  useEffect(() => {
    allBooks()
      .then((res: any) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return open ? (
    <BgModal>
      <ContainerModal>
        <div className="container-exit" onClick={modalClosed}>
          <p>X</p>
        </div>
        <div className="container-main">
          <div className="container-img-btn">
            <div className="img-book">
              <img src="" alt="" />
            </div>
            <div className="container-btn">
              <Button
                className="btn-lend"
                onClick={() => setLendBookModal(true)}
              >
                Emprestar
              </Button>
            </div>
          </div>
          <div className="container-contentBook-btns">
            <div className="title">
              <h2>Titulo</h2>
            </div>
            <div className="data-book">
              <h3>Sinopse</h3>
              <p>jdhkhd</p>
              <h3>Autor</h3>
              <p>kdjndk</p>
              <h3>Genero</h3>
              <p>ndjnffnjk</p>
              <h3>Data de Entrada</h3>
              <p>ihioSIOSJOSIJ</p>
            </div>
            <div className="btns-Modal">
              <Button className="btn-edit">Editar</Button>
              <Button className="btn-inactivate">Inativar</Button>
              <Button className="btn-history">Historico</Button>
            </div>
          </div>
        </div>
        <LendBook
          open={lendBookModal}
          closeModal={() => {
            setLendBookModal(false);
          }}
        />
      </ContainerModal>
    </BgModal>
  ) : (
    <div></div>
  );
};

export default BookModal;
