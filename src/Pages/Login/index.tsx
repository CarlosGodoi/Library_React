import React from 'react';
import { ContainerBg, ContainerLogin } from './styles';
import TextField from '@mui/material/TextField';
import Button, { ButtonProps } from '@mui/material/Button';
import styled from '@emotion/styled';
import api from '../../Services/api';
import logo from '../../Assets/styleImages/Logo.svg';

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'none',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderColor: '#FFC501',
    borderLeftWidth: 1,
    padding: '4px !important', // override inline-style
  },
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: '#FFC501',
  color: 'black',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#FFE17C',
  },
}));

const getData = () => {
  api()
    .then((res: any) => console.log(res.data))
    .catch((err: any) => console.log(err));
};

console.log(getData());

const Login = () => {
  return (
    <ContainerBg>
      <ContainerLogin>
        <div className="LogoTitle">
          <img src={logo} alt="" />
        </div>
        <div className="Inputs">
          <ValidationTextField
            margin="dense"
            className="email"
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <ValidationTextField
            margin="dense"
            className="senha"
            id="outlined-basic"
            name="password"
            label="Senha"
            variant="outlined"
          />

          <div className="ForgotIt">
            <p>Esqueci minha senha</p>
          </div>
        </div>

        <div className="btn">
          <ColorButton size="large" fullWidth>
            Entrar
          </ColorButton>
        </div>
      </ContainerLogin>
    </ContainerBg>
  );
};

export default Login;
