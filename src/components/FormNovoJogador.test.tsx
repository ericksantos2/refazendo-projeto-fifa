import { render, screen } from '@testing-library/react';
import Form from './Form';
import { inputForm } from '../interfaces/inputs';

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

describe('Testes do formulário', () => {
  test('Teste se os inputs estão certos', async () => {
    const handleSubmit = jest.fn();
    render(
      <>
        <Form inputs={inputs} handleSubmit={handleSubmit} />
      </>
    );
    ['Qualidade', 'Liga']
      .map((item) => screen.getByLabelText(item))
      .forEach((item) => expect(item).toBeDefined());
    const inputNaoExistente = (() => {
      try {
        return screen.getByLabelText('Clube');
      } catch {
        return undefined;
      }
    })();
    expect(inputNaoExistente).toBeUndefined();
  });

  test('Teste submit', () => {
    const handleSubmit = jest.fn();
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
