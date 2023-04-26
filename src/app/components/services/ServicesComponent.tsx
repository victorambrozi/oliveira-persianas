import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { BiTargetLock } from "react-icons/bi";
import Slider from '../Slider/index';

// global components styled-components
import { colors } from '@/src/app/styles/global';
import { Subtitle } from '@/src/app/styles/styled/index';



const Section = styled.section`
    width: 100%;
    padding: 0 8rem 6rem 8rem;
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
  margin-top: 3.6rem;
`;
const Button = styled.div`
  a {
        margin: 6rem auto 0 auto;
        padding: 2rem 4rem;
        width: 100%;
        max-width: 28rem;
        
        text-transform: uppercase;
        letter-spacing: 1.5px;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 500;

        background: ${colors.redGradient};
        color: ${colors.greyTwo};

        border-radius: 1rem;
        transition: .4s;

        &:hover {
          filter: brightness(1.2)
        }
    }
`;


const ServicesComponent = () => {
  const servicesItems = ['Instalação', 'Lavagem', 'Vendas', 'Manutenção corretiva', 'Manutenção preventiva',]

  return (
    <Section>
      <Subtitle color={colors.greySix}> Serviços </Subtitle>
      <ServicesContainer>
        {servicesItems.map(item => (
          <ServicesItem key={item}>
            <BiTargetLock size={40} color={colors.greySix} />
            <p>{item}</p>
          </ServicesItem>
        ))}
      </ServicesContainer>
      <Carrousel>
        <Slider />
      </Carrousel>
      <Button>
        <Link href={'/contact'}>Entre em contato</Link>
      </Button>
    </Section>
  )
}

export default ServicesComponent;