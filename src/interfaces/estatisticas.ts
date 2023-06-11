export type KeysEstatisticas = 'qualidade' | 'liga' | 'clube' | 'nacionalidade';

export interface ItemEstatisticas {
  nome: string;
  value: string;
  quantidade: number;
}

export type Estatisticas = {
  [x in KeysEstatisticas]: ItemEstatisticas[];
};

export type Maiores = {
  [x in KeysEstatisticas]: ItemEstatisticas;
};