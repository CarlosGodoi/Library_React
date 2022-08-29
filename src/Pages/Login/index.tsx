import React from 'react';
import { ContainerBg, ContainerLogin } from './styles';
import TextField from '@mui/material/TextField';
import Button, { ButtonProps } from '@mui/material/Button';
import styled from '@emotion/styled';
import api from '../../Services/api';
import logo from '../../Assets/styleImages/Logo.svg';
import { useNavigate } from 'react-router-dom';

const getData = () => {
  api()
    .then((res: any) => console.log(res.data))
    .catch((err: any) => console.log(err));
};

console.log(getData());

const Login = () => {
  const navigate = useNavigate();
  return (
    <ContainerBg>
      <ContainerLogin>
        <div className="LogoTitle">
          <img src={logo} alt="" />
        </div>
        <div className="Inputs">
          <TextField
            margin="dense"
            className="email"
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
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
          <Button
            className="button-submit"
            size="large"
            fullWidth
            onClick={() => {
              navigate('/home');
            }}
          >
            Entrar
          </Button>
        </div>
      </ContainerLogin>
    </ContainerBg>
  );
};

export default Login;
