import React from 'react';
import '@testing-library/jest-dom';
import Home from '..';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Unit tests Home Component', () => {
  it('should render Home component', () => {
    render(<Home />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('should navigate after clicking to the respective route', async () => {
    render(<Home />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('card-emprestimo')).toBeInTheDocument();

    userEvent.click(screen.getByText('Histórico de empréstimo'));

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/historicoEmprestimo');
    });

    expect(screen.getByTestId('add-book')).toBeInTheDocument();

    userEvent.click(screen.getByText('Cadastrar novo livro'));

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/cadastrarLivro');
    });

    expect(screen.getByTestId('biblioteca')).toBeInTheDocument();

    userEvent.click(screen.getByText('Biblioteca'));

    await waitFor(() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/biblioteca');
    });
  });
});
