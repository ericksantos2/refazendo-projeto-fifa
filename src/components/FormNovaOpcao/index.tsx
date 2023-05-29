import { useDispatch } from 'react-redux';
import Form, { TypeValues } from '../Form';
import inputsForm from './inputs';
import { adicionaInput } from '../../store/reducers/inputsNovoJogador';

export default function FormNovaOpcao() {
  const dispatch = useDispatch();

  function handleSubmit(res: TypeValues) {
    Object.entries(res)
      .reduce<{ alvo: string; valor: string }[]>((state, [key, { value }]) => {
        if (!value) return state;
        return [...state, { alvo: key, valor: value }];
      }, [])
      .forEach((resultado) => {
        dispatch(
          adicionaInput({ alvo: resultado.alvo, valorInput: resultado.valor })
        );
      });
  }

  return (
    <Form
      style={{ gridArea: 'formSelect' }}
      inputs={inputsForm}
      handleSubmit={handleSubmit}
    />
  );
}
