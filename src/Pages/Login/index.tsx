import React from 'react';
import { ContainerBg, ContainerLogin } from './styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../Assets/styleImages/Logo.svg';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { validationSchema, initialValues } from './validation';
import { ILogin } from './interface';
import { useAuth } from '../../Components/Context/UserContext';
import { useMessage } from '../../Components/Context/MessageContext';
import { useLoading } from '../../Components/Context/LoadingContext';

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const { setMessage } = useMessage();
  const { setLoading } = useLoading();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: ILogin) {
      setLoading({ visible: true });
      handleLogin(values)
        .then((resp) => {
          if (resp === true)
            setMessage({
              content: 'Login realizado',
              display: true,
              severity: 'success',
            });
          setLoading({ visible: false });
          navigate('/home');
        })
        .catch((err) =>
          setMessage({
            content: `O seguinte erro ocorreu: ${err}`,
            display: true,
            severity: 'error',
          }),
        );
    },
  });

  return (
    <ContainerBg data-testid="login">
      <ContainerLogin>
        <div className="LogoTitle">
          <img src={logo} alt="" />
        </div>
        <form className="Inputs" onSubmit={formik.handleSubmit}>
          <TextField
            data-testid="input-email"
            margin="dense"
            className="email"
            name="email"
            type="email"
            value={formik.values.email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            data-testid="input-password"
            margin="dense"
            className="senha"
            id="outlined-basic"
            name="password"
            type="password"
            value={formik.values.password}
            label="Senha"
            variant="outlined"
            onChange={formik.handleChange}
            error={Boolean(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <div className="ForgotIt">
            <p>Esqueci minha senha</p>
          </div>
          <div className="btn">
            <Button
              data-testid="Entrar"
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
