import useEstatisticas from '../../hooks/useEstatisticas';
import { EstatisticasDiv } from './styled';
import {
  ItemEstatisticas,
  KeysEstatisticas,
} from '../../interfaces/estatisticas';

const textos = {
  qualidade: 'Qualidades',
  liga: 'Ligas',
  clube: 'Clubes',
  nacionalidade: 'Nacionalidades',
};

export default function Estatisticas() {
  const { estatisticas } = useEstatisticas();

  return (
    <EstatisticasDiv>
      {Object.entries(textos).map(([key, value], index) => (
        <div key={index}>
          <h1>{value}</h1>
          <ul>
            {estatisticas[key as KeysEstatisticas]?.map(
              (clube: ItemEstatisticas, indexB: number) => (
                <li key={indexB}>
                  {clube.nome}: {clube.quantidade}
                </li>
              )
            ) || <li>Nenhuma por enquanto</li>}
          </ul>
        </div>
      ))}
    </EstatisticasDiv>
  );
}
