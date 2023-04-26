import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from 'styled-components';

import { colors } from '@/app/styles/global';

import { schema, FormProps } from './index';
import { MessageError } from '../MessageError/index';


const FormWrapper = styled.form`
  width: 100%;
  max-width: 48rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > input + label {
    margin-top: 2rem;
  }
`;
const Label = styled.label`
  margin-bottom: 0.4rem;

  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.8rem;
  text-transform: uppercase;

  color: ${colors.greyTwo};
`;
const Input = styled.input`
  padding: 1rem;
  background: ${colors.greySix};
  border: 1px solid ${colors.greyThree};
  outline: none;

  color: ${colors.greyTwo};

`;
const TextArea = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 10vh;
  max-height: 20vh;
  max-width: 100%;
  padding: 1rem;

  background: ${colors.greySix};
  border: 1px solid ${colors.greyThree};
  outline: none;
  resize: none;

  color: ${colors.greyTwo};
`;

const Submit = styled.button`
  width: 100%;
  max-width: 18vw;
  min-width: 10rem;

  margin-top: 2.8rem;
  padding: 2rem 1.4rem;

  background: ${colors.redGradient};
  border: none;
  border-radius: 10px;

  color: ${colors.greyTwo};
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 1.6rem;
  line-height: 1.6rem;
  text-transform: uppercase;

  transition: .4s;

  cursor: pointer;

  &:hover {
    filter: brightness(1.2)
  }
`;


const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormProps) => {
    reset();
    console.log(data)
  }
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Label>nome</Label>
      <Input {...register('name')} type='text' />
      {errors.name?.message && <MessageError message={errors.name.message} />}

      <Label>email</Label>
      <Input {...register('email')} type='email' />
      {errors.email?.message && <MessageError message={errors.email.message} />}

      <Label>telefone</Label>
      <Input {...register('phone')} type='text' />
      {errors.phone?.message && <MessageError message={errors.phone.message} />}

      <Label>mensagem</Label>
      <TextArea {...register('message')} />
      {errors.message?.message && <MessageError message={errors.message.message} />}

      <Submit type='submit'>Enviar</Submit>

    </FormWrapper>
  )
}

export default Form;