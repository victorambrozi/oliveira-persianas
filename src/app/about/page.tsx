"use client";

import React from 'react'
import { Text } from '../styles/styled';
import { colors } from '../styles/global';
import Slider from '../components/Slider/index';
import styled from 'styled-components';
import { Services } from '../components/services/components/Services/index';
import { HeaderContent } from "../components/header/index"
import { ContactComponent } from '../components/contact/index';


const Section = styled.section`
  width: 100%;
  padding: 6rem 8rem 0 8rem;

  > div:nth-child(1) {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;

    >p:nth-child(2) {
      width: 100;
      max-width:41.8rem;
    }
  }
`;
const Content = styled.div`

  + div {
    padding: 6rem 0;
  }

  > p:nth-child(1) {
    text-transform: uppercase;
    color: ${colors.greySix};
  }
`;

const Contact = () => {
  return (
    <main>
      <HeaderContent>
        Sobre
      </HeaderContent>
      <Section>
        <Content>
          <Text size={2.4} color={colors.greySix} weight={600}>Nossa história</Text>
          <Text size={1.6} color={colors.greySix} weight={400}>
            A Empresa Oliveira Persianas surge no mercado para atender as necessidades dos clientes no conforto do seu lar, desenvolvendo o trabalho em Montagem , instalação, manutenção corretiva e preventiva em Cortinas  e Persianas vertical, proporcionando  Harmonia, Requinte e Beleza para composição  dos ambientes internos.
          </Text>
        </Content>
        <Content>
          <Text size={2.4} color={colors.greySix} weight={600}>O que fazemos</Text>
          <Services />
          <Slider />
        </Content>
      </Section>
        <Content>
          <ContactComponent />
        </Content>
    </main>
  )
}

export default Contact;