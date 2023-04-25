"use client";
import styled from "styled-components";
import ServicesComponent from "./components/services/index";
import ProductComponent from "./components/products/index";
import { ContactComponent } from "./components/contact/index";
import Image from "next/image";

// assets
import { FaAngleDoubleDown } from 'react-icons/fa'
import cepe from "../public/images/clientsLogo/logo-cepe.svg"
import andes from "../public/images/clientsLogo/logo-andes.svg"
import faeb from "../public/images/clientsLogo/logo-faeb.svg"

// global components styled-components
import { colors, sansFont, serifFont } from "./styles/global";
import { Text, Subtitle } from "./styles/styled/index";


const Intro = styled.section`
  width: 100%;
  height: 100vh;

  padding: 4rem 8rem;
  
  position: relative;

  background-image: url("/images/bg-intro__intro.svg");
  background-repeat: no-repeat;
  background-size: cover;

  p {
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  margin-top: 16rem;
  font-family: ${serifFont.style.fontFamily};
  font-size: clamp(4.8rem, 5vw, 7.2rem);
  line-height: 72px;
  font-weight: 700;

  color: ${colors.greyTwo};

`;

const Icon = styled.div`
  position: absolute;

  bottom: 60px;
  left: calc(100% - 50%);
`;

const Break = styled.div`
  width: 100%;
  padding: 6rem 8rem;
  
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  
  background-image: url('/images/bg-break.svg');
  background-repeat: no-repeat;
  background-size: cover;

  p {
    line-height: 24px;
    font-style: italic;

    color: ${colors.greyTwo};
  }

`;

const ClientUs = styled.section`
  width: 100%;
  padding: 6rem 8rem;
  background-color: ${colors.greyThree};
`;

const Content = styled.div`
  margin: 6rem auto 0 auto;  
  
  width: 100%;
  
  display: grid;
  grid-template-columns: repeat(4, minmax(1rem, 18rem));
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  > img {
    width: 100%;
    max-width: 13rem;
    height: auto;
    transition: all ease-in-out .4s;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export default function Home() {
  return (
    <main>
      <Intro>
        <Title>
          <Text size={3.2} weight={300} family={sansFont.style.fontFamily}>
            Prazer, somos a
          </Text>
          Oliveira persianas
        </Title>
        <Text size={2.4} color={colors.greyTwo}>
          Trazendo mais elegância para seu ambiente
        </Text>
        <Icon>
          <FaAngleDoubleDown size={40} color={colors.greyTwo} />
        </Icon>
      </Intro>
      <ProductComponent />
      <ServicesComponent />
      <Break>
        <Text size={2.4}>
          Com mais de 20 anos de experiência no mercado. Podemos oferecer a melhor alternativa para o seu objetivo
        </Text>
      </Break>
      <ClientUs>
        <Subtitle color={colors.greySix}>
          Nossos Clientes
        </Subtitle>
        <Content>
          <Image src={cepe} alt="Logo da empresa cliente" />
          <Image src={andes} alt="Logo da empresa cliente" />
          <Image src={faeb} alt="Logo da empresa cliente" />
          <Image src={cepe} alt="Logo da empresa cliente" />
          <Image src={andes} alt="Logo da empresa cliente" />
          <Image src={faeb} alt="Logo da empresa cliente" />
          <Image src={cepe} alt="Logo da empresa cliente" />
          <Image src={andes} alt="Logo da empresa cliente" />
        </Content>
      </ClientUs>
      <ContactComponent />
    </main>
  )
}
