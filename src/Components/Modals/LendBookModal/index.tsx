import { Button, TextField } from '@mui/material';
import { BgModal, ContainerModal } from './styles';

interface IProps {
  closeModal: () => void;
  open: boolean;
}

const LendBook = ({ closeModal, open }: IProps) => {
  const modalClosed = () => {
    closeModal();
  };
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
          <form className="container-form">
            <TextField
              className="input"
              id="studentName"
              name="studentName"
              label="Nome do Aluno"
              variant="outlined"
            />
            <TextField
              className="input"
              id="class"
              name="class"
              label="Turma"
              variant="outlined"
            />
            <TextField
              className="input"
              id="withdrawalDate"
              name="withdrawalDate"
              label="Data da Retirada"
              variant="outlined"
            />
            <TextField
              className="input"
              id="deliveryDate"
              name="deliveryDate"
              label="Data da Entrega"
              variant="outlined"
            />
            <div className="btn-form">
              <Button className="btn-lend">Emprestar</Button>
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
