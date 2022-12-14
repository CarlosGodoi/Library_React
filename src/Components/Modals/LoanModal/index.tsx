import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';
import { IBook } from '../../../Pages/AddBook/interface';
import loanHistory from '../../../Services/loanHistory';
import { BgModal, ContainerModal } from './styles';
import { ClickAwayListener } from '@mui/base';
import { useMessage } from '../../Context/MessageContext';

interface IProps {
  closeModal: () => void;
  selected: IBook;
}

const LoanBookModal = ({ closeModal, selected }: IProps) => {
  const [rentBooks, setRentBooks] = useState([]);
  const defaultMaterialTheme = createTheme();
  const { setMessage } = useMessage();

  useEffect(() => {
    loanHistory()
      .then((res: any) => {
        setRentBooks(res);
      })
      .catch((err) => {
        setMessage({
          content: '' + err,
          display: true,
          severity: 'error',
        });
      });
  }, []);

  const modalClosed = () => {
    closeModal();
  };

  return (
    <BgModal>
      <ClickAwayListener onClickAway={() => modalClosed()}>
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
                data={rentBooks}
                title="Tabela comparativa"
                columns={[
                  { title: 'Aluno', field: 'studentName' },
                  { title: 'Turma', field: 'class' },
                  { title: 'Livro', field: 'bookTitle' },
                  { title: 'Data de Retirada', field: 'withdrawalDate' },
                  { title: 'Data de Entrega', field: 'deliveryDate' },
                ]}
                options={{
                  filtering: false,
                  search: false,
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
                  rowStyle: {
                    fontSize: '1rem',
                    fontStyle: 'Roboto',
                    fontWeight: '500',
                  },
                }}
              />
            </ThemeProvider>
          </div>
        </ContainerModal>
      </ClickAwayListener>
    </BgModal>
  );
};

export default LoanBookModal;
