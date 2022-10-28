import Login from '..';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { useMessage } from '../../../Components/Context/MessageContext';
import { useAuth } from '../../../Components/Context/UserContext';
import { act } from 'react-dom/test-utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

jest.mock('../../../Components/Context/MessageContext');

const message = { useMessage };
const STATE_SPY = jest.spyOn(message, 'useMessage');
const CLICK_HANDLER = jest.fn();
STATE_SPY.mockReturnValue({
  setMessage: CLICK_HANDLER,
});

jest.mock('../../../Components/Context/UserContext');

const login = { useAuth };
const STATE_SPY2 = jest.spyOn(login, 'useAuth');

STATE_SPY2.mockReturnValue({
  handleLogin: async () => {
    return Promise.resolve(false);
  },
});

const getLoginServer = setupServer(
  rest.get(`*login`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
);

const postLoginServer = setupServer(
  rest.post(`*login`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
);

beforeEach(() => {
  getLoginServer.listen();
  postLoginServer.listen();
});

afterEach(() => {
  getLoginServer.close();
  postLoginServer.close();
});

describe('Integrating unit tests into the login page', () => {
  it('should render Login component', () => {
    render(<Login />);
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  it('should show success message when user login is correct and navigate to home', async () => {
    render(<Login />, { wrapper: MemoryRouter });
    getLoginServer.use(
      rest.get('*login', (req, res, ctx) => {
        return res.once(
          ctx.status(200),
          ctx.json([
            {
              email: 'admin@admin.com.br',
              password: 'admin123',
            },
            {
              email: 'gustavo@gmail.com',
              password: 'gustavokunde',
            },
            {
              email: 'gx2tecnologia@gx2.com.br',
              password: 'gx2@123',
            },
          ]),
        );
      }),
    );

    const inputEmail = screen.getByTestId('input-email').querySelector('input');

    const inputPassword = screen
      .getByTestId('input-password')
      .querySelector('input');

    fireEvent.change(inputEmail, { target: { value: 'admin@admin.com.br' } });
    fireEvent.change(inputPassword, { target: { value: 'admin123' } });
    userEvent.click(screen.getByTestId('entrar'));

    await waitFor(() => {
      expect(CLICK_HANDLER).toHaveBeenCalledWith({
        content: 'Login realizado',
        display: true,
        severity: 'success',
      });
    });

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalledWith('/home');
    });
  });

  fit('should show error message on screen if login is incorrect', async () => {
    render(<Login />, { wrapper: MemoryRouter });

    postLoginServer.use(
      rest.post(`*login`, (req, res, ctx) => {
        return res.once(ctx.status(200));
      }),
    );
    const inputEmail = screen.getByTestId('input-email').querySelector('input');

    const inputPassword = screen
      .getByTestId('input-password')
      .querySelector('input');

    fireEvent.change(inputEmail, { target: { value: 'admin@admin' } });
    fireEvent.change(inputPassword, { target: { value: '123abc' } });
    userEvent.click(screen.getByTestId('entrar'));

    console.log(inputEmail);
    console.log(inputPassword);

    await waitFor(() => {
      expect(CLICK_HANDLER).toHaveBeenCalledWith({
        content: 'Usuário não cadastrado',
        display: true,
        severity: 'error',
      });
    });

    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalledWith('/');
    });
  });
});
