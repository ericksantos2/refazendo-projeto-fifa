import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { FormDiv } from './styled';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, useState } from 'react';
import { inputForm } from '../../interfaces/inputs';

export type TypeValues = { [x: string]: { value: string; text: string } };

interface Props {
  inputs: inputForm[];
  handleChange: (resultados: TypeValues) => void;
}

export default function Form({ inputs, handleChange: onChange }: Props) {
  const [values, setValues] = useState<TypeValues>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onChange(values);
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
    <FormDiv>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => {
          const id = uuidv4();
          return (
            <FormControl key={index} sx={{ minWidth: '250px' }}>
              {input.type === 'select' && (
                <>
                  <InputLabel id={id}>{input.label}</InputLabel>
                  <Select
                    labelId={id}
                    label={input.label}
                    value={values[input.value]?.value || ''}
                    onChange={handleChange(input.value)}
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
                  />
                </>
              )}
            </FormControl>
          );
        })}
        <Button variant='contained' type='submit'>
          Enviar
        </Button>
      </form>
    </FormDiv>
  );
}
