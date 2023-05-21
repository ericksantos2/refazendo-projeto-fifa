import { forwardRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputStyled, { InputDiv, LabelInput } from './styled';

interface Props {
  label: string;
  idProp?: string;
}

const Input = forwardRef(({ label, idProp, ...props }: Props, ref) => {
  const id = idProp || uuidv4();
  return (
    <InputDiv>
      <LabelInput htmlFor={id}>{label}</LabelInput>
      <InputStyled
        {...props}
        id={id}
        ref={ref as React.LegacyRef<HTMLInputElement>}
      />
    </InputDiv>
  );
});

export default Input;
