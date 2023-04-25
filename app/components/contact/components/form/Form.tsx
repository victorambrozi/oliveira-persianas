import { colors } from '@/app/styles/global';
import React from 'react';

import styled from 'styled-components';

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

  color: ${colors.greyTwo};
`;

const Submit = styled.button`
  width: 100%;
  max-width: 18vw;

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
  return (
    <FormWrapper>
      <Label>nome</Label>
      <Input />

      <Label>email</Label>
      <Input />

      <Label>telefone</Label>
      <Input />

      <Label>mensagem</Label>
      <TextArea />
      <Submit type='submit'>Enviar</Submit>

    </FormWrapper>
  )
}

export default Form;