import React from 'react';
import Library from '..';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import RenderModal from '../RenderModal';
import { get } from 'http';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

const server = setupServer(
  rest.get(`*books`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
);

beforeEach(() => server.listen());
afterEach(() => server.close());

describe('Component library unit tests', () => {
  it('should render Library component', () => {
    render(<Library />, { wrapper: MemoryRouter });
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should list the teams on screen', async () => {
    render(<Library />, { wrapper: MemoryRouter });
    server.use(
      rest.get(`*books`, (req, res, ctx) => {
        return res.once(
          ctx.status(200),
          ctx.json([
            {
              id: '928ccbda-16fe-4d6c-bdb2-08d4ee28ac0e',
              tittle: 'Hereges de Duna',
              author: 'Frank Herbert',
              genre: 'Ficção Cientifica',
              status: {
                isActive: true,
                description: '',
              },
              image: './assets/livro02.png',
              systemEntryDate: '02/01/2020',
              synopsis:
                'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
              rentHistory: [
                {
                  isBorrowed: false,
                },
                {
                  studentName: 'eduardo',
                  withdrawalDate: '13/09/2022',
                  deliveryDate: '14/10/2022',
                  class: 'T96',
                  isBorrowed: true,
                },
              ],
            },
          ]),
        );
      }),
    );
    await waitFor(() => {
      expect(screen.getByText('Hereges de Duna')).toBeInTheDocument();
    });
  });

  it('should receive the data and perform a search', async () => {
    render(<Library />, { wrapper: MemoryRouter });

    // const form = screen.getByRole('form');
    const search = screen.getByTestId('input-search');
    const select = screen.getByTestId('genre');

    fireEvent.change(search, { target: { value: 'autor' } });
    fireEvent.change(select, { target: { value: 'author' } });

    act(() => {
      userEvent.click(screen.getByTestId('buscar'));
    });
  });

  it('should show modalBook', () => {
    render(<Library />, { wrapper: MemoryRouter });

    const handleClose = jest.fn();
    const open = jest.fn();
    const Modal = (
      <RenderModal
        closeModal={handleClose}
        objModal={{
          modalBook: true,
          modalInactiveBook: false,
          modalLendBook: false,
          modalLoanBook: false,
        }}
      />
    );

    expect(screen.getByText('modalBook')).toBeTruthy();
  });
});
