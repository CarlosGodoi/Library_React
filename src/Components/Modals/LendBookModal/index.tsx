import React from 'react';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { IBook } from '../../../Pages/AddBook/interface';
import updateBook from '../../../Services/UpdateBook';
import { BgModal, ContainerModal } from './styles';
import { initialValues, validationSchema } from './validation';
import { useMessage } from '../../Context/MessageContext';

interface IProps {
  closeModal: () => void;
  selectedBook: IBook;
}

const LendBook = ({ closeModal, selectedBook }: IProps) => {
  const modalClosed = () => {
    closeModal();
  };
  const { setMessage } = useMessage();

  async function borrowingBook(values: any) {
    const updatedBook: IBook = {
      ...selectedBook,
      rentHistory: [...selectedBook.rentHistory, values],
    };
    await updateBook(updatedBook)
      .then((res) => {
        closeModal();
      })
      .catch((err) => {
        setMessage({
          content: `O seguinte erro ocorreu: ${err}`,
          display: true,
          severity: 'error',
        });
      });
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: any) {
      borrowingBook(values);
    },
  });
  return (
    <BgModal>
      <ContainerModal>
        <div className="container-exit" onClick={modalClosed}>
          <p>X</p>
        </div>
        <div className="container-main">
          <div className="container-title">
            <h2>Informe os dados do aluno antes de continuar</h2>
          </div>
          <form className="container-form" onSubmit={formik.handleSubmit}>
            <TextField
              className="input"
              id="studentName"
              name="studentName"
              label="Nome do Aluno"
              variant="outlined"
              value={formik.values.studentName}
              onChange={formik.handleChange}
            />
            <TextField
              className="input"
              id="class"
              name="class"
              label="Turma"
              variant="outlined"
              value={formik.values.class}
              onChange={formik.handleChange}
            />
            <TextField
              className="input"
              id="withdrawalDate"
              name="withdrawalDate"
              label="Data da Retirada"
              variant="outlined"
              value={formik.values.withdrawalDate}
              onChange={formik.handleChange}
            />
            <TextField
              className="input"
              id="deliveryDate"
              name="deliveryDate"
              label="Data da Entrega"
              variant="outlined"
              value={formik.values.deliveryDate}
              onChange={formik.handleChange}
            />
            <div className="btn-form">
              <Button type="submit" className="btn-lend">
                Emprestar
              </Button>
            </div>
          </form>
        </div>
      </ContainerModal>
    </BgModal>
  );
};

export default LendBook;
