import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import { ContainerBg, ContainerMain, ContainerTable } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import allBooks from '../../Services/GetAllBooks';

const LoanHistory = () => {
  const navigate = useNavigate();

  const [loanHistory, setLoanHistory] = useState([]);
  console.log(loanHistory);

  loanHistory.map((book: any) => console.log(book.rentHistory));

  useEffect(() => {
    allBooks()
      .then((res: any) => setLoanHistory(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ContainerBg>
      <Header />
      <ContainerMain>
        <div className="back-home" onClick={() => navigate('/home')}>
          <ArrowBackIosIcon fontSize="small" />
          <p>Home</p>
          <h3>/Histórico de Empréstimos</h3>
        </div>
        <ContainerTable></ContainerTable>
      </ContainerMain>
    </ContainerBg>
  );
};

export default LoanHistory;
