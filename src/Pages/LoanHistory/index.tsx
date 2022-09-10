import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBg, ContainerMain, ContainerTable } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import GetAllBooks from '../../Services/GetAllBooks';

const LoanHistory = () => {
  const navigate = useNavigate();
  const defaultMaterialTheme = createTheme();

  const [books, setBooks] = useState([]);
  const [rentHistory, setRentHistory] = useState([]);

  useEffect(() => {
    GetAllBooks()
      .then((res: any) => setBooks(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ContainerBg>
      <ContainerMain>
        <div className="back-home" onClick={() => navigate('/home')}>
          <ArrowBackIosIcon fontSize="small" />
          <p>Home</p>
          <h3>/Histórico de Empréstimos</h3>
        </div>
        <ContainerTable>
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
        </ContainerTable>
      </ContainerMain>
    </ContainerBg>
  );
};

export default LoanHistory;
