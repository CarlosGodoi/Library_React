import Login from '..';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import useMessage from '../../../Components/Context/MessageContext';
import { act } from 'react-dom/test-utils';

jest.mock('../../../Components/Context/MessageContext');

const messageMock = { useMessage };
const STATE_SPY = jest.spyOn(messageMock, 'useMessage');
const CLICK_HANDLER = jest.fn();
STATE_SPY.mockReturnValue({
  setMessage: CLICK_HANDLER,
});

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

const homepageErrors = console.error.bind(console.error);
beforeAll(() => {
  console.error = (errormessage) => {
    const suppressedErrors = errormessage
      .toString()
      .includes('Warning: Failed prop type:');

    !suppressedErrors && homepageErrors(errormessage);
  };
});
afterAll(() => {
  console.error = homepageErrors;
});

describe('Integrating unit tests into the login page', () => {
  it('should render Login component', () => {
    render(<Login />);

    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  it('should test if input email textfield doesnt accept fields that are not emails', async () => {
    render(<Login />, { wrapper: MemoryRouter });

    const inputMail = screen.getByTestId('input-email').querySelector('input');
    expect(inputMail.type).toBe('email');
  });

  it('should show error modal when inputs are wrong', async () => {
    render(<Login />, { wrapper: MemoryRouter });

    const inputMail = screen.getByTestId('input-email').querySelector('input');

    const inputPass = screen.getByTestId('input-email').querySelector('input');

    fireEvent.change(inputMail, {
      target: { value: 'eduardo@gx2.com.br' },
    });

    fireEvent.change(inputPass, {
      target: { value: '123456' },
    });

    act(() => {
      userEvent.click(screen.getByText('Entrar'));
    });

    await waitFor(() => {
      expect(CLICK_HANDLER).toHaveBeenCalledWith({
        content: 'Usuário ou senha inválida',
        display: true,
        severity: 'error',
      });
    });
  });
});
