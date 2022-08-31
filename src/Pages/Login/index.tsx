import React, { useEffect, useState } from 'react';
import { ContainerBg, ContainerLogin } from './styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../Assets/styleImages/Logo.svg';
import { useNavigate } from 'react-router-dom';
import userAuth from '../../Services/auth';
import { useFormik } from 'formik';
import { validationSchema, initialValues } from './validation';

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  const navigate = useNavigate();

  useEffect(() => {
    userAuth()
      .then((res: any) => setUsers(res))
      .catch((err: any) => console.log(err));
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: ILogin) {
      userAuth()
        .then((res: any) => {
          setUsers(res);
          navigate('/home');
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <ContainerBg>
      <ContainerLogin>
        <div className="LogoTitle">
          <img src={logo} alt="" />
        </div>
        <form className="Inputs" onSubmit={formik.handleSubmit}>
          <TextField
            margin="dense"
            className="email"
            name="email"
            value={formik.values.email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
          />
          <TextField
            margin="dense"
            className="senha"
            id="outlined-basic"
            name="password"
            value={formik.values.password}
            label="Senha"
            variant="outlined"
            onChange={formik.handleChange}
          />

          <div className="ForgotIt">
            <p>Esqueci minha senha</p>
          </div>
          <div className="btn">
            <Button
              type="submit"
              className="button-submit"
              size="large"
              fullWidth
            >
              Entrar
            </Button>
          </div>
        </form>
      </ContainerLogin>
    </ContainerBg>
  );
};

export default Login;
