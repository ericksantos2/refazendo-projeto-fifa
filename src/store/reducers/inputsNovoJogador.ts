import { createSlice } from '@reduxjs/toolkit';
import { inputForm } from '../../interfaces/inputs';
import { criaInput } from '../../utils/criaInput';

const initialState: inputForm[] = [
  {
    type: 'select',
    value: 'qualidade',
    label: 'Qualidade',
    inputs: [
      criaInput('Maior que ouro', 'ouro+'),
      criaInput('Ouro'),
      criaInput('Prata'),
      criaInput('Bronze'),
    ],
    required: true,
  },
  {
    type: 'select',
    value: 'liga',
    label: 'Liga',
    inputs: [criaInput('La liga')],
    required: true,
  },
  {
    type: 'select',
    value: 'clube',
    label: 'Clube',
    inputs: [criaInput('Real Madrid')],
    required: true,
  },
  {
    type: 'select',
    value: 'nacionalidade',
    label: 'Nacionalidade',
    inputs: [criaInput('Brasileiro')],
    required: true,
  },
];

const inputsNovoJogadorSlice = createSlice({
  name: 'inputsNovoJogador',
  initialState,
  reducers: {
    adicionaInput(
      state,
      { payload }: { payload: { alvo: string; valorInput: string } }
    ) {
      const inputIndex = state.findIndex(
        (input) => input.value === payload.alvo
      );
      if (
        inputIndex === -1 || // se o input não for encontrado
        !state[inputIndex].inputs || // se não tiver inputs
        state[inputIndex].inputs?.some(
          (item) => item.text === payload.valorInput
        ) // se já tiver o input
      )
        return;
      state.splice(inputIndex, 1, {
        ...state[inputIndex],
        inputs: [
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          ...state[inputIndex].inputs!,
          criaInput(payload.valorInput),
        ],
      });
    },
  },
});

export const { adicionaInput } = inputsNovoJogadorSlice.actions;
export default inputsNovoJogadorSlice.reducer;
