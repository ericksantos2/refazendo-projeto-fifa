import { useEffect } from "react";
import useJogadores from "../../hooks/useJogadores";
import { EstatisticasDiv } from "./styled";

export default function EstatisticasGerais() {
  const { listaJogadores, getEstatisticas } = useJogadores();
  const jogadores = listaJogadores();

  useEffect(() => {
    getEstatisticas();
  }, [jogadores, getEstatisticas])

  return (
    <EstatisticasDiv>
      <p>Qualidade com mais jogadores: <span>Ouro</span></p>
      <p>Liga com mais jogadores: <span>La Liga</span></p>
      <p>Clube com mais jogadores: <span>Real Madrid</span></p>
      <p>Nacionalidade com mais jogadores: <span>Brasil</span></p>
    </EstatisticasDiv>
  )
}