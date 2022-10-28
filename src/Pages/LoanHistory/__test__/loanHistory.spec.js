import React from 'react';
import '@testing-library/jest-dom';
import LoanHistory from '..';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Unit tests component LoanHistory', () => {
  it('should render component LoanHistory', () => {
    render(<LoanHistory />, { wrapper: MemoryRouter });

    expect(screen.getByTestId('loanHistory')).toBeInTheDocument();
  });

  it('should mount the table on screen', async () => {
    const server = setupServer(
      rest.get(`*books`, (req, res, ctx) => {
        return res.once(
          ctx.status(200),
          ctx.json([
            {
              id: '45408eb3-3e1b-4912-96c5-d96f294eff4a',
              tittle: 'Mais Esperto que o Diabo',
              author: 'Napoleon Hill',
              genre: 'Autoajuda',
              status: {
                description: 'teste',
                isActive: false,
              },
              image: './assets/livro01.png',
              systemEntryDate: '02/01/2020',
              synopsis:
                'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.',
              rentHistory: [
                {
                  studentName: 'Gustavo Kunde',
                  class: 'T312',
                  withdrawalDate: '29/05/2022',
                  deliveryDate: '19/06/2022',
                  isBorrowed: true,
                },
              ],
            },
          ]),
        );
      }),
    );
    server.listen();

    render(<LoanHistory />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getByText('Mais Esperto que o Diabo')).toBeInTheDocument();
    });
    server.close();
  });
});
