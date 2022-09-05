import React from 'react';
import { ContainerBg, ContainerLogin } from './styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../Assets/styleImages/Logo.svg';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { validationSchema, initialValues } from './validation';
import { ILogin } from './interface';
import Loading from '../../Components/Loading';
import { useAuth } from '../../Components/Context/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: ILogin) {
      handleLogin(values)
        .then((resp) => {
          if (resp === true) navigate('/home');
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
