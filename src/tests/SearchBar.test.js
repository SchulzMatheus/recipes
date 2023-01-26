import React from 'react';
import { screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter/renderWithRouter';
import App from '../App';
// import chickenMock from './mocks/chickenMock';

const emailInput = 'email-input';
const execBtn = 'exec-search-btn';
const searchTopBtn = 'search-top-btn';
const searchInput = 'search-input';
const searchByName = 'name-search-radio';
const firstLetter = 'first-letter-search-radio';

describe('Testa o componente SearchBar', () => {
  it('Testa se existe os inputs radio e o botao de pesquisa', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const inputRadio = screen.getAllByRole('radio');
    const button = screen.getByTestId(execBtn);
    expect(inputRadio).toHaveLength(3);
    expect(button).toBeInTheDocument();
  });

  it('Testa se eh possivel pesquisar por ingrediente', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const btnSearch = screen.getByTestId(searchTopBtn);
    userEvent.click(btnSearch);
    await waitFor(() => {
      const input = screen.getByTestId(searchInput);
      userEvent.type(input, 'chicken');
    });
    const inputRadio = screen.getByTestId('ingredient-search-radio');
    userEvent.click(inputRadio);

    const btnExecSearch = screen.getByTestId(execBtn);
    userEvent.click(btnExecSearch);
  });

  it('Testa se eh possivel pesquisar por nome', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const btnSearch = screen.getByTestId(searchTopBtn);
    userEvent.click(btnSearch);
    await waitFor(() => {
      const input = screen.getByTestId(searchInput);
      userEvent.type(input, 'chicken');
    });
    const inputRadio = screen.getByTestId(searchByName);
    userEvent.click(inputRadio);

    const btnExecSearch = screen.getByTestId(execBtn);
    userEvent.click(btnExecSearch);
  });

  it('Testa se eh possivel pesquisar por primeira letra', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const btnSearch = screen.getByTestId(searchTopBtn);
    userEvent.click(btnSearch);
    await waitFor(() => {
      const input = screen.getByTestId(searchInput);
      userEvent.type(input, 'c');
    });
    const inputRadio = screen.getByTestId(firstLetter);
    userEvent.click(inputRadio);

    const btnExecSearch = screen.getByTestId(execBtn);
    userEvent.click(btnExecSearch);
  });

  it('Testa se aparece um global.alert se for digitado mais de 1 letra', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const btnSearch = screen.getByTestId(searchTopBtn);
    userEvent.click(btnSearch);
    await waitFor(() => {
      const input = screen.getByTestId(searchInput);
      userEvent.type(input, 'chicken');
    });
    const inputRadio = screen.getByTestId(firstLetter);
    userEvent.click(inputRadio);

    const btnExecSearch = screen.getByTestId(execBtn);
    userEvent.click(btnExecSearch);
  });

  it('Testa se eh possivel possivel procurar um ingrediente na rota /drinks', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const btnSearch = screen.getByTestId(searchTopBtn);
    userEvent.click(btnSearch);
    await waitFor(() => {
      const input = screen.getByTestId(searchInput);
      userEvent.type(input, 'grape');
    });
    const inputRadio = screen.getByTestId(searchByName);
    userEvent.click(inputRadio);

    const btnExecSearch = screen.getByTestId(execBtn);
    userEvent.click(btnExecSearch);
  });

  it('Testa se ao encontrar somente uma receita, envia para a rota /meals/:id', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/meals');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const btnSearch = screen.getByTestId(searchTopBtn);
    userEvent.click(btnSearch);
    await waitFor(() => {
      const input = screen.getByTestId(searchInput);
      userEvent.type(input, 'garlic');
    });
    const inputRadio = screen.getByTestId(searchByName);
    userEvent.click(inputRadio);

    const btnExecSearch = screen.getByTestId(execBtn);
    userEvent.click(btnExecSearch);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/meals/52815');
    });
  });

  it('Testa se ao encontrar somente uma bebida, envia para a rota /meals/:id', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const btnSearch = screen.getByTestId(searchTopBtn);
    userEvent.click(btnSearch);
    await waitFor(() => {
      const input = screen.getByTestId(searchInput);
      userEvent.type(input, 'grape');
    });
    const inputRadio = screen.getByTestId(searchByName);
    userEvent.click(inputRadio);

    const btnExecSearch = screen.getByTestId(execBtn);
    userEvent.click(btnExecSearch);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/drinks/12712');
    });
  });

  it('Testa se eh ao pesquisar mais de uma letra, mostra um global.alert', async () => {
    const { history } = renderWithRouter(<App />);
    jest.spyOn(global, 'alert');
    global.alert.mockImplementation(() => {});

    history.push('/meals');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const btnSearch = screen.getByTestId(searchTopBtn);
    userEvent.click(btnSearch);
    await waitFor(() => {
      const input = screen.getByTestId(searchInput);
      userEvent.type(input, 'cdsa');
    });
    const inputRadio = screen.getByTestId(firstLetter);
    userEvent.click(inputRadio);

    const btnExecSearch = screen.getByTestId(execBtn);
    userEvent.click(btnExecSearch);

    await waitFor(() => {
      expect(global.alert).toBeCalled();
    });
  });

  it('Testa se ao pesquisar chicken, mostra na tela o card da receita', async () => {
    const { history } = renderWithRouter(<App />);

    history.push('/meals');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const btnSearch = screen.getByTestId(searchTopBtn);
    userEvent.click(btnSearch);
    await waitFor(() => {
      const input = screen.getByTestId(searchInput);
      userEvent.type(input, 'chicken');
    });

    const inputRadio = screen.getByTestId(searchByName);
    userEvent.click(inputRadio);

    const btnExecSearch = screen.getByTestId(execBtn);
    userEvent.click(btnExecSearch);

    await waitFor(() => {
      expect(screen.getByTestId('0-recipe-card')).toBeInTheDocument();
    });
  });

  it('Testa procurar uma comida invalida', async () => {
    const { history } = renderWithRouter(<App />);
    jest.spyOn(global, 'alert');
    global.alert.mockImplementation(() => {});

    history.push('/meals');
    await waitForElementToBeRemoved(() => screen.getByTestId(emailInput));
    const btnSearch = screen.getByTestId(searchTopBtn);
    userEvent.click(btnSearch);
    await waitFor(() => {
      const input = screen.getByTestId(searchInput);
      userEvent.type(input, 'xablaubirobiro');
    });

    const inputRadio = screen.getByTestId(searchByName);
    userEvent.click(inputRadio);

    const btnExecSearch = screen.getByTestId(execBtn);
    userEvent.click(btnExecSearch);

    await waitFor(() => {
      expect(global.alert).toBeCalled();
    });
  });
});
