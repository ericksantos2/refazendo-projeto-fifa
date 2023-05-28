import { useEffect } from 'react';
import useJogadores from '../../hooks/useJogadores';
import Form, { TypeValues } from '../Form';
import inputsForm from './inputs';

export default function FormNovoJogador() {
  const { criaJogador, listaJogadores } = useJogadores();

  function handleSubmit(resultados: TypeValues) {
    criaJogador({
      qualidade: resultados.qualidade,
      liga: resultados.liga,
      clube: resultados.clube,
      nacionalidade: resultados.nacionalidade,
    });
  }

  useEffect(() => {
    console.log(listaJogadores());
  }, [listaJogadores]);

  return <Form handleSubmit={handleSubmit} inputs={inputsForm} />;
}
