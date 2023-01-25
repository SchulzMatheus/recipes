import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Farewell, front-end', () => {
  it('testa se o botão fica disabilitado ou habilitado', () => {
    render(<App />);
    const view = screen.getByText(/email:/i);
    const textInput = within(view).getByRole('textbox');
    userEvent.type(textInput, 'teste@teste.com');

    const button = screen.getByRole('button', {
      name: /enter/i,
    });

    expect(button).toBeDisabled();

    const view2 = screen.getByText(/senha:/i);
    const senhaInput = within(view2).getByRole('textbox');
    userEvent.type(senhaInput, '1234567');

    expect(button).not.toBeDisabled();
  });
  it('testa se redireciona', () => {
    render(<App />);
    const view = screen.getByText(/email:/i);
    const textInput = within(view).getByRole('textbox');
    userEvent.type(textInput, 'teste@teste.com');

    const button = screen.getByRole('button', {
      name: /enter/i,
    });

    const view2 = screen.getByText(/senha:/i);
    const senhaInput = within(view2).getByRole('textbox');
    userEvent.type(senhaInput, '1234567');
    userEvent.click(button);

    expect(window.location.pathname).toBe('/meals');
  });
});
