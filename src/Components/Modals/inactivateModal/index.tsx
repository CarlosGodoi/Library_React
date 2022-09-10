import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { IBook } from '../../../Pages/AddBook/interface';
import updateBook from '../../../Services/UpdateBook';
import { BgModal, ContainerModal } from './styles';
import { initialValues, validationSchema } from './validation';

interface IProps {
  closeModal: () => void;
  open: boolean;
  selectedBook: IBook;
}

const InactivateBookModal = ({ closeModal, open, selectedBook }: IProps) => {
  const modalClosed = () => {
    closeModal();
  };

  async function inactivatedBook(values: any) {
    const updatedBook: IBook = {
      ...selectedBook,
      status: { ...selectedBook.status, values },
    };
    await updateBook(updatedBook);
    console.log(updatedBook);
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: any) {
      inactivatedBook(values);
    },
  });

  return open ? (
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
              Inativar
            </Button>
          </div>
        </form>
      </ContainerModal>
    </BgModal>
  ) : (
    <div></div>
  );
};

export default InactivateBookModal;
