import useJogadores from '../../hooks/useJogadores';
import Form, { TypeValues } from '../Form';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function FormNovoJogador() {
  const { criaJogador } = useJogadores();
  const inputsForm = useSelector(
    (state: RootState) => state.inputsNovoJogadorSlice
  );

  function handleSubmit(resultados: TypeValues) {
    criaJogador({
      qualidade: resultados.qualidade,
      liga: resultados.liga,
      clube: resultados.clube,
      nacionalidade: resultados.nacionalidade,
    });
  }

  return (
    <Form
      style={{ gridArea: 'form' }}
      handleSubmit={handleSubmit}
      inputs={inputsForm}
      alvoReset='jogadores'
    />
  );
}
