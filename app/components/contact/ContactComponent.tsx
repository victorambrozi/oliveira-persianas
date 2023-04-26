import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { Form } from './components/form/index';
import type { DataProps } from '@/app/@types/colors';

import { Subtitle, Text } from '@/app/styles/styled/index';
import { colors } from '@/app/styles/global';
import Link from 'next/link';

const Section = styled.section`
    padding: 6rem 8rem;
    width: 100%;

    background: ${colors.greyFour};
`;
const Content = styled.section`
    width: 100%;
    height: 100%;
    margin-top: 6rem;

    display: flex;
    justify-content: center;
    gap: 8rem;
`;
const DataContact = styled.section`

  > a {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    color: ${colors.greyTwo};
    font-size: clamp(1rem, 2vw, 2.4rem);
    line-height: 2.4rem;
    font-weight: 300
  }
 
  > p + p {
    margin-top: 4rem;
  } 
  > h3 + p {
    margin-top: 4rem;
  }

  > p + h3 {
    margin-top: 6rem;
}
`;
const DataTitle = styled.h3`
    width: 100%;
    
    text-transform: uppercase;
    font-size: clamp(1rem, 2vw, 2.4rem);
    line-height: 2.4rem;
    font-weight: 600;

    color: ${colors.greyTwo};

`;


const ContactComponent = () => {
  const data: DataProps = {
    phone: ['(71) 9 9994-7962', '(71) 9 8139-6970'],
    email: 'oliveirapersianas4826@gmail.com',
    cnpj: '0.000.000/0001-00',
    instagram: {
      name: '@oliveirapersianas_',
      href: 'https://www.instagram.com/oliveirapersianas_/'
    }
  }
  return (
    <Section>
      <Subtitle color={colors.greyTwo}>Contato</Subtitle>
      <Content>
        <Form />
        <DataContact>
          <DataTitle>Dados</DataTitle>
          <Text size={2.4} weight={300} color={colors.greyTwo}>{data.phone[0]}</Text>
          <Text size={2.4} weight={300} color={colors.greyTwo}>{data.phone[1]}</Text>
          <Text size={2.4} weight={300} color={colors.greyTwo}>{data.email}</Text>

          <DataTitle>Instagram</DataTitle>
          <Link href={data.instagram.href} target='_blank'>
            <FaInstagram size={40} color={colors.greyTwo} />
            {data.instagram.name}
          </Link>
        </DataContact>
      </Content>
    </Section>
  )
}

export default ContactComponent;