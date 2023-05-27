import { inputForm } from "../../interfaces/inputs";
import { criaInput } from "../../utils/criaInput";

const inputsForm: inputForm[] = [
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
  },
  {
    type: 'select',
    value: 'liga',
    label: 'Liga',
    inputs: [criaInput('La liga')],
  },
  {
    type: 'select',
    value: 'clube',
    label: 'Clube',
    inputs: [criaInput('Real Madrid')],
  },
  {
    type: 'select',
    value: 'nacionalidade',
    label: 'Nacionalidade',
    inputs: [criaInput('Brasileiro')],
  },
];

export default inputsForm;
