import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { BgModal, ContainerModal } from './styles';

interface IProps {
  closeModal: () => void;
  open: boolean;
}

const InactivateBookModal = ({ closeModal, open }: IProps) => {
  const modalClosed = () => {
    closeModal();
  };
  return open ? (
    <BgModal>
      <ContainerModal>
        <div className="container-exit" onClick={modalClosed}>
          <p>X</p>
        </div>
        <div className="container-title">
          <h3>Inativar Livro</h3>
        </div>
        <form className="container-textArea">
          <TextField
            margin="dense"
            multiline
            fullWidth
            rows={5}
            name="description"
            id="description"
            label="Descrição"
            variant="outlined"
          />
          <div className="container-btnForm">
            <Button className="btn-inactivate">Inativar</Button>
          </div>
        </form>
      </ContainerModal>
    </BgModal>
  ) : (
    <div></div>
  );
};

export default InactivateBookModal;
