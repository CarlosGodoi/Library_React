import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { TStatus } from '../../../interfaces/books';
import { IBook } from '../../../Pages/AddBook/interface';
import updateBook from '../../../Services/UpdateBook';
import { BgModal, ContainerModal } from './styles';
import { initialValues, validationSchema } from './validation';

interface IProps {
  closeModal: () => void;
  selectedBook: IBook;
}

const InactivateBookModal = ({ closeModal, selectedBook }: IProps) => {
  const modalClosed = () => {
    closeModal();
  };

  async function toogleStatusBook({ description }: TStatus) {
    const updatedBookPayLoad: IBook = {
      ...selectedBook,
      status: {
        description: description,
        isActive: !selectedBook.status.isActive,
      },
    };

    await updateBook(updatedBookPayLoad).then((res) => {
      closeModal();
    });
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: any) {
      toogleStatusBook(values);
    },
  });

  return (
    <BgModal>
      <ContainerModal>
        <div className="container-exit" onClick={modalClosed}>
          <p>X</p>
        </div>
        <div className="container-title">
          <h3>Inativar Livro</h3>
        </div>
        <form className="container-textArea" onSubmit={formik.handleSubmit}>
          <TextField
            margin="dense"
            multiline
            fullWidth
            rows={5}
            name="description"
            id="description"
            label="Descrição"
            variant="outlined"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <div className="container-btnForm">
            <Button className="btn-inactivate" type="submit">
              {selectedBook.status.isActive ? 'Inativar' : 'Ativar'}
            </Button>
          </div>
        </form>
      </ContainerModal>
    </BgModal>
  );
};

export default InactivateBookModal;
