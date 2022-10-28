import React from 'react';
import '@testing-library/jest-dom';
import EditBook from '..';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useMessage } from '../../../Components/Context/MessageContext';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { get } from 'http';

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

const postServer = setupServer(
  rest.post(`*books`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
);

const getServer = setupServer(
  rest.get(`*books`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
);

const putServer = setupServer(
  rest.put(`*books`, (req, res, ctx) => {
    return res.once(ctx.status(200));
  }),
);

beforeEach(() => {
  postServer.listen();
  getServer.listen();
  putServer.listen();
});

afterEach(() => {
  postServer.close();
  getServer.close();
  putServer.close();
});

describe('Unit test EditBook component', () => {
  it('should render EditBook component', () => {
    render(<EditBook />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('edit')).toBeInTheDocument();
  });

  it('should navigate when cancel button is clicked', async () => {
    render(<EditBook />, { wrapper: MemoryRouter });

    userEvent.click(screen.getByText('Cancelar'));

    await waitFor(() => {
      expect(mockedUsedNavigate).toBeCalledWith('/biblioteca');
    });
  });

  it('should show success message and navigate after edit book', async () => {
    getServer.use(
      rest.get(`*books`, (req, res, ctx) => {
        return res.once(ctx.status(200));
      }),
    );

    render(<EditBook />, { wrapper: MemoryRouter });

    postServer.use(
      rest.put(`*books`, (req, res, ctx) => {
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

    fireEvent.change(genreSelect, { target: { value: 'História' } });

    fireEvent.change(title, { target: { value: 'teste' } });
    fireEvent.change(author, { target: { value: 'desconhecido' } });
    fireEvent.change(sinopsys, { target: { value: 'estou testando' } });
    fireEvent.change(entryDate, { target: { value: '10/10/2023' } });

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
