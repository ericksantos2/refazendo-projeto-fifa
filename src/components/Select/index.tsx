import { ReactNode, forwardRef, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { OpcoesSelect, SelectDiv, SelectStyled } from './styled';
import { UseFormSetValue } from 'react-hook-form';
import { input } from '../Form/inputs';

interface Props {
  children: ReactNode;
  label: string;
  idProp?: string;
  value: string;
  setValue: UseFormSetValue<any>;
}

const Select = forwardRef(
  ({ children, label, idProp, value, setValue, ...props }: Props, ref) => {
    const id = idProp || uuidv4();
    const [selectEnabled, setSelectEnabled] = useState(false);
    const [selected, setSelected] = useState<input>();
    const opcoesRef = useRef(null);

    useEffect(() => {
      if (opcoesRef.current) {
        const opcoes = opcoesRef.current as HTMLDivElement;
        opcoes.childNodes.forEach((opcaoArray) => {
          const opcao = opcaoArray as HTMLOptionElement;
          opcao.addEventListener('click', () => {
            const objeto = { value: opcao.value, text: opcao.innerText };
            setValue(value, opcao.value);
            setSelected(objeto);
          });
        });
      }
    }, [children, opcoesRef, setSelected, value, setValue]);

    const habilitaSelect = () => setSelectEnabled(!selectEnabled);

    return (
      <SelectDiv onClick={habilitaSelect} onPointerLeave={() => setSelectEnabled(false)}>
        <label htmlFor={id}>{label}</label>
        <SelectStyled
          id={id}
          value={selected?.text || 'Escolha alguma opção'}
          enabled={String(selectEnabled) as 'true' | 'false'}
          textoclaro={String(!selected?.text) as 'true' | 'false'}
          {...props}
        >
          <OpcoesSelect ref={opcoesRef}>{children}</OpcoesSelect>
        </SelectStyled>
      </SelectDiv>
    );
  }
);

export default Select;
