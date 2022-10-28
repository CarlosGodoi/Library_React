import React from 'react';
import { Card, ContainerBg, Main } from './styles';
import add from '../../Assets/styleImages/add_circle.svg';
import contact from '../../Assets/styleImages/contacts.svg';
import pending from '../../Assets/styleImages/pending.svg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <ContainerBg data-testId="home">
      <Main>
        <Card>
          <div
            data-testId="add-book"
            className="img-card"
            onClick={() => navigate('/cadastrarLivro')}
          >
            <img src={add} alt="Icone adicionar" />
          </div>
          <div className="title" onClick={() => navigate('/cadastrarLivro')}>
            <span>Cadastrar novo livro</span>
          </div>
        </Card>
        <Card>
          <div
            data-testId="biblioteca"
            className="img-card"
            onClick={() => navigate('/biblioteca')}
          >
            <img src={contact} alt="Icone adicionar" />
          </div>
          <div className="title" onClick={() => navigate('/biblioteca')}>
            <span>Biblioteca</span>
          </div>
        </Card>
        <Card>
          <div
            data-testId="card-emprestimo"
            className="img-card"
            onClick={() => navigate('/historicoEmprestimo')}
          >
            <img src={pending} alt="Icone adicionar" />
          </div>
          <div
            className="title"
            onClick={() => navigate('/historicoEmprestimo')}
          >
            <span>Histórico de empréstimo</span>
          </div>
        </Card>
      </Main>
    </ContainerBg>
  );
};

export default Home;
