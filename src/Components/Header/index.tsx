import { Person } from '@mui/icons-material';
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Container, ContainerHeader } from './style';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../Assets/styleImages/Logo.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerHeader>
        <div className="img-Logo">
          <img src={logo} alt="Logo" />
        </div>

        <PopupState variant="popover" popupId="popup-menu">
          {(PopupState) => (
            <>
              <div className="menu-user" {...bindTrigger(PopupState)}>
                <Person style={{ fill: '#FFC501' }} />
                <p>Usuário</p>
                <KeyboardArrowDownIcon />
              </div>
              <Menu {...bindMenu(PopupState)}>
                <MenuItem
                  onClick={() => {
                    PopupState.close();
                    navigate('/');
                  }}
                  style={{
                    width: '110px',
                  }}
                >
                  Sair
                </MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
      </ContainerHeader>
    </Container>
  );
};

export default Header;
