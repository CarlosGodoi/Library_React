import React, { useEffect, useState } from 'react';
import { ContainerBg, ContainerLogin } from './styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../Assets/styleImages/Logo.svg';
import { useNavigate } from 'react-router-dom';
import userAuth from '../../Services/auth';

const Login = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    userAuth()
      .then((res: any) => setData(res))
      .catch((err: any) => console.log(err));
  }, []);

  console.log(data);
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
