import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { FormStyled } from './styled';
import { v4 as uuidv4 } from 'uuid';
import React, { ChangeEvent, useState } from 'react';
import { inputForm } from '../../interfaces/inputs';

export type TypeValues = { [x: string]: { value: string; text: string } };

interface Props {
  inputs: inputForm[];
  handleSubmit: (resultados: TypeValues) => void;
  style?: React.CSSProperties
}

export default function Form({ inputs, handleSubmit: onSubmit, style }: Props) {
  const [values, setValues] = useState<TypeValues>(
    inputs.reduce(
      (state, action) => ({ ...state, [action.value]: {} }),
      {}
    )
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(values);
  }

  const handleChange =
    (value: string) =>
    (
      e: SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const inputFind = inputs.find((input) =>
        input.inputs?.some((opcao) => opcao.value === e.target.value)
      );
      const opcao = inputFind?.inputs?.find(
        (input) => input.value === e.target.value
      );
      setValues((currentValues) => ({
        ...currentValues,
        [value]: {
          value: e.target.value,
          text: opcao?.text || '',
        },
      }));
    };

  return (
    <div style={style}>
      <FormStyled onSubmit={handleSubmit}>
        {inputs.map((input, index) => {
          const id = uuidv4();
          return (
            <FormControl key={index} sx={{ minWidth: '250px' }}>
              {input.type === 'select' && (
                <>
                  <InputLabel id={id}>{input.label}</InputLabel>
                  <Select
                    labelId={id}
                    data-testid={`formId__${input.value}`}
                    label={input.label}
                    value={values[input.value]?.value || ''}
                    onChange={handleChange(input.value)}
                    required={input.required}
                  >
                    {input.inputs?.map((opcao, indexB) => (
                      <MenuItem value={opcao.value} key={indexB}>
                        {opcao.text}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
              {input.type === 'input' && (
                <>
                  <TextField
                    id={id}
                    label={input.label}
                    variant='outlined'
                    onChange={handleChange(input.value)}
                    required={input.required}
                  />
                </>
              )}
            </FormControl>
          );
        })}
        <Button variant='contained' type='submit'>
          Enviar
        </Button>
      </FormStyled>
    </div>
  );
}
