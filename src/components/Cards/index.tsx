import useJogadores from '../../hooks/useJogadores';
import { Card, CardsDiv } from './styled';

export default function Cards() {
  const { lista: jogadores } = useJogadores();

  return (
    <CardsDiv>
      {jogadores.map((jogador, index) => (
        <Card key={index}>
          <p>
            Qualidade: <span>{jogador.qualidade.text}</span>
          </p>
          <p>
            Liga: <span>{jogador.liga.text}</span>
          </p>
          <p>
            Clube: <span>{jogador.clube.text}</span>
          </p>
          <p>
            Nacionalidade: <span>{jogador.nacionalidade.text}</span>
          </p>
        </Card>
      ))}
    </CardsDiv>
  );
}
