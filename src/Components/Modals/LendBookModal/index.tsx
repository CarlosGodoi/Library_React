import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../../Pages/AddBook/interface';
import api from '../../../Services/api';
import updateBook from '../../../Services/UpdateBook';
import { BgModal, ContainerModal } from './styles';
import { initialValues, validationSchema } from './validation';

interface IProps {
  closeModal: () => void;
  open: boolean;
  selectedBook: IBook;
}

const LendBook = ({ closeModal, open, selectedBook }: IProps) => {
  const navigate = useNavigate();
  const modalClosed = () => {
    closeModal();
  };

  async function borrowingBook(values: any) {
    const updatedBook: IBook = {
      ...selectedBook,
      rentHistory: [...selectedBook.rentHistory, values],
    };
    await updateBook(updatedBook)
      .then((res) => {
        console.log(res);
        navigate('/biblioteca');
      })
      .catch((err) => console.log(err));
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: any) {
      borrowingBook(values);
    },
  });
  return open ? (
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
  ) : (
    <div></div>
  );
};

export default LendBook;
