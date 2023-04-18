import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { BiTargetLock } from "react-icons/bi";
import Slider from '../Slider/Slider';

// global components styled-components
import { colors } from '@/app/styles/global';
import { Title } from '@/app/styles/global';



const Section = styled.section`
    width: 100%;
    padding: 0 8rem;
    background-color: ${colors.greyThree};


    h2 {
        padding-top: 6rem;
    }
`;

const ServicesContainer = styled.div`
  width:  100%;
  max-width: 78rem;
  margin: 6rem auto 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;  
  gap: 2rem;

`;
const ServicesItem = styled.div`
  display: flex;
  align-items: center;
  
  p {
    margin-left: 1rem;
    text-transform: uppercase;
    font-size: 2.4rem;
    font-weight: 500;
    color: ${colors.greySix};
  }
`;
const Carrousel = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 3.6rem;
`;
const Button = styled.div``;

const ServicesComponent = () => {

  return (
    <Section>
      <Title color={colors.greySix}> Serviços </Title>
      <ServicesContainer>
        <ServicesItem>
          <BiTargetLock size={40} color={colors.greySix} />
          <p>Instalação</p>
        </ServicesItem>
        <ServicesItem>
          <BiTargetLock size={40} color={colors.greySix} />
          <p>Lavagem</p>
        </ServicesItem>
        <ServicesItem>
          <BiTargetLock size={40} color={colors.greySix} />
          <p>Vendas</p>
        </ServicesItem>
        <ServicesItem>
          <BiTargetLock size={40} color={colors.greySix} />
          <p>MAnutenção corretiva</p>
        </ServicesItem>
        <ServicesItem>
          <BiTargetLock size={40} color={colors.greySix} />
          <p>Manutenção preventiva</p>
        </ServicesItem>
      </ServicesContainer>
      <Carrousel>
        <Slider />
      </Carrousel>
      <Button>
        <Link href={'/contact'} />
      </Button>
    </Section>
  )
}

export default ServicesComponent;