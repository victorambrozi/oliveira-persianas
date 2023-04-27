import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Slider from '../Slider/index';
import { Services } from './components/Services/index';

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


const ServicesComponent = ({ id }: { id: string }) => {

  return (
    <Section id={id}>
      <Subtitle color={colors.greySix}> Serviços </Subtitle>
      <Services />
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