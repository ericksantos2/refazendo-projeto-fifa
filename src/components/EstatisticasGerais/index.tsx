import useEstatisticas from '../../hooks/useEstatisticas';
import { KeysEstatisticas } from '../../interfaces/estatisticas';
import { EstatisticasDiv } from './styled';

export default function EstatisticasGerais() {
  const { maiores } = useEstatisticas();

  return (
    <EstatisticasDiv>
      {['Qualidade', 'Liga', 'Clube', 'Nacionalidade'].map((item, index) => {
        const msg =
          item === 'Clube' ? 'Nenhum por enquanto' : 'Nenhuma por enquanto';
        const itemFind = item.toLowerCase() as KeysEstatisticas;
        return (
          <p key={index}>
            {item} com mais jogadores:{' '}
            <span>{maiores[itemFind]?.nome || msg}</span>
          </p>
        );
      })}
    </EstatisticasDiv>
  );
}
