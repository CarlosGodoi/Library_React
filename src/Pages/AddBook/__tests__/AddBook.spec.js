import React from 'react';
import '@testing-library/jest-dom';
import AddBook from '..';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { useMessage } from '../../../Components/Context/MessageContext';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('../../../Components/Context/MessageContext');

const hookMessage = { useMessage };
const STATE_SPY = jest.spyOn(hookMessage, 'useMessage');
const CLICK_HANDLER = jest.fn();
STATE_SPY.mockReturnValue({
  setMessage: CLICK_HANDLER,
});

const getBookServer = setupServer(
  rest.get(`*books`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
);

const postBookServer = setupServer(
  rest.post(`*books`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
);

beforeEach(() => {
  postBookServer.listen();
  getBookServer.listen();
});
afterEach(() => {
  postBookServer.close();
  getBookServer.close();
});
describe('Create new book tests', () => {
  it('should verify if fields are requireds', async () => {
    render(<AddBook />, { wrapper: MemoryRouter });

    userEvent.click(screen.getByText('Salvar'));

    await waitFor(() => {
      expect(screen.getByText('Titulo obrigatório')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Autor obrigatório')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Gênero obrigatório')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText('Data de entrada obrigatório'),
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Sinopse obrigatório')).toBeInTheDocument();
    });
  });

  it('should navigate when cancel button is clicked', async () => {
    render(<AddBook />, { wrapper: MemoryRouter });

    userEvent.click(screen.getByText('Cancelar'));

    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalledWith('/home');
    });
  });

  fit('should show success message and navigate after create book', async () => {
    render(<AddBook />, { wrapper: MemoryRouter });

    postBookServer.use(
      rest.post(`*book`, (req, res, ctx) => {
        return res.once(ctx.status(201));
      }),
    );

    const title = screen.getByTestId('input-title').querySelector('input');

    const author = screen.getByTestId('input-author').querySelector('input');

    const sinopsys = screen
      .getByTestId('input-synopsis')
      .querySelector('textarea');

    const entryDate = screen.getByTestId('input-date').querySelector('input');

    const image = screen.getByTestId('input-image');

    const genreSelect = screen.getByTestId('genre');

    fireEvent.change(genreSelect, { target: { value: 'Fantasia' } });

    fireEvent.change(title, { target: { value: 'teste' } });
    fireEvent.change(author, { target: { value: 'desconhecido' } });
    fireEvent.change(sinopsys, { target: { value: 'jksh jkshkjs sui' } });
    fireEvent.change(entryDate, { target: { value: '10/10/2022' } });

    let file;
    file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
    fireEvent.change(image, { target: { files: [file] } });

    act(() => {
      userEvent.click(screen.getByText('Salvar'));
    });

    await waitFor(() => {
      expect(CLICK_HANDLER).toHaveBeenCalledWith({
        content: 'Dados enviados com sucesso',
        display: true,
        severity: 'success',
      });
    });

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/biblioteca');
    });
  });
});
