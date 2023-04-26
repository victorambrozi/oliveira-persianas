"use client";
import { colors } from '@/src/app/styles/global';
import { Text } from '@/src/app/styles/styled';
import Link from 'next/link';
import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  padding: 2rem 8rem;

  background: ${colors.greySix};  
`;
const Content = styled.div`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AboutMe = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Copyright = styled.div``;

const Footer = () => {

  return (
    <Container>
      <Text size={1.2} color={colors.greyTwo} weight={500}>Desenvolvedor</Text>
      <Content>
        <AboutMe>
          <Text size={1.2} color={colors.greyTwo} weight={500}>João Victor Ambrozi</Text>
          <SocialMedia>
            <Link href='https://github.com/victorambrozi' target='_blank'>
              <FaGithubSquare size={20} color={colors.greyTwo} />
            </Link>
            <Link href='https://www.linkedin.com/in/victorambrozi/' target='_blank'>
              <FaLinkedin size={20} color={colors.greyTwo} />
            </Link>
          </SocialMedia>
        </AboutMe>
        <Copyright>
          <Text size={1.2} color={colors.greyTwo} weight={500}>
            Copyright © 2023 - Oliveira Persianas - Salvador | CNPJ: 0.000.000/0001-00
          </Text>
        </Copyright>
      </Content>
    </Container>
  )
}

export default Footer;