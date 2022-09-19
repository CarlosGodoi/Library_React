import Login from '..';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Login', () => {
  it('should render Login component', () => {
    render(<Login />);

    expect(screen.getByTestId('login')).toBeInTheDocument();
  });
});
