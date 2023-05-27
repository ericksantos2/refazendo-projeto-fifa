import { useEffect } from 'react';
import { useNovoJogador, useListaJogadores } from '../../hooks/useJogadores';
import Form, { TypeValues } from '../Form';
import inputsForm from './inputs';

export default function FormNovoJogador() {
  const novoJogador = useNovoJogador();
  const listaJogadores = useListaJogadores();

  function handleChange(resultados: TypeValues) {
    novoJogador({
      qualidade: resultados.qualidade,
      liga: resultados.liga,
      clube: resultados.clube,
      nacionalidade: resultados.nacionalidade,
    });
  }

  useEffect(() => {
    console.log(listaJogadores());
  }, [listaJogadores]);

  return <Form handleChange={handleChange} inputs={inputsForm} />;
}
