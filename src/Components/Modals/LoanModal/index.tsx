import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import loanHistory from '../../../Services/loanHistory';
import { BgModal, ContainerModal } from './styles';

interface IProps {
  closeModal: () => void;
  open: boolean;
}

const LoanBookModal = ({ closeModal, open }: IProps) => {
  const [rentHistory, setRentHistory] = useState([]);
  const defaultMaterialTheme = createTheme();

  useEffect(() => {
    loanHistory()
      .then((res: any) => setRentHistory(res))
      .catch((err) => console.log(err));
  }, []);

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
          <h3>Histórico de empréstimos do livro</h3>
        </div>
        <div className="container-table">
          <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              data={rentHistory}
              title="Tabela comparativa"
              columns={[
                { title: 'Aluno', field: 'studentName' },
                { title: 'Turma', field: 'class' },
                { title: 'Livro', field: 'bookTitle' },
                { title: 'Data de Retirada', field: 'withdrawalDate' },
                { title: 'Data de Entrega', field: 'deliveryDate' },
              ]}
              options={{
                filtering: true,
                search: true,
                paging: true,
                headerStyle: {
                  backgroundColor: '#FFC501',
                  color: '#000000',
                  fontSize: '0.9rem',
                  fontStyle: 'Roboto',
                  fontWeight: '600',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                },
              }}
            />
          </ThemeProvider>
        </div>
      </ContainerModal>
    </BgModal>
  ) : (
    <div></div>
  );
};

export default LoanBookModal;
