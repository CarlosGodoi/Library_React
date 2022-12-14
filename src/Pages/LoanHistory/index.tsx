import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBg, ContainerMain, ContainerTable } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import loanHistory from '../../Services/loanHistory';
import { useMessage } from '../../Components/Context/MessageContext';

const LoanHistory = () => {
  const navigate = useNavigate();
  const defaultMaterialTheme = createTheme();

  const [rentHistory, setRentHistory] = useState([]);
  const { setMessage } = useMessage();

  useEffect(() => {
    loanHistory()
      .then((res: any) => {
        console.log('entrei aqui ', res);
        setRentHistory(res);
      })
      .catch((err) => {
        console.log(err, 'aqui no erro');
        setMessage({
          content: '' + err,
          display: true,
          severity: 'error',
        });
      });
  }, []);
  return (
    <ContainerBg data-testId="loanHistory">
      <ContainerMain>
        <div className="back-home" onClick={() => navigate('/home')}>
          <ArrowBackIosIcon fontSize="small" />
          <p>Home</p>
          <h3>/Histórico de Empréstimos</h3>
        </div>
        <ContainerTable>
          <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              data-testId="table"
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
        </ContainerTable>
      </ContainerMain>
    </ContainerBg>
  );
};

export default LoanHistory;
