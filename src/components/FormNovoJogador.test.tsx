import { render, screen } from '@testing-library/react';
import Form from './Form';
import { inputForm } from '../interfaces/inputs';

describe('Testes do formulário', () => {
  test('Teste submit', () => {
    const handleSubmit = jest.fn();
    const inputs: inputForm[] = [
      {
        label: 'Qualidade',
        type: 'select',
        value: 'qualidade',
      },
      {
        label: 'Liga',
        type: 'select',
        value: 'liga',
      },
    ];
  
    render(
      <>
        <Form inputs={inputs} handleSubmit={handleSubmit} />
      </>
    );
    const botaoEnviar = screen.getByText('Enviar');
    botaoEnviar.click();

    const expectedOutput = inputs.reduce(
      (state, { value }) => ({ ...state, [value]: {} }),
      {}
    );

    expect(handleSubmit).toHaveBeenCalledWith(expectedOutput);
  });
});
