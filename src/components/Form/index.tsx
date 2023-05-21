import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDiv } from './styled';
import Botao from '../Botao/styled';
import inputsForm from './inputs';
import Input from '../Input';
import Select from '../Select';
import React from 'react';

type opcao = 'qualidade' | 'liga' | 'clube' | 'nacionalidade';
export type ResultadoForm = {
  [texto in opcao]: string;
};

export default function Form() {
  const { register, handleSubmit, setValue } = useForm<ResultadoForm>();

  const onSubmit: SubmitHandler<ResultadoForm> = (data) => {
    console.log(data);
  };

  return (
    <FormDiv>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputsForm.map((inputForm, index) => (
          <React.Fragment key={index}>
            {inputForm.type === 'input' ? (
              <Input
                {...register(inputForm.value as opcao, {
                  required: inputForm.required || false,
                })}
                label={inputForm.label}
                key={index}
              />
            ) : (
              <Select
                label={inputForm.label}
                setValue={setValue}
                value={inputForm.value}
                key={index}
              >
                {inputForm.inputs?.map((input, indexInput) => (
                  <option value={input.value} key={indexInput}>
                    {input.text}
                  </option>
                ))}
              </Select>
            )}
          </React.Fragment>
        ))}
        <Botao type='submit'>Enviar</Botao>
      </form>
    </FormDiv>
  );
}
