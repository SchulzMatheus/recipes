import React from 'react';
import { screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import renderWithRouter from './renderWithRouter/renderWithRouter';
import App from '../App';

describe('Testa o componente <Header />', () => {
  it('Verifica se o componente <Header /> possui o botao perfil, titulo e botao de pesquisa.', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');
    await waitForElementToBeRemoved(() => screen.getByTestId('email-input'));
    const profileButton = screen.getByTestId('profile-top-btn');
    const pageTitle = screen.getByTestId('page-title');
    const searchButton = screen.getByTestId('search-top-btn');
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botao de pesquisar, o input aparece', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');
    await waitForElementToBeRemoved(() => screen.getByTestId('email-input'));
    const searchButton = screen.getByTestId('search-top-btn');
    searchButton.click();
    await waitFor(() => {
      const searchInput = screen.getByTestId('search-input');
      expect(searchInput).toBeInTheDocument();
    });
  });
});
