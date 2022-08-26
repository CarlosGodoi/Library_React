import { Person } from '@mui/icons-material';
import React from 'react';
import { Container, ContainerHeader } from './style';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../Assets/styleImages/Logo.svg';

const Header = () => {
  return (
    <Container>
      <ContainerHeader>
        <div className="img-Logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="menu-user">
          <Person style={{ fill: '#FFC501' }} />
          <p>Usuário</p>
          <KeyboardArrowDownIcon />
        </div>
      </ContainerHeader>
    </Container>
  );
};

export default Header;
