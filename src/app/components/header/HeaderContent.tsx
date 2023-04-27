import React from 'react'
import styled from 'styled-components';
import { Subtitle } from '../../styles/styled/index';
import { colors } from '../../styles/global';

const Container = styled.div`
  width: 100%;
  height: 40vh;
  padding-bottom: 6rem;  
  background: url("/images/bg-title__sobre.svg") no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderContent = ({ 
  children,
 }: { 
  children: React.ReactNode 
}) => {
  return (
    <Container>
      <Subtitle color={colors.greyTwo}>{children}</Subtitle>
    </Container>
  )
}

export default HeaderContent;