import { colors } from '@/src/app/styles/global';
import React from 'react';
import styled from 'styled-components';
import { BiTargetLock } from "react-icons/bi";
import { Text } from '@/src/app/styles/styled';


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
  }
`;

const Services = () => {
  const servicesItems = ['Instalação', 'Lavagem', 'Vendas', 'Manutenção corretiva', 'Manutenção preventiva'];

  return (
    <ServicesContainer>
    {servicesItems.map(item => (
      <ServicesItem key={item}>
        <BiTargetLock size={40} color={colors.greySix} />
        <Text size={2.4} weight={500} color={colors.greySix}>{item}</Text>
      </ServicesItem>
    ))}
  </ServicesContainer>
  )
}

export default Services;